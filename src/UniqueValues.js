// Visible layers for segmented control
export const visible_layer_points = [
  'Displ. Rate (mm/yr)',
  'Hot Spot Analysis',
  'Latest Date (mm)',
  'OFF',
];
export const visible_layer_subdiv = [
  'All',
  'Cempakaputih Barat',
  'Durensawit',
  'Kapukmuara',
  'Maphar',
  'Petukangan Selatan',
];

// Administrative boundary
export const admin_boudnary_layer_title = ['Kabupaten', 'Kecamatan'];

// SAR Points renderer
export const view_minScale = 80000;
export const view_minScale_zoom = 7500;
export const view_maxScale = 0;

// Hot Spot renderer
export const values_hotspot = [-3, -2, -1, 0, 1, 2, 3];
export const color_hotspot = [
  '#D62F27',
  '#ED7551',
  '#FAB984',
  [0, 0, 0, 0], //'#9C9C9C', // Not Significant
  '#C0CCBE',
  '#849EBA',
  '#4575B5',
];

export const label_hotspot = [
  'Downward with 99% Confidence', // significant land subsidence
  'Downward with 95% Confidence',
  'Downward with 90% Confidence',
  'Not Significant',
  'Upward with 90% Confidence',
  'Upward with 95% Confidence',
  'Upward with 99% Confidence',
];

// Time series char filter
export const latest_date_field = 'x20231224';
export const date_sar_suffix = 'x';
export const dates_sar = ['x20150410', 'x20150504', 'x20150715'];

// Font and color
export const secondary_color = '#B2BEB5';
export const action_pane_title_font_size = '16px';
export const margin_left_pane_title = '7px';
export const margin_left_pane_item = '20px';
export const margin_right_pane_item = '5px';
export const margin_bottom_title_item = '5px';

// Chart Panel
export const scenario_type_field_name = 'scenario';
export const point_chart_y_variable = 'dispr_mmyr';
export const chart_panel_height_default = '79%';
export const chart_panel_height_collapsed = '7%';
export const chart_inside_label_color_down_mmyr = 'red';
export const chart_inside_label_color_up_mmyr = '#0095ffff';
export const chart_types_segmented_control = [
  'Displ.(mm)',
  'Scenario1 (status quo)',
  'Scenario2',
  'Scenario3',
  'Scenario4',
  'Scenario5',
];
