import React from 'react';
import './Barchart.css';

interface Props {
  numbers: number[];
  labels: string[];
  direction: 'vertical' | 'horizontal';
  barColor: string;
}

const SVG_WIDTH = 600;
const SVG_HEIGHT = 300;
const BAR_WIDTH = 40;
const LABEL_PADDING = 10;

const BarChart: React.FC<Props> = ({ numbers, labels, direction, barColor }) => {
  const maxValue = Math.max(...numbers);
  const totalBars = numbers.length;

  const bars = numbers.map((number, index) => {
    const barHeight = (number / maxValue) * SVG_HEIGHT;
    const barX = (SVG_WIDTH / totalBars) * index;
    const barY = SVG_HEIGHT - barHeight;
    
    let labelX = barX + BAR_WIDTH / 2;
    let labelY = direction === 'vertical' ? SVG_HEIGHT + 20 : barY + BAR_WIDTH / 2;

    if (direction === 'horizontal') {
      labelX = LABEL_PADDING;
      labelY = barY + BAR_WIDTH / 2; 
    }

    return (
      <g key={index}>
        {direction === 'vertical' && (
          <rect x={barX} y={barY} width={BAR_WIDTH} height={barHeight} fill={barColor} />
        )}
        {direction === 'horizontal' && (
          <rect x={0} y={barY} width={barHeight} height={BAR_WIDTH} fill={barColor} />
        )}
        <text x={labelX} y={labelY} textAnchor="end" alignmentBaseline="middle" fontSize="12">
          {labels[index]}
        </text>
      </g>
    );
  });

  return (
    <div className="card">
      <svg width={SVG_WIDTH} height={SVG_HEIGHT + 30}>
        {bars}
      </svg>
    </div>
  );
};

export default BarChart;
