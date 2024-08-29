import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import ColorVariable from '@arcgis/core/renderers/visualVariables/ColorVariable';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import { SimpleMarkerSymbol, SimpleLineSymbol } from '@arcgis/core/symbols';
import { zoomToLayer } from './Query';
import {
  admin_boudnary_layer_title,
  color_hotspot,
  label_hotspot,
  latest_date_field,
  values_hotspot,
  view_maxScale,
  view_minScale,
} from './UniqueValues';

export const visualVariables = [
  new ColorVariable({
    field: latest_date_field,
    stops: [
      { value: -200, color: '#d7191c', label: '< -200' },
      { value: -120, color: '#fdae61' },
      { value: -15, color: '#ffffbf' },
      { value: 0, color: '#ffffff', label: '0' },
      { value: 80, color: '#3C9BE6', label: '> 80' },
    ],
  }),
];

export const sar_points_renderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    style: 'circle',
    color: [0, 0, 0],
    outline: {
      color: [0, 0, 0, 0],
      width: 0.5,
    },
    size: '6.5px',
  }),
  visualVariables: visualVariables,

  // https://developers.arcgis.com/javascript/latest/visualization/symbols-color-ramps/esri-color-ramps/
});

// custom popup
// const contentWidget = new CustomContent({
//   outFields: ['*'],
//   creator: (event: any) => {
//     const unique_id = event.graphic.attributes.id;
//     const object_id = event.graphic.attributes.objectid;
//     return `Point ID: ${unique_id}, ObjectID: ${object_id}`;
//   },
// });

// const templatePopup = new PopupTemplate({
//   outFields: ['*'],
//   title: 'Displacement Rate (mm/yr): <b>{dispr_mmyr}</b>',
//   lastEditInfoEnabled: false,
//   content: [contentWidget],
// });

// Good reference to vary point size by scale
// https://developers.arcgis.com/javascript/latest/sample-code/visualization-sm-reference-size/
// We are not doing this, as this affects rendering speed.

export const sar_points_layer = new FeatureLayer({
  portalItem: {
    id: 'f267cd68e2ce4c0b9d38e1b401d8b320',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 3,
  minScale: view_minScale,
  maxScale: view_maxScale,
  renderer: sar_points_renderer,
  popupEnabled: false,
  title: 'Land Displacement',
});
sar_points_layer.listMode = 'hide';
// sar_points_layer.popupTemplate = templatePopup;

// Optimized Hot Spot

const uniqueValueInfos_hotspot = values_hotspot.map((value: any, index: any) => {
  return Object.assign({
    value: value,
    label: label_hotspot[index],
    symbol: new SimpleMarkerSymbol({
      style: 'circle',
      color: color_hotspot[index],
      outline: {
        color: [0, 0, 0, 0],
        width: 0.5,
      },
      size: '6.5px',
    }),
  });
});

export const hot_spot_renderer = new UniqueValueRenderer({
  field: 'gi_bin',
  uniqueValueInfos: uniqueValueInfos_hotspot,
});

export const hot_spot_layer = new FeatureLayer({
  portalItem: {
    id: 'f267cd68e2ce4c0b9d38e1b401d8b320',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 3,
  minScale: 80000,
  maxScale: 0,
  popupEnabled: false,
  renderer: hot_spot_renderer,
  // eslint-disable-next-line no-useless-concat
  outFields: ['gi_bin'],
  title: 'Hot Spot Analysis',
});
hot_spot_layer.listMode = 'hide';
// hot_spot_layer.popupTemplate = templatePopup;

// Administrative Boundary
var admin_line_renderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#000000',
    width: '2.5px',
  }),
});

var admin_line_Kecamatan_renderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#ffff00ff',
    width: '2.5px',
  }),
});

export const admin_boundary_kabupaten = new FeatureLayer({
  portalItem: {
    id: 'f267cd68e2ce4c0b9d38e1b401d8b320',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 0,
  outFields: ['namobj'],
  // When renderer is defined, it does not get highlighted. why?
  // renderer: admin_line_renderer,
  popupEnabled: false,
  title: admin_boudnary_layer_title[0],
});

export const admin_boundary_kecamatan = new FeatureLayer({
  portalItem: {
    id: 'f267cd68e2ce4c0b9d38e1b401d8b320',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  popupEnabled: false,
  // renderer: admin_line_renderer,
  title: admin_boudnary_layer_title[1],
});

export const admin_boundary_desa = new FeatureLayer({
  portalItem: {
    id: 'f267cd68e2ce4c0b9d38e1b401d8b320',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  popupEnabled: false,
  title: admin_boudnary_layer_title[2],
});

// Scenario feature table
export const scenario_table = new FeatureLayer({
  portalItem: {
    id: '37a7d7bc59ac4630bd9ece7b24a81c85',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  outFields: ['*'],
  popupEnabled: false,
});
