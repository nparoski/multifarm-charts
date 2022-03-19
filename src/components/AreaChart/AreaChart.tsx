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
import {IAreaChartData} from './interfaces';

interface IProps {
  data: IAreaChartData[];
  title: string;
  unit: string;
}

export default function AreaChart({data, title, unit}: IProps) {
  return (
    <div className="area-chart">
      <h3 className="area-chart__title">{title}</h3>
      <ResponsiveContainer width="100%" height="100%" minWidth={360} minHeight={256}>
        <RechartsAreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#962fef" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#395783" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <XAxis dataKey="xData" tickLine={false} />
          <YAxis dataKey="yData" tickLine={false} unit={unit} width={40} />
          <CartesianGrid stroke="#d0edf2" opacity={0.1} />
          <Tooltip />
          <Area
            unit={unit}
            type="monotone"
            dataKey="value"
            stroke="#962fef"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
