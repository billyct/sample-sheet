import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import { Button } from 'antd';
import NP from 'number-precision';
import { rowsAddDefault } from '../utils/sheet';
import { updateGrid } from '../actions/grid';

class SampleSheet extends Component {

  onCellsChanged = changes => {
    const { updateGrid } = this.props;
    const grid = this.props.grid.map(row => [...row]);
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

      const lengthFormula = NP.strip(eval(formula));
      grid[row][5] = {
        ...grid[row][5],
        value: lengthFormula,
      };

      const lengthTotal = NP.strip(lengthFormula * count);
      grid[row][6] = {
        ...grid[row][6],
        value: lengthTotal,
      };

      const weight = this.getDiameterValue(diameter);
      grid[row][7] = {
        ...grid[row][7],
        value: weight,
      };

      const weightTotal = NP.strip(weight * lengthTotal);
      grid[row][8] = {
        ...grid[row][8],
        value: weightTotal,
      };
    });

    updateGrid(grid);
  };

  addRows = () => {
    const { grid, updateGrid } = this.props;
    updateGrid([
      ...grid,
      ...rowsAddDefault(),
    ]);
  };

  getDiameterValue(key) {
    const diameter = this.props.diameters
      .find(diameter => diameter.key === key);
    if (diameter) return diameter.value;
    return 0;
  }

  render() {
    const { grid } = this.props;

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
    grid: state.grid.data,
  }), {
    updateGrid,
  }
)(SampleSheet);
