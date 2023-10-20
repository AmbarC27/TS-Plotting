import React from 'react';
import './Barchart.css';

interface Props {
  numbers: number[];
  labels: string[];
  direction: 'vertical' | 'horizontal';
  barColor: string;
}

const width = 600;
const height = 300;
const bar_width = 40;
const padding = 10;

const BarChart: React.FC<Props> = ({ numbers, labels, direction, barColor }) => {
  const maxValue = Math.max(...numbers);
  const totalBars = numbers.length;

  const bars = numbers.map((number, index) => {
    const barHeight = (number / maxValue) * height;
    const barX = (width / totalBars) * index;
    const barY = height - barHeight;
    
    let labelX = barX + bar_width / 2;
    let labelY = direction === 'vertical' ? height + 20 : barY + bar_width / 2;

    if (direction === 'horizontal') {
      labelX = padding;
      labelY = barY + bar_width / 2; 
    }

    return (
      <g key={index}>
        {(() => {
          if (direction === 'vertical') {
            return <rect x={barX} y={barY} width={bar_width} height={barHeight} fill={barColor} />;
          } else if (direction === 'horizontal') {
            return <rect x={0} y={barY} width={barHeight} height={bar_width} fill={barColor} />;
          }
        })()}
        <text x={labelX} y={labelY} textAnchor="end" alignmentBaseline="middle" fontSize="12">
          {labels[index]}
        </text>
      </g>
    );
  });

  return (
    <div className="card">
      <svg width={width} height={height + 30}>
        {bars}
      </svg>
    </div>
  );
};

export default BarChart;
