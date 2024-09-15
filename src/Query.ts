import ColorVariable from '@arcgis/core/renderers/visualVariables/ColorVariable';
import { iqr_table, sar_points_layer, scenario_table } from './layers';
import { view } from './Scene';
import { date_sar_suffix, dates_sar, point_chart_y_variable, point_color } from './UniqueValues';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import { SimpleMarkerSymbol } from '@arcgis/core/symbols';

//
//
const field_names: any = [];
export async function getFieldNames() {
  if (sar_points_layer.loadStatus === 'loaded') {
    const nlengths = sar_points_layer.fields.length;

    for (let i = 0; i < nlengths; i++) {
      field_names.push(sar_points_layer.fields[i].name);
    }
  }
  return field_names;
}

// create data for scenario chart
export async function generateScenarioChartData(selectedarea: any, selectedcharttype: any) {
  // scenario1 (status quo) is selected and this is always executed.
  if (selectedarea) {
    const query = scenario_table.createQuery();
    query.where = "area = '" + selectedarea + "'";
    return scenario_table.queryFeatures(query).then((response: any) => {
      var stats = response.features;
      const data = stats.map((result: any, index: any) => {
        const attributes = result.attributes;
        const obs = attributes.obs;
        const scenario1 = attributes.scenario1;
        const scenario2 = attributes.scenario2;
        const scenario3 = attributes.scenario3;
        const scenario4 = attributes.scenario4;
        const scenario5 = attributes.scenario5;
        const date = attributes.date;
        const date_n = new Date(date);
        const year = date_n.toLocaleString('default', { year: 'numeric' });
        const month = date_n.toLocaleString('default', { month: '2-digit' });
        const day = date_n.toLocaleString('default', { day: '2-digit' });
        const date_label = `${year}-${month}-${day}`;
        return Object.assign({
          Date: date_label,
          date: date,
          observed: obs === null ? undefined : obs,
          statusQuo: scenario1, // status quo
          scenario2: scenario2, // simulated scenario 2
          scenario3: !scenario3 ? undefined : scenario3,
          scenario4: !scenario4 ? undefined : scenario4,
          scenario5: !scenario5 ? undefined : scenario5,
        });
      });
      return data;
    });
  } else {
    const default_data = [{}];
    return default_data;
  }
}

// Create data for time-series chart when a specific id is selected
// reference point values to extract from to account for displacement unrelated to subsidence.
export async function getReferencePointValueForSubtraction() {
  const ref_point_id = 1988268;
  const query = sar_points_layer.createQuery();
  query.where = 'objectid = ' + ref_point_id;
  return sar_points_layer.queryFeatures(query).then((results: any) => {
    var stats = results.features[0].attributes;
    const ref_data = dates_sar.map((date: any, index: any) => {
      const dateString = date.replace(date_sar_suffix, '');
      const year = dateString.substring(0, 4);
      const month = dateString.substring(4, 6);
      const day = dateString.substring(6, 8);
      const date_n = new Date(year, month - 1, day);
      date_n.setHours(0, 0, 0, 0);
      return Object.assign({
        date: date_n.getTime(),
        value: stats[date],
      });
    });
    return ref_data;
  });
}

export async function generateChartData(selectedid: any, newdates: any, refData: any) {
  if (selectedid) {
    const query = sar_points_layer.createQuery();
    query.where = 'objectid = ' + selectedid;
    return sar_points_layer.queryFeatures(query).then((results: any) => {
      var stats = results.features[0].attributes;
      const map = newdates.map((date: any, index: any) => {
        const dateString = date.replace(date_sar_suffix, '');
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        const date_label = `${year.toString()}-${month.toString()}-${day.toString()}`;
        const date_n = new Date(year, month - 1, day);
        date_n.setHours(0, 0, 0, 0);

        // get reference point data
        const find = refData.filter((elem: any) => elem.date === date_n.getTime());
        const ref_value = find[0].value;

        //
        return Object.assign({
          Date: date_label,
          date: date_n.getTime(), //date.replace('f', ''),
          // value: stats[newdates[index]],
          value: stats[newdates[index]] - ref_value, // subtract to account for displacement unrelated to subsidence
        });
      });
      const displ_mmyr = stats[point_chart_y_variable];
      return [map, displ_mmyr];
    });
  } else {
    const default_data = [{}];
    return default_data;
  }
}

export async function updateRendererForSymbology(last_date: any) {
  const query = iqr_table.createQuery();
  query.where = "dates = '" + last_date + "'";
  query.outFields = ['dates', 'max', 'q1', 'min'];
  const response = await iqr_table.queryFeatures(query);
  var attributes = response.features[0].attributes;
  // const max = attributes['max'];
  const max = Math.ceil(attributes['max'] * 0.8);
  const q1 = attributes['q1'];
  const min = Math.ceil(q1 * 2);

  // object array for visualVariables
  const values = [min, q1, q1 / 3, 0, max];
  const stops = values.map((value: any, index: any) => {
    return Object.assign({
      value: value,
      color: point_color[index],
      label:
        index === 0 ? '< ' + value.toString() : index === 3 ? '0' : index === 4 ? '> ' + max : '',
    });
  });

  const new_visualVariable = [
    new ColorVariable({
      field: last_date,
      stops: stops,
    }),
  ];

  const new_point_renderer = new SimpleRenderer({
    symbol: new SimpleMarkerSymbol({
      style: 'circle',
      color: [0, 0, 0],
      outline: {
        color: [0, 0, 0, 0],
        width: 0.5,
      },
      size: '6.5px',
    }),
    visualVariables: new_visualVariable,

    // https://developers.arcgis.com/javascript/latest/visualization/symbols-color-ramps/esri-color-ramps/
  });

  return new_point_renderer;
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        //speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}
