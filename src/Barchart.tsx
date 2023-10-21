import React, { useState } from 'react';
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
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  
  const maxValue = Math.max(...numbers);
  const totalBars = numbers.length;

  const bars = numbers.map((number, index) => {
    const barHeight = (number / maxValue) * height * 0.9;
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
            return (
              <rect 
                className="bar"
                x={barX} 
                y={barY} 
                width={bar_width} 
                height={barHeight} 
                fill={barColor} 
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              />
            );
          } else if (direction === 'horizontal') {
            return (
              <rect 
                className="bar"
                x={0} 
                y={barY} 
                width={barHeight} 
                height={bar_width} 
                fill={barColor} 
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              />
            );
          }
        })()}
        <text x={labelX} y={labelY} textAnchor="end" alignmentBaseline="middle" fontSize="12">
          {labels[index]}
        </text>
        {hoveredBar === index && (
          <text 
            x={barX + bar_width / 2} 
            y={barY - 5} 
            textAnchor="middle"
            fontSize="12"
          >
            {number}
          </text>
        )}
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
