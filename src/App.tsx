import './App.css';
import React, { useState } from 'react';
import Dataentry from './Dataentry';
import BarChart from './Barchart';

type Direction = 'vertical' | 'horizontal';

interface PlotData {
  numbers: number[];
  strings: string[];
}

function App() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [strings, setStrings] = useState<string[]>([]);
  const [direction, setDirection] = useState<Direction>('vertical');
  const [barColor, setBarColor] = useState<string>('#81007F');
  

  const handlePlotData = (data: PlotData) => {
    setNumbers(data.numbers);
    setStrings(data.strings);
  }

  return (
    <div className="App">
    <h1>Bar Plot</h1>
    <Dataentry onFormSubmit={handlePlotData}/>
    
    <div className="dropdown-container">
        <select value={direction} onChange={(e) => setDirection(e.target.value as Direction)}>
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
        </select>
    </div>
    <div className="color-input-container">
    <label htmlFor="barColor">Enter Bar Color (HEX): </label>
    <input 
        type="text" 
        id="barColor" 
        value={barColor} 
        onChange={(e) => setBarColor(e.target.value)}
        placeholder="#81007F "
        title="Please enter a valid HEX color code." />
    </div>
    
    <div className="card">
        <BarChart numbers={numbers} labels={strings} direction={direction} barColor={barColor}/>
    </div>
</div>

    
  );
}

export default App;

