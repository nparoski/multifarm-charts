export default function transformAPRData(aprData: {date: string; value: number}[]) {
  const data = aprData
    .map((dailyApr) => {
      const {value, date} = dailyApr;

      const dateObj = new Date(date);

      const formatedDate = dateObj.toLocaleString('en-us', {month: 'short', day: '2-digit'}); /* Jun */

      return {
        xData: formatedDate,
        yData: value,
        value: value,
      };
    })
    .reverse();

  return data;
}
