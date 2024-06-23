import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const App = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(response => response.json())
      .then(data => {
        setChartOptions({
          title: {
            text: data.title
          },
          series: [
            {
              data: data.data
            }
          ]
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        chartOptions && (
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        )
      )}
    </div>
  );
};

export default App;
