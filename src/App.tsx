import './App.css';
import React, { useState } from 'react';
import Dataentry from './Dataentry';
import BarChart from './Barchart';

type Direction = 'vertical' | 'horizontal';

interface FormData {
  numbers: number[];
  strings: string[];
  // barColor: string; //
}

function App() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [strings, setStrings] = useState<string[]>([]);
  const [direction, setDirection] = useState<Direction>('vertical');
  const [barColor, setBarColor] = useState<string>('#0F0F0F'); //
  

  const handleFormData = (data: FormData) => {
    setNumbers(data.numbers);
    setStrings(data.strings);
    // setBarColor(data.barColor)
  }

  return (
    <div className="App">
    <h1>Hello</h1>
    <Dataentry onFormSubmit={handleFormData}/>
    
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
        pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        placeholder="#0000FF" 
        title="Please enter a valid HEX color code." />
    </div>
    
    <div className="card">
        <BarChart numbers={numbers} labels={strings} direction={direction} barColor={barColor}/>
    </div>
</div>

    
  );
}

export default App;

