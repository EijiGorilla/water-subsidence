import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Legend from '@arcgis/core/widgets/Legend';
import Search from '@arcgis/core/widgets/Search';
import Zoom from '@arcgis/core/widgets/Zoom';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import {
  hot_spot_layer,
  sar_points_layer,
  admin_boundary_kabupaten,
  admin_boundary_kecamatan,
  admin_boundary_desa,
} from './layers';

export const map = new Map({
  basemap: 'satellite', // "streets-night-vector", basemap, hybrid
  ground: 'world-elevation',
});

const admin_boundary_groupLayer = new GroupLayer({
  title: 'Admin. Boundary Layers',
  visible: true,
  visibilityMode: 'independent',
  layers: [admin_boundary_desa, admin_boundary_kecamatan, admin_boundary_kabupaten],
});

// interface Props {
//   color: any;
//   haloOpacity: any;
//   fillOpacity: any;
// }

// const highlightOptions: Props = {
//   color: [255, 255, 0, 1],
//   haloOpacity: 0.9,
//   fillOpacity: 0.2,
// };

export const view = new MapView({
  container: undefined,
  map,
  center: [106.8244387, -6.2392965],
  zoom: 11,
  // highlightOptions: highlightOptions,
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// To properly filter and query for chart, admin boundary layer is below point layers.
map.add(admin_boundary_groupLayer);
map.add(sar_points_layer);
map.add(hot_spot_layer);

//-------------------------

// Legend on the map
// Legend
export const legend_layerInfos_sar = [
  {
    layer: sar_points_layer,
    title: 'Displ. Rate (mm/yr)',
  },
];

export const legend_layerInfos_hotspot = [
  {
    layer: hot_spot_layer,
    title: 'Hot Spot Analysis',
  },
];

export const legend_layerInfos_sar_latestdate = [
  {
    layer: sar_points_layer,
    title: 'Latest Date (mm)',
  },
];

export const legend = new Legend({
  view,
  container: undefined,
  layerInfos: [
    {
      layer: sar_points_layer,
      title: 'Displ. Rate (mm/yr)',
    },
  ],
});

export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type === 'group') {
      item.open = true;
    }

    item.title === 'Kecamatan' || item.title === 'Desa'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

const sources = [
  {
    layer: sar_points_layer,
    searchFields: ['id'],
    displayField: 'id',
    exactMatch: false,
    outFields: ['id'],
    name: 'ID',
    placeholder: 'ID',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'ID',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

view.ui.add(searchWidget, { position: 'top-right' });

export const zoom = new Zoom({
  view,
});

view.ui.add(zoom, { position: 'top-right' });

// Watch the layer title when a layer is selected.
// reactiveUtils.watch(
//   () => layerList.tableList?.selectedItems.at(0)?.layer,
//   (layer) => {
//     // When a layer is selected log out its title
//     if (layer.title) {
//       console.log(layer.title);
//     }
//   },
// );
