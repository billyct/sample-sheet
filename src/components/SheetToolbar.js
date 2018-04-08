import React from 'react';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

const SheetToolbar = () => (
  <ButtonGroup type="primary">
    <Button icon="file">新建翻样表</Button>
    <Button icon="export">导出</Button>
  </ButtonGroup>
);

export default SheetToolbar;
