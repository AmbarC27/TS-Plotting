import React, { useState } from 'react';

interface Props {
  onFormSubmit: (data: { numbers: number[]; strings: string[] }) => void;
}

const Dataentry: React.FC<Props> = ({ onFormSubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [columns, setColumn] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numbers = inputValue.split(',').map(Number);
    const strings = columns.split(',').filter(str => str.trim() !== '');

    onFormSubmit({ numbers, strings });
  }

  return (
    <div>
      <h1>Enter data below separated by comma</h1>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Enter data here separated by a comma"
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="fname" 
          name="fname"
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