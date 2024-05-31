import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './App.css';

function App() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your API endpoint
    const apiUrl = 'https://api.example.com/data';
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of numbers
        setChartData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const options = {
    title: {
      text: 'Dynamic Highcharts with API Data'
    },
    series: [{
      name: 'Sample Data',
      data: chartData
    }]
  };

  return (
    <div className="App">
      <h1>Highcharts in React</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div style={{ width: '80%', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
      )}
    </div>
  );
}

export default App;
