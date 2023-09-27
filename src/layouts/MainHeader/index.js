import React from 'react';
import { Layout, Dropdown, Menu, Row, Col, Space } from 'antd';
import {
  SmileOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GlobalOutlined,
  DownOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';

import './index.less';

const { Header } = Layout;

const items = [
  {
    key: '1',
    label: (
      <>
        <SmileOutlined />
        &nbsp; 个人信息
      </>
    ),
    disabled: true,
  },
  {
    key: '2',
    label: (
      <Link to='/login'>
        <LogoutOutlined />
        &nbsp; 退出登录
      </Link>
    ),
  },
];

const MainHeader = () => {
  return (
    <Header style={{ padding: '0 24px', color: '#fff', display: 'grid', gridTemplateColumns: '176px auto' }}>
      <div style={{}}>
        <GlobalOutlined style={{ fontSize: 24, color: 'green' }} />
        <span style={{ marginLeft: 10, fontSize: 16 }}>综合地图服务平台</span>
      </div>
      <div>
        <div style={{ width: 160, float: 'right' }}>
          <span className='user-info'>
            <span className='user-img' />
          </span>
          <Dropdown arrow={{ pointAtCenter: true }} menu={{ items }} placement='bottom'>
            <a onClick={e => e.preventDefault()}>
              <Space>
                系统管理员
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default MainHeader;
