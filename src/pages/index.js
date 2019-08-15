import React from 'react'
import { TabBar } from 'antd-mobile';

import Apply from './apply/Apply';
import Found from './found/Found';
import Exam from './exam/index'
import Mine from './mine/Mine';

import baoming from '../assets/images/baoming.png'
import baoming_1 from '../assets/images/baoming_1.png'
import jiakao from '../assets/images/jiakao.png'
import jiakao_1 from '../assets/images/jiakao_1.png'
import faxian from '../assets/images/faxian.png'
import faxian_1 from '../assets/images/faxian_1.png'
import wode from '../assets/images/wode.png'
import wode_1 from '../assets/images/wode_1.png'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Exam',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="#F7F7F7"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="报名"
            key="Apply"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${baoming}) center center /  22px 22px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${baoming_1}) center center /  22px 22px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'Apply'}
            onPress={() => {
              this.setState({
                selectedTab: 'Apply',
              });
            }}
            data-seed="logId"
          >
            <Apply></Apply>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${jiakao}) center center /  22px 22px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${jiakao_1}) center center /  22px 22px no-repeat` }}
              />
            }
            title="驾考"
            key="Exam"
            selected={this.state.selectedTab === 'Exam'}
            onPress={() => {
              this.setState({
                selectedTab: 'Exam',
              });
            }}
            data-seed="logId1"
          >
            <Exam></Exam>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${faxian}) center center /  22px 22px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${faxian_1}) center center /  22px 22px no-repeat` }}
              />
            }
            title="发现"
            key="Found"
            selected={this.state.selectedTab === 'Found'}
            onPress={() => {
              this.setState({
                selectedTab: 'Found',
              });
            }}
          >
            <Found></Found>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${wode}) center center /  22px 22px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${wode_1}) center center /  22px 22px no-repeat` }}
              />
            }
            title="我的"
            key="Mine"
            selected={this.state.selectedTab === 'Mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'Mine',
              });
            }}
          >
            <Mine></Mine>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Index
