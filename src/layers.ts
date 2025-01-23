import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import { SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol } from '@arcgis/core/symbols';
import esriId from '@arcgis/core/identity/IdentityManager';
import OAuthInfo from '@arcgis/core/identity/OAuthInfo';
import {
  admin_boudnary_layer_title,
  color_hotspot,
  label_hotspot,
  values_hotspot,
  view_maxScale,
  view_minScale,
} from './UniqueValues';
import IdentityManager from '@arcgis/core/identity/IdentityManager';

// OAuth configuration
const oauthInfo = new OAuthInfo({
  appId: 'HONyZHclRNZwQvKu', // Replace with your app's Client ID
  portalUrl: 'https://www.arcgis.com',
  popupCallbackUrl: 'https://eijigorilla.github.io/water-subsidence',
  popup: true, // Use popup for authentication
});

IdentityManager.registerOAuthInfos([oauthInfo]);

// Automatically sign in the user
IdentityManager.checkSignInStatus(oauthInfo.portalUrl)
  .then(() => {
    console.log('User is signed in!');
  })
  .catch(() => {
    // If not signed in, initiate OAuth sign-in
    IdentityManager.getCredential(oauthInfo.portalUrl);
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
  // renderer: point_default_renderer,
  // popupEnabled: false,
  popupTemplate: {
    title: 'ID: <p>{objectid}</p>',
    lastEditInfoEnabled: false,
  },
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
// export const admin_boundary_kabupaten = new FeatureLayer({
//   portalItem: {
//     id: 'f267cd68e2ce4c0b9d38e1b401d8b320',
//     portal: {
//       url: 'https://gis.railway-sector.com/portal',
//     },
//   },
//   layerId: 0,
//   outFields: ['namobj'],
//   // When renderer is defined, it does not get highlighted. why?
//   // renderer: admin_line_renderer,
//   popupEnabled: false,
//   title: admin_boudnary_layer_title[0],
// });
// dddd

export const admin_boundary_kabupaten = new FeatureLayer({
  portalItem: {
    id: 'a17c4128ee3748c0aad6463bfad5ea16',
  },

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

// Interquartile Range value tables
export const iqr_table = new FeatureLayer({
  portalItem: {
    id: 'bd1126c44f574ffbbdbdc75d855e9c40',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  outFields: ['dates', 'max'],
  popupEnabled: false,
});
