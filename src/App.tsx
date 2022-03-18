import React, {useEffect, useState} from 'react';
import AreaChart from './components/AreaChart/AreaChart';
import {getChartData} from './services/charts';
import {IChart} from './typescript/models/IChart';

function App() {
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
    <div className="App">
      <AreaChart data={[{xData: 0, yData: 0}]} />
    </div>
  );
}

export default App;
