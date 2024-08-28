import { useRef, useEffect, useState } from 'react';
// import Select from 'react-select';
import {
  map,
  view,
  basemaps,
  layerList,
  legend,
  legend_layerInfos_hotspot,
  legend_layerInfos_sar,
  legend_layerInfos_sar_latestdate,
} from './Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-segmented-control';
import '@esri/calcite-components/dist/components/calcite-segmented-control-item';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalcitePanel,
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
} from '@esri/calcite-components-react';
import {
  admin_boundary_kabupaten,
  hot_spot_layer,
  sar_points_dispmmyr_renderer,
  sar_points_latestdate_renderer,
  sar_points_layer,
} from './layers';
import TimeSeriesChart from './components/TimeSeriesChart';
import {
  visible_layer_points,
  secondary_color,
  admin_boudnary_layer_title,
  action_pane_title_font_size,
  margin_left_pane_title,
  margin_left_pane_item,
  margin_bottom_title_item,
  margin_right_pane_item,
  chart_types_segmented_control,
  chart_panel_height_collapsed,
  chart_panel_height_default,
} from './UniqueValues';
import ScenarioChart from './components/ScenarioChart';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  //**** Set states */
  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);
  const layerLegendDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);
  const [selectedId, setSelectedId] = useState<any | undefined | null>(null);
  const [selectedIdKabupaten, setSelectedIdKabupaten] = useState<any | undefined | null>(null);
  const [selectedAreaForScenario, setSelectedAreaForScenario] = useState<any | undefined | null>(
    null,
  );

  const [sarPointLayerLoaded, setSarPointLayerLoaded] = useState<any>();
  const [fieldNames, setFieldNames] = useState<any>();

  // Layers in segmented control item
  const [sarPointlayerSelected, setSarPointLayerSelected] = useState<any>(visible_layer_points[0]);

  // collapsible calcite panel
  const [chartPanelHeight, setChartPanelHeight] = useState<any | undefined>('7%');
  const [chartTypeSelected, setChartTypeSelected] = useState<any>(chart_types_segmented_control[0]);

  // highlighted feature
  const [highlightedFeatureLayer, setHighlightedFeatureLayer] =
    useState<FeatureLayer>(sar_points_layer);
  // --------------------------------------------------------------------------------- //
  // Layers toggle
  // SAR Displacement layers
  useEffect(() => {
    console.log(sarPointlayerSelected);
    sarPointlayerSelected === visible_layer_points[0]
      ? (sar_points_layer.visible = true) &&
        (sar_points_layer.renderer = sar_points_dispmmyr_renderer) &&
        (legend.layerInfos = legend_layerInfos_sar) &&
        (hot_spot_layer.visible = false)
      : sarPointlayerSelected === visible_layer_points[2]
        ? (hot_spot_layer.visible = true) &&
          (legend.layerInfos = legend_layerInfos_hotspot) &&
          (sar_points_layer.visible = false)
        : sarPointlayerSelected === visible_layer_points[1]
          ? (sar_points_layer.renderer = sar_points_latestdate_renderer) &&
            (sar_points_layer.visible = true) &&
            (legend.layerInfos = legend_layerInfos_sar_latestdate) &&
            (hot_spot_layer.visible = false)
          : sarPointlayerSelected === visible_layer_points[3]
            ? (sar_points_layer.visible = false) || (hot_spot_layer.visible = false)
            : console.log('failed');
  }, [sarPointlayerSelected]);

  // Layer laoded and get clicked point objectid
  useEffect(() => {
    sar_points_layer.load().then(() => {
      setSarPointLayerLoaded(sar_points_layer.loadStatus);
      // zoomToLayer(sar_points_layer);

      // Get field names to extract date fieldsA
      // getFieldNames().then((response: any) => {
      //   setFieldNames(response);
      // });
      // Clickable only when points are loaded on the map.
      view.when(() => {
        view.on('click', (event: any) => {
          view.hitTest(event).then((response: any) => {
            const result = response.results[0];
            const graphic = result?.graphic.layer;

            // For displacement chart
            // When a mouse is clicked ouside the boundary of imported layers, 'graphic' return null (chart is reset).
            // else it return the title of a selected layer.
            const layer_title = !graphic ? setSelectedId(null) : result.graphic.layer.title;

            // When the selected layer belongs to the admin boundary titles, it return null (chart is reset).
            !result ||
            layer_title === admin_boudnary_layer_title[0] ||
            layer_title === admin_boudnary_layer_title[1]
              ? setSelectedId(null)
              : setSelectedId(result.graphic.attributes.objectid);

            // For Scenario filtering and Chart
            !result
              ? setSelectedAreaForScenario(null)
              : layer_title === admin_boudnary_layer_title[0]
                ? setSelectedAreaForScenario(result.graphic.attributes['namobj'])
                : console.log('failed');

            //// this is for only highlighting Kabupaten boundary when clicked
            result && layer_title === admin_boudnary_layer_title[0]
              ? setSelectedIdKabupaten(result.graphic.attributes.objectid)
              : console.log('failed');
          });
        });
      });
    });
  }, []);

  // Highlight Hook -------------------------------------------
  useEffect(() => {
    // Highlight the clicked point
    setHighlightedFeatureLayer(
      sarPointlayerSelected === visible_layer_points[0] ||
        sarPointlayerSelected === visible_layer_points[1]
        ? sar_points_layer
        : hot_spot_layer,
    );
    let highlight: any;
    selectedId &&
      view.whenLayerView(highlightedFeatureLayer).then((layerView: any) => {
        highlight = layerView.highlight(selectedId);
        view.on('click', function () {
          layerView.filter = new FeatureFilter({
            where: undefined,
          });
          highlight.remove();
        });
      });
  }, [selectedId]);

  useEffect(() => {
    // Highlight the clicked point
    setHighlightedFeatureLayer(admin_boundary_kabupaten);
    let highlight: any;

    // need to get objectid for this layer
    selectedIdKabupaten &&
      view.whenLayerView(admin_boundary_kabupaten).then((layerView: any) => {
        highlight = layerView.highlight(selectedIdKabupaten);
        view.on('click', function () {
          layerView.filter = new FeatureFilter({
            where: undefined,
          });
          highlight.remove();
        });
      });
  }, [selectedIdKabupaten]);
  // -------------------------------------------------------------------

  // Legend
  useEffect(() => {
    // reactiveUtils
    //   .whenOnce(() => !view.updating)
    //   .then(() => {
    //     generateRenderer();
    //   });
    // function generateRenderer() {
    //   // Configure parameters for the color renderer generator
    //   // the layer must be specified along with a field name
    //   // or arcade expression. The view and other properties determine
    //   // the appropriate default color scheme.
    // const colorParams: any = {
    //     layer: sar_points_layer,
    //     valueExpression: '( $feature.dispr_mmyr / $feature.dispr_mmyr ) * 100',
    //     view: view,
    //     theme: 'above-and-below',
    //     outlineOptimizationEnabled: true,
    //   };
    //   // Generate a continuous color renderer based on the
    //   // statistics of the data in the provided layer
    //   // and field normalized by the normalizationField.
    //   //
    //   // This resolves to an object containing several helpful
    //   // properties, including color scheme, statistics,
    //   // the renderer and visual variable
    //   let rendererResult: any;
    //   colorRendererCreator
    //     .createContinuousRenderer(colorParams)
    //     .then((response: any) => {
    //       // Set the renderer to the layer and add it to the map
    //       rendererResult = response;
    //       sar_points_layer.renderer = rendererResult.renderer;
    //       // Generate a histogram for use in the slider. Input the layer
    //       // and field or arcade expression to generate it.
    //       return histogram({
    //         layer: sar_points_layer,
    //         valueExpression: colorParams.valueExpression,
    //         view: view,
    //         numBins: 70,
    //       });
    //     })
    //     .then((histogramResult: any) => {
    //       const colorSlider = ColorSlider.fromRendererResult(rendererResult, histogramResult);
    //       colorSlider.container = 'slider';
    //       colorSlider.primaryHandleEnabled = true;
    //       colorSlider.labelFormatFunction = (value: any, type: any) => {
    //         return value.toFixed(1);
    //       };
    //       colorSlider.viewModel.precision = 1;
    //       view.ui.add('legendDiv', 'bottom-left');
    //       // When the user slides the handle(s), update the renderer
    //       // with the updated color visual variable object
    //       function changeEventHandler() {
    //         const renderer = rendererResult.renderer;
    //         // const renderer = sar_points_layer.renderer.clone(); // clone() gives error. why?
    //         const colorVariable = renderer.visualVariables[0].clone();
    //         const outlineVariable = renderer.visualVariables[1];
    //         colorVariable.stops = colorSlider.stops;
    //         renderer.visualVariables = [colorVariable, outlineVariable];
    //         sar_points_layer.renderer = renderer;
    //       }
    //       // colorSlider.on(
    //       //   ['thumb-change', 'thumb-drag', 'min-change', 'max-change'],
    //       //   changeEventHandler,
    //       // );
    //     });
    // }
  }, []);

  // Open LayerList widget when opening a web app
  useEffect(() => {
    setNextWidget('layers');
  }, []);

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize
       */

      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;

      // Legend
      legend.container = layerLegendDiv.current;
      view.ui.add(legend, 'bottom-left');
    }
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      height: 35,
      width: '170px',
      color: '#ffffff',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <div>
      <CalciteShell>
        {/* <header
          slot="header"
          id="header-title"
          style={{
            display: 'flex',
            width: '100%',
            height: '55px',
            padding: '0.5rem 0.2rem 0.5rem 1rem',
            borderStyle: 'solid',
            borderWidth: 1,
          }}
        ></header> */}

        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Main Pane"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            // style={{ width: '20vw' }}
            hidden
          >
            {/* Time Period */}
            <div
              style={{
                fontSize: action_pane_title_font_size,
                color: secondary_color,
                marginBottom: margin_bottom_title_item,
                marginLeft: margin_left_pane_title,
                marginTop: '10px',
              }}
            >
              Time Period:
            </div>
            <div style={{ fontSize: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
              Apr.10, 2015 - Dec.10, 2023
            </div>

            {/* Layers */}
            <div
              style={{
                fontSize: action_pane_title_font_size,
                color: secondary_color,
                marginBottom: margin_bottom_title_item,
                marginLeft: margin_left_pane_title,
                marginTop: '20px',
              }}
            >
              Admin. Boundary Layers:
            </div>
            <div
              id="layers-container"
              ref={layerListDiv}
              style={{ marginLeft: margin_left_pane_item, marginRight: margin_right_pane_item }}
            ></div>

            {/* SAR Points Layer */}
            <div
              style={{
                fontSize: action_pane_title_font_size,
                marginLeft: margin_left_pane_title,
                marginTop: '20px',
                marginBottom: margin_bottom_title_item,
                color: secondary_color,
              }}
            >
              Visible Displacement Layer:
            </div>
            <CalciteSegmentedControl
              style={{
                marginBottom: '20px',
                marginLeft: margin_left_pane_item,
                marginRight: margin_right_pane_item,
              }}
              scale="m"
              onCalciteSegmentedControlChange={(event: any) => {
                setSarPointLayerSelected(event.target.selectedItem.id);
              }}
            >
              {sarPointlayerSelected &&
                visible_layer_points.map((layer: any, index: any) => {
                  return (
                    <CalciteSegmentedControlItem
                      {...(sarPointlayerSelected === layer ? { checked: true } : {})}
                      key={index}
                      value={layer}
                      id={layer}
                    >
                      {layer}
                    </CalciteSegmentedControlItem>
                  );
                })}
            </CalciteSegmentedControl>

            {/* Administrative Boundary */}
            {/* <div style={{ color: secondary_color, margin: '7px' }}>
              Filter Displ. by Admin. Boundary:{' '}
            </div>
            <CalciteSegmentedControl
              style={{ marginTop: 'auto', marginBottom: 'auto', margin: '5px' }}
              scale="s"
              layout="horizontal"
              onCalciteSegmentedControlChange={(event: any) => {
                setAdminBoundaryLayerSelected(event.target.selectedItem.id);
              }}
            >
              {adminBoundarylayerSelected &&
                visible_layer_subdiv.map((layer: any, index: any) => {
                  return (
                    <CalciteSegmentedControlItem
                      {...(adminBoundarylayerSelected === layer ? { checked: true } : {})}
                      key={index}
                      value={layer}
                      id={layer}
                    >
                      {layer}
                    </CalciteSegmentedControlItem>
                  );
                })}
            </CalciteSegmentedControl> */}
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="basemap-container" ref={calcitePanelBasemaps}></div>
          </CalcitePanel>
          {/* https://developers.arcgis.com/javascript/latest/sample-code/visualization-sm-reference-size/ */}
          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' && (
              <div className="informationDiv">
                <div
                  style={{
                    fontSize: '16px',
                    color: secondary_color,
                    marginTop: '10px',
                    marginLeft: '10px',
                  }}
                >
                  Overview
                </div>
                <div>
                  <img
                    src="https://EijiGorilla.github.io/Symbols/Land_Subsidence/Overview.svg"
                    alt="Overview"
                    height={'100%'}
                    width={'100%'}
                    style={{ marginBottom: 'auto' }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '16px',
                      color: secondary_color,
                      marginTop: '10px',
                      marginLeft: '10px',
                    }}
                  >
                    Chart:
                  </div>
                  <img
                    src="https://EijiGorilla.github.io/Symbols/Land_Subsidence/Chart_displacement.svg"
                    alt="Overview"
                    height={'100%'}
                    width={'100%'}
                    style={{ marginBottom: 'auto', marginTop: 'auto' }}
                  />
                </div>
                <div>
                  <img
                    src="https://EijiGorilla.github.io/Symbols/Land_Subsidence/Chart_scenario_status_quo.svg"
                    alt="Overview"
                    height={'100%'}
                    width={'100%'}
                    style={{ marginBottom: 'auto', marginTop: 'auto' }}
                  />
                </div>
                <div>
                  <img
                    src="https://EijiGorilla.github.io/Symbols/Land_Subsidence/Chart_scenarios.svg"
                    alt="Overview"
                    height={'100%'}
                    width={'100%'}
                    style={{ marginBottom: 'auto', marginTop: 'auto' }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '16px',
                      color: secondary_color,
                      marginTop: '10px',
                      marginLeft: '10px',
                    }}
                  >
                    Hot Spot Analysis:
                  </div>
                  <img
                    src="https://EijiGorilla.github.io/Symbols/Land_Subsidence/Hot_spot_analysis.svg"
                    alt="Overview"
                    height={'100%'}
                    width={'100%'}
                    style={{ marginBottom: 'auto', marginTop: 'auto' }}
                  />
                </div>
              </div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div className="mapDiv" ref={mapDiv}></div>
        {/* Lot progress chart is loaded ONLY when charts widget is clicked. */}
        <CalcitePanel
          collapsible
          heading="Chart Panel"
          style={{
            height:
              chartPanelHeight === chart_panel_height_collapsed
                ? chart_panel_height_default
                : chart_panel_height_collapsed,
          }}
          onCalcitePanelToggle={(event: any) => {
            setChartPanelHeight(
              chartPanelHeight === chart_panel_height_default
                ? chart_panel_height_collapsed
                : chart_panel_height_default,
            );
          }}
        >
          {/* Choose chart types */}
          <div style={{ display: 'flex' }}>
            <CalciteSegmentedControl
              style={{
                marginTop: '5px',
                marginBottom: '5px',
                marginLeft: margin_left_pane_item,
                marginRight: margin_right_pane_item,
              }}
              scale="s"
              onCalciteSegmentedControlChange={(event: any) => {
                setChartTypeSelected(event.target.selectedItem.id);
              }}
            >
              {chartTypeSelected &&
                chart_types_segmented_control.map((chart: any, index: any) => {
                  return (
                    <CalciteSegmentedControlItem
                      {...(chartTypeSelected === chart ? { checked: true } : {})}
                      key={index}
                      value={chart}
                      id={chart}
                    >
                      {chart}
                    </CalciteSegmentedControlItem>
                  );
                })}
            </CalciteSegmentedControl>

            {/* Display a selected admin boundary name only when Scenario charts are chosen. */}
            {chartTypeSelected !== chart_types_segmented_control[0] && (
              <span style={{ margin: 'auto' }}>
                Admin. Boundary: <b style={{ color: '#e8ff00ff' }}>{selectedAreaForScenario}</b>
              </span>
            )}
          </div>

          {/* Chart Types */}
          {chartTypeSelected === chart_types_segmented_control[0] && (
            <TimeSeriesChart
              // nextwidget={nextWidget === activeWidget ? null : nextWidget}
              selectedid={selectedId}
            />
          )}

          {chartTypeSelected !== chart_types_segmented_control[0] && (
            <ScenarioChart
              // nextwidget={nextWidget === activeWidget ? null : nextWidget}
              selectedarea={selectedAreaForScenario}
              selectedcharttype={chartTypeSelected}
            />
          )}
        </CalcitePanel>
      </CalciteShell>
    </div>
  );
}

export default App;
