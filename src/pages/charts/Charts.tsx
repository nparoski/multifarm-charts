import React, {useEffect, useState} from 'react';

import AreaChart from '../../components/AreaChart/AreaChart';
import {getAssets} from '../../services/charts';
import {IChart, ISelectedFarm} from '../../typescript/models/IChart';
import {ReactComponent as BookmarkIcon} from './bookmark.svg';

import './Charts.css';
import {initialAPR} from './constants';
import transformAPRData from './utils/transformAPRData';
import transformFarmData from './utils/transformFarmData';

export default function Charts() {
  const [farms, setFarms] = useState<ISelectedFarm[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getAssets();

      if (res.ok) {
        const {data}: {data: IChart[]} = await res.json();

        const filteredAssets = data.filter((x) => x?.assetId === 'TERRA_Lido__LUNA');
        const farms = filteredAssets.flatMap((x) => {
          return x.selected_farm;
        });
        setFarms(farms);
      }
    })();
  }, []);

  return (
    <div className="page-charts">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="page-charts__title">
              <h2>
                Lido<span>: Luna</span>
              </h2>
              <button>
                <BookmarkIcon />
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="page-charts__report">
              <button>Report an error</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <AreaChart title="Asset APR (y)" data={transformAPRData(initialAPR)} unit="%" />
          </div>
          {farms.map((farm) => {
            const {data, unit} = transformFarmData(farm);

            return (
              <div className="col-xl-6" key={farm.farmId}>
                <AreaChart title="Asset TVL" data={data} unit={unit} />;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
