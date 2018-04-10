import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Input, Row, Col, Divider } from 'antd';
import { updateDiameters } from '../actions/diameters';

const { Group } = Input;
const { Item } = Form;

class DiametersSheet extends Component {

  handleChangeKey(key, index) {
    const { updateDiameters } = this.props;
    updateDiameters(this.getDiameters({ key }, index));
  }

  handleChangeValue(value, index) {
    const { updateDiameters } = this.props;
    updateDiameters(this.getDiameters({ value }, index));
  }

  getDiameters(updates, index) {
    const { diameters } = this.props;
    return diameters.map((diameter, i) => {
      if (i === index) {
        return {
          ...diameter,
          ...updates,
        };
      }

      return diameter;
    });
  }

  addDiameter = () => {
    const { diameters, updateDiameters } = this.props;
    updateDiameters([
      ...diameters,
      { key: '', value: '' },
    ]);
  };

  render() {
    const { diameters } = this.props;
    return (
      <Form>
        <Divider>直径配置</Divider>
        <Row gutter={10}>
          {diameters.map((diameter, index) => (
            <Col span={4} key={`diameters_${index}`}>
              <Item>
                <Group compact>
                  <Input style={{ width: '30%' }}
                         value={diameter.key}
                         onChange={e => this.handleChangeKey(e.target.value, index)}/>
                  <Input style={{ width: '70%' }}
                         value={diameter.value}
                         onChange={e => this.handleChangeValue(e.target.value, index)}/>
                </Group>
              </Item>
            </Col>
          ))}
        </Row>

        <Item>
          <Button icon="plus" type="dashed" onClick={this.addDiameter}>增加直径配置</Button>
        </Item>
      </Form>
    );
  }
}

export default connect(
  state => ({
    diameters: state.diameters.data,
  }),
  {
    updateDiameters,
  }
)(DiametersSheet);
