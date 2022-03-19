import {ISelectedFarm} from '../../../typescript/models/IChart';

export default function transformFarmData(farm: ISelectedFarm) {
  let unit = '';

  const data = farm.tvlStakedHistory
    .map((dailyTvl) => {
      const {value, date} = dailyTvl;

      const valueParts = Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 2,
      }).formatToParts(value);

      const formatedValue = Number(valueParts[0].value + valueParts[1].value + valueParts[2].value);
      unit = valueParts[3].value;

      const dateObj = new Date(date);

      const formatedDate = dateObj.toLocaleString('en-us', {month: 'short', day: '2-digit'}); /* Jun */

      return {
        xData: formatedDate,
        yData: formatedValue,
        value: formatedValue,
      };
    })
    .reverse();

  return {
    unit,
    data,
  };
}
