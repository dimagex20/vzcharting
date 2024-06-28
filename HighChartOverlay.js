// src/HighChartOverlay.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighChartOverlay = () => {
  const options = {
    title: {
      text: 'Overlay Time Series Lines'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    series: [
      {
        name: 'Series 1',
        data: [
          [Date.UTC(2023, 0, 1), 29.9],
          [Date.UTC(2023, 1, 1), 71.5],
          [Date.UTC(2023, 2, 1), 106.4],
          [Date.UTC(2023, 3, 1), 129.2],
          [Date.UTC(2023, 4, 1), 144.0]
        ],
        tooltip: {
          valueDecimals: 2
        }
      },
      {
        name: 'Series 2',
        data: [
          [Date.UTC(2023, 0, 1), 34.9],
          [Date.UTC(2023, 1, 1), 68.5],
          [Date.UTC(2023, 2, 1), 94.4],
          [Date.UTC(2023, 3, 1), 122.2],
          [Date.UTC(2023, 4, 1), 139.0]
        ],
        tooltip: {
          valueDecimals: 2
        }
      },
      {
        name: 'Series 3',
        data: [
          [Date.UTC(2023, 0, 1), 39.9],
          [Date.UTC(2023, 1, 1), 64.5],
          [Date.UTC(2023, 2, 1), 84.4],
          [Date.UTC(2023, 3, 1), 115.2],
          [Date.UTC(2023, 4, 1), 132.0]
        ],
        tooltip: {
          valueDecimals: 2
        }
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighChartOverlay;
