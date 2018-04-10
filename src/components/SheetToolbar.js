import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'antd';
import { resetGrid } from '../actions/grid';
import { exportFile, rowDefault } from '../utils/sheet';

const ButtonGroup = Button.Group;
const confirm = Modal.confirm;

const SheetToolbar = ({ grid, resetGrid }) => {
  const createGrid = () => {
    confirm({
      title: '确定新建翻样表?',
      content: '请确定您未导出的翻样表已经导出！',
      onOk() {
        resetGrid();
      },
    });
  };

  const exportGrid = () => {
    const data = grid.filter(row => JSON.stringify(row) !== JSON.stringify(rowDefault))
      .map(row => row.map(item => item.value));

    const date = new Date();
    const dateString = [date.getFullYear(), date.getMonth(), date.getDate()].join('-');

    exportFile(data, { filename: `钢筋翻样表-${dateString}` });
  };

  return (
    <ButtonGroup type="primary">
      <Button icon="file" onClick={createGrid}>新建翻样表</Button>
      <Button icon="export" onClick={exportGrid}>导出</Button>
    </ButtonGroup>
  );
};

export default connect(
  state => ({
    grid: state.grid.data,
  }), {
    resetGrid,
  }
)(SheetToolbar);
