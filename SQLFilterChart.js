import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './App.css';

let chart_data = [1, 3, 2, 4, 6, 8, 5, 7,3,4,5,7,8,45,3,2,3,45,7,7]

function App() {
  const initialData = chart_data;
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);
  const [eventData, setEventData] = useState(initialData);

  const handleFilterChange = () => {
    const min = parseFloat(minValue) || 0;
    const max = parseFloat(maxValue) || Infinity;
    const newFilteredData = initialData.filter(value => value >= min && value <= max);
    setFilteredData(newFilteredData);
  };


  const handleEventChange = () => {
    console.log("handleEventChange()")
    // console.log(value)
    // const min = parseFloat(minValue) || 0;
    // const max = parseFloat(maxValue) || Infinity;
    // const eventData = initialData.filter(value => value >= min && value <= max);
    setEventData(eventData);
  };


  const options = {
    title: {
      text: 'My Highcharts Chart'
    },
    series: [{
      name: 'Sample Data',
      data: filteredData
    }]
  };

  return (
    <div className="App">
      <h1>Highcharts in React</h1>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Min Value: 
          <input 
            type="number" 
            value={minValue} 
            onChange={e => setMinValue(e.target.value)} 
            onBlur={handleFilterChange}
            style={{ marginRight: '10px' }}
          />
        </label>
        <label>
          Max Value: 
          <input 
            type="number" 
            value={maxValue} 
            onChange={e => setMaxValue(e.target.value)} 
            onBlur={handleFilterChange}
          />
        </label>
        <label>
          select event:
          <select onChange={handleFilterChange} style={{ marginLeft: '10px' }}>
            <option value="all">All</option>
            <option value="0-2">0 - 2</option>
            <option value="3-5">3 - 5</option>
            <option value="6-8">6 - 8</option>
          </select>
        </label>


      </div>
      <div style={{ width: '80%', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    </div>
  );
}

export default App;
