import React, {useEffect, useState} from 'react';

import AreaChart from '../../components/AreaChart/AreaChart';
import {getTvl} from '../../services/charts';
import {IChart} from '../../typescript/models/IChart';
import {ReactComponent as BookmarkIcon} from './bookmark.svg';

import './Charts.css';
import {initalTVL, initialAPR} from './constants';

export default function Charts() {
  const [tvl, setTvl] = useState<IChart[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getTvl();
      const {data} = await res.json();

      setTvl(data);
    })();
  }, []);

  useEffect(() => {
    const filteredTvlAssets = tvl?.filter((x: any) => x?.assetId === 'TERRA_Lido__LUNA');
  }, [tvl]);

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
            <AreaChart title="Asset APR (y)" data={initialAPR} />
          </div>
          <div className="col-xl-6">
            <AreaChart title="Asset TVL" data={initalTVL} />
          </div>
        </div>
      </div>
    </div>
  );
}
