/*
 * @Author: qianshilei
 * @Date: 2021-09-17 17:49:19
 * @LastEditors: qianshilei
 * @LastEditTime: 2023-09-27 11:22:49
 * @Description: 基础布局
 * Copyright (c) 2023 , All Rights Reserved.
 */
import React from 'react';
import { Outlet, useLocation, matchRoutes } from 'react-router-dom';
import { LaptopOutlined, NotificationOutlined, UserOutlined, GlobalOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import SiderMenu from '../SiderMenu';
import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';
import routers from '@/routers';

import './index.less';

const { Content } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const BasicLayout = () => {
  const { pathname } = useLocation();
  const matches = matchRoutes(routers, { pathname });

  return (
    <Layout>
      <MainHeader />
      <Layout>
        <SiderMenu />
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: '#fff',
              height: 'calc(100vh - 64px - 54px - 24px)',
              overflow: 'scroll',
            }}
          >
            <p>Content</p>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
