import React, {useEffect, useState} from 'react';

import AreaChart from '../../components/AreaChart/AreaChart';
import {getChartData} from '../../services/charts';
import {IChart} from '../../typescript/models/IChart';

import './Charts.css';

export default function Charts() {
  const [apiData, setApiData] = useState<any[]>([]);
  const [chartData, setChartData] = useState<IChart[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getChartData();
      const {data} = await res.json();

      setApiData(data);
    })();
  }, []);

  useEffect(() => {
    const filteredData = apiData?.filter((x: any) => x?.assetId === 'TERRA_Lido__LUNA');

    setChartData(filteredData.length ? filteredData : []);
  }, [apiData]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Lido: Luna</h2>
          </div>
          <div className="col-6">
            <button>Report an error</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <AreaChart
              title="Asset APR (y)"
              data={[
                {xData: 0, yData: 0, value: 12},
                {xData: 1, yData: 1, value: 11},
                {xData: 2, yData: 2, value: 9},
                {xData: 3, yData: 3, value: 10},
                {xData: 4, yData: 4, value: 7},
                {xData: 5, yData: 5, value: 6},
                {xData: 6, yData: 6, value: 5},
                {xData: 7, yData: 7, value: 4},
                {xData: 8, yData: 8, value: 3},
                {xData: 9, yData: 9, value: 2},
                {xData: 10, yData: 10, value: 1},
                {xData: 11, yData: 11, value: 0.9},
              ]}
            />
          </div>
          <div className="col-xl-6">
            <AreaChart
              title="Asset TVL"
              data={[
                {xData: 0, yData: 0, value: 1},
                {xData: 1, yData: 1, value: 1.1},
                {xData: 2, yData: 2, value: 2.3},
                {xData: 3, yData: 3, value: 3.3},
                {xData: 4, yData: 4, value: 2.9},
                {xData: 5, yData: 5, value: 3},
                {xData: 6, yData: 6, value: 5},
                {xData: 7, yData: 7, value: 7},
                {xData: 8, yData: 8, value: 9},
                {xData: 9, yData: 9, value: 6},
                {xData: 10, yData: 10, value: 5},
                {xData: 11, yData: 11, value: 2},
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}