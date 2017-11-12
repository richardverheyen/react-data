import React, { Component } from 'react';

class PieChart extends Component {
  render() {
    return (
      <div id="landing">
        <svg width="200" height="200">
          <title>Pie Chart</title>
         <g>
            <path d="
            M 100 100
            L 100 0
            A 100 100, 0, 0, 1, 170.7 29.3
            Z"
            fill="red" />
            <path d="
            M 100 100
            L 170.7 29.3
            A 100 100, 0, 0, 1, 100 200
            Z"
            fill="green" />
            <path d="
            M 100 100
            L 100 200
            A 100 100, 0, 0, 1, 0 100
            Z"
            fill="blue" />
            <path d="
            M 100 100
            L 0 100
            A 100 100, 0, 0, 1, 100 0
            Z"
            fill="yellow" />
         </g>
        </svg>
      </div>
    );
  }
}

export default PieChart;
