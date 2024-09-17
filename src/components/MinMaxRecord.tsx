import { useState, useEffect } from 'react';
import '@esri/calcite-components/dist/components/calcite-button';
import { CalciteButton } from '@esri/calcite-components-react';
import {
  getMinMaxRecords,
  getReferencePointValueForSubtraction,
  thousands_separators,
  zoomToMinMaxRecord,
} from '../Query';
import {
  date_sar_suffix,
  margin_bottom_title_item,
  margin_left_pane_title,
  secondary_color,
} from '../UniqueValues';

// Minimum and maximum records are obtained from the latest date
const MinxMaxRecord = (props: any) => {
  const [referencePointData, setReferencePointData] = useState<any>();
  const [minRecord, setMinRecord] = useState<any>();
  const [maxRecord, setMaxRecord] = useState<any>();
  const [originalMinRecord, setOriginalMinRecord] = useState<any>();
  const [originalMaxRecord, setOriginalMaxRecord] = useState<any>();
  const [zoomClickMin, setZoomClickMin] = useState<boolean>(false);
  const [zoomClickMax, setZoomClickMax] = useState<boolean>(false);
  const [newEndYearDate, setNewEndYearDate] = useState<any>();

  // Get reference point values for subtraction
  useEffect(() => {
    getReferencePointValueForSubtraction().then((response: any) => {
      setReferencePointData(response);
    });
  }, []);

  useEffect(() => {
    if (referencePointData) {
      // Update a reference point value with new end-year-date
      const dateString = props.newdates[props.newdates.length - 1].replace(date_sar_suffix, '');
      const year = dateString.substring(0, 4);
      const month = dateString.substring(4, 6);
      const day = dateString.substring(6, 8);
      const date_n = new Date(year, month - 1, day);
      date_n.setHours(0, 0, 0, 0);
      const ref_new_date = date_n.getTime();
      const find = referencePointData.filter((elem: any) => elem.date === ref_new_date);
      const ref_value = find[0].value;

      // New end-year date for filter
      setNewEndYearDate(props.newdates[props.newdates.length - 1]);
      // Excecute functions
      getMinMaxRecords(props.newdates).then((response: any) => {
        setOriginalMinRecord(response.min_value);
        setOriginalMaxRecord(response.max_value);
        const minimum = thousands_separators((response.min_value - ref_value).toFixed(2));
        const maximum = thousands_separators((response.max_value - ref_value).toFixed(2));
        setMinRecord(minimum);
        setMaxRecord(maximum);
      });
    }
  }, [referencePointData, props.newdates]);

  useEffect(() => {
    if (referencePointData) {
      zoomToMinMaxRecord(originalMinRecord, newEndYearDate);
    }
  }, [zoomClickMin]);

  useEffect(() => {
    if (referencePointData) {
      console.log(zoomClickMax);
      zoomToMinMaxRecord(originalMaxRecord, newEndYearDate);
    }
  }, [zoomClickMax]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          marginBottom: margin_bottom_title_item,
          marginLeft: margin_left_pane_title,
          marginRight: margin_left_pane_title,
          justifyContent: 'space-between',
        }}
      >
        <div style={{ color: 'white', fontSize: '1.5rem', marginRight: 'auto' }}>
          <div style={{ color: secondary_color, fontSize: '1rem' }}>Minimum Record</div>
          <span style={{ color: 'white', marginLeft: '5px' }}>
            {minRecord}
            <span style={{ color: secondary_color, fontSize: '0.9rem', paddingLeft: '5px' }}>
              mm
            </span>
          </span>
          <div>
            <CalciteButton
              id="minbutton"
              onClick={(event: any) => setZoomClickMin(zoomClickMin === false ? true : false)}
              slot="trigger"
              kind="inverse"
              scale="s"
              icon-start="layer-zoom-to"
            >
              Zoom to Min
            </CalciteButton>
          </div>
        </div>
        <div
          style={{
            color: 'white',
            fontSize: '1.5rem',
          }}
        >
          <div style={{ color: secondary_color, fontSize: '1rem' }}>Maximum Record</div>
          <span style={{ color: 'white', marginLeft: '5px' }}>
            {maxRecord}
            <span style={{ color: secondary_color, fontSize: '0.9rem', paddingLeft: '5px' }}>
              mm
            </span>
          </span>
          <div>
            <CalciteButton
              id="maxbutton"
              onClick={(event: any) => setZoomClickMax(zoomClickMax === false ? true : false)}
              slot="trigger"
              kind="inverse"
              scale="s"
              icon-start="layer-zoom-to"
            >
              Zoom to Max
            </CalciteButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinxMaxRecord;
