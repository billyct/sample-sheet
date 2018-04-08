import React, { Component } from 'react';
import { Tabs } from 'antd';
import './index.css';
import SampleSheet from './components/SampleSheet';
import SheetButtons from './components/SheetToolbar';
import DiametersSheet from './components/DiametersSheet';

const { TabPane } = Tabs;

class App extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" tabBarExtraContent={<SheetButtons/>}>
          <TabPane tab="钢筋翻译表" key="1">
            <SampleSheet/>
          </TabPane>
          <TabPane tab="设置" key="2">
            <DiametersSheet/>
          </TabPane>
        </Tabs>


        { /*language=CSS*/ }
          <style jsx>{`
            div {
              max-width: 1140px;
              margin: 1rem auto;
            }
         `}</style>
      </div>
    );
  }
}

export default App;
