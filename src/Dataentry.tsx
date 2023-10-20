import React, { useState } from 'react';

interface Props {
  onFormSubmit: (data: { numbers: number[]; strings: string[] }) => void;
}

const Dataentry: React.FC<Props> = ({ onFormSubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [columns, setColumn] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let entries:string = inputValue

    if (entries[0] === '['){
      entries = inputValue.slice(1,-1)
    }

    const numbers = entries.split(',').map(Number);
    const strings = columns.split(',').filter(str => str.trim() !== '');

    onFormSubmit({ numbers, strings });
  }

  return (
    <div>
      <h3>Enter data below separated by comma</h3>
      <h3> In the first box enter an array of numbers</h3>
      <h3> In the second box enter an array of strings which would correspond
        to each number to be plotted (Optional)</h3>
      <h3> Hit submit to visualize the plots</h3>
      <h3> You can choose whether you want to view the plot vertically
        (default) or horizontally</h3>
      <h3>Finally, enter the hexadecimal code of the bar color that you desire
        (purple by default), including #
      </h3>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Enter data here separated by a comma"
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <input 
          placeholder="Enter column value here separated by a comma (optional)"
          type="text" 
          value={columns}
          onChange={(e) => setColumn(e.target.value)}
          id="column" 
          name="column"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Dataentry;