import React, { useState } from 'react';

function FibonacciSeries() {
  const [seriesLength, setSeriesLength] = useState(0);
  const [fibonacciSeries, setFibonacciSeries] = useState([]);

  const generateSeries = () => {
    let series = [];
    let num1 = 0, num2 = 1;

    for (let i = 0; i < seriesLength; i++) {
      series.push(num1);
      const nextNum = num1 + num2;
      num1 = num2;
      num2 = nextNum;
    }

    setFibonacciSeries(series);
  }

  return (
    <div>
      <label>Series Length: </label>
      <input
        type="number"
        value={seriesLength}
        onChange={(e) => setSeriesLength(parseInt(e.target.value))}
      />
      <button onClick={generateSeries}>Generate</button>
      <ul>
        {fibonacciSeries.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default FibonacciSeries;
