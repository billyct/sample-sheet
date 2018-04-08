import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import { Button } from 'antd';
import { rowHeaderDefault, rowsAddDefault } from '../utils/sheet';

class SampleSheet extends Component {

  state = {
    grid: [
      rowHeaderDefault,
    ],
  };

  componentDidMount() {
    this.addRows();

  }

  onCellsChanged = changes => {
    const grid = this.state.grid.map(row => [...row]);
    changes.forEach(({ cell, row, col, value }) => {

      if (col === 3) {
        value = value.toUpperCase();
      }

      if (col === 1) {
        try {
          value = value.replace(/[^\d.+\-*/]/g, '');
          eval(value);
        } catch (err) {
          value = 0;
        }
      }

      grid[row][col] = {
        ...grid[row][col],
        value,
      };

      let formula = grid[row][1].value;
      let diameter = grid[row][3].value;
      let count = grid[row][4].value;

      const lengthFormula = eval(formula);
      grid[row][5] = {
        ...grid[row][5],
        value: lengthFormula,
      };

      const lengthTotal = lengthFormula * count;
      grid[row][6] = {
        ...grid[row][6],
        value: lengthTotal,
      };

      const weight = this.getDiameterValue(diameter);
      grid[row][7] = {
        ...grid[row][7],
        value: weight,
      };

      const weightTotal = weight * lengthTotal;
      grid[row][8] = {
        ...grid[row][8],
        value: weightTotal,
      };
    });

    this.setState({ grid });
  };

  addRows = () => {
    const { grid } = this.state;
    this.setState({
      grid: [
        ...grid,
        ...rowsAddDefault(),
      ],
    });
  };

  getDiameterValue(key) {
    const { diameters } = this.props;
    return diameters
      .find(diameter => diameter.key === key)
      .value;
  }

  render() {
    const { grid } = this.state;
    return (
      <div>
        <ReactDataSheet
          data={grid}
          valueRenderer={cell => cell.value}
          onCellsChanged={this.onCellsChanged}
        />
        <div>
          <Button onClick={this.addRows}>增加 50 行</Button>

          { /*language=CSS*/ }
          <style jsx>{`
            div {
              text-align: center;
              margin: 1.5rem 0;
            }
         `}</style>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    diameters: state.diameters.data,
  })
)(SampleSheet);
