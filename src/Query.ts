import { sar_points_layer, scenario_table } from './layers';
import { layerList, view } from './Scene';
import { date_sar_suffix, dates_sar, point_chart_y_variable } from './UniqueValues';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';

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
        return Object.assign({
          date: date,
          value0: obs === null ? undefined : obs,
          value1: scenario1, // status quo
          value2: scenario2, // simulated scenario 2
          value3: !scenario3 ? undefined : scenario3,
          value4: !scenario4 ? undefined : scenario4,
          value5: !scenario5 ? undefined : scenario5,
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
export async function generateChartData(selectedid: any) {
  if (selectedid) {
    const query = sar_points_layer.createQuery();
    query.where = 'objectid = ' + selectedid;
    return sar_points_layer.queryFeatures(query).then((results: any) => {
      var stats = results.features[0].attributes;
      const map = dates_sar.map((date: any, index: any) => {
        const dateString = date.replace(date_sar_suffix, '');
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        const date_n = new Date(year, month - 1, day);
        date_n.setHours(0, 0, 0, 0);
        return Object.assign({
          date: date_n.getTime(), //date.replace('f', ''),
          value: stats[dates_sar[index]],
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
