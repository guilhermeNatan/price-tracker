import React from 'react';
import { Bar } from 'react-chartjs-2';


const config = {
  backgroundColor: 'rgba(255,99,132,0.2)',
  borderColor: 'rgba(255,99,132,1)',
  borderWidth: 1,
  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
  hoverBorderColor: 'rgba(255,99,132,1)',

};


const MBarChart = ({
  title, lineTitle, labels, data,
}) => (
  <div>
    <h2>{title}</h2>
    <Bar
      data={{
        labels,
        datasets: [{ ...config, data, label: lineTitle }],
      }}
      width={100}
      height={50}
      options={{
        maintainAspectRatio: true,
      }}
    />
  </div>
);

export default MBarChart;
