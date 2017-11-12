import React, { Component } from 'react';

class PieChart extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: [
        {
          value: 15,
          isBig: false,
          name: 'tea',
          attributes: [[0, -100], [70.7, 29.3]]
        },
        {
          value: 85,
          isBig: true,
          name: 'coffee',
          attributes: [[70.7, -70.7], [-70.7, -29.3]]
        }
      ]
    };
  }

  generateSvgPoints(slice){
    let centre = 'M 100 100 ';
    let start = `l ${slice.attributes[0][0]} ${slice.attributes[0][1]} `;
    let curve = `a 100 100, 0, ${slice.isBig ? 1 : 0}, 1, ${slice.attributes[1][0]} ${slice.attributes[1][1]} `;
    let closure = 'Z';
    return centre + start + curve + closure;
  }

  render() {
    return (
      <div id="landing">
        <svg width="200" height="200">
          <path
            d={this.generateSvgPoints(this.state.data[0])} />
          <path
            d={this.generateSvgPoints(this.state.data[1])} />
        </svg>
      </div>
    );
  }
}

export default PieChart;
