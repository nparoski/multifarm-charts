import React from 'react';
import {Area, CartesianGrid, Tooltip, XAxis, YAxis, AreaChart as RechartsAreaChart} from 'recharts';

interface IProps {
  data: {yData: any; xData: any; value: any}[];
}

export default function AreaChart({data}: IProps) {
  return (
    <div>
      <RechartsAreaChart width={730} height={250} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="xData" />
        <YAxis dataKey="yData" />
        <CartesianGrid strokeDasharray="0 0" />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </RechartsAreaChart>
    </div>
  );
}
