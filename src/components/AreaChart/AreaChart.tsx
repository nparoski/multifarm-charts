import React from 'react';
import {
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
} from 'recharts';
import './AreaChart.css';

interface IProps {
  data: {yData: any; xData: any; value: any}[];
}

export default function AreaChart({data}: IProps) {
  return (
    <div className="area-chart">
      <ResponsiveContainer width="100%" height="100%" minWidth={512} minHeight={256}>
        <RechartsAreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#962fef" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#395783" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <XAxis dataKey="xData" tickLine={false} />
          <YAxis dataKey="yData" tickLine={false} />
          <CartesianGrid stroke="#d0edf2" opacity={0.1} />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#962fef" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
