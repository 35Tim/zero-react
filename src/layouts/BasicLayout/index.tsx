/*
 * @Author: qianshilei
 * @Date: 2021-09-17 17:49:19
 * @LastEditors: qianshilei
 * @LastEditTime: 2023-09-27 16:33:13
 * @Description: 基础布局
 * Copyright (c) 2023 , All Rights Reserved.
 */
import React from 'react';
import { Outlet, useLocation, matchRoutes } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';

import SiderMenu from '../SiderMenu';
import MainHeader from '../MainHeader';
import routers from '@/routers';

import './index.less';

const { Content } = Layout;

const BasicLayout = () => {
  const { pathname } = useLocation();
  const matches = matchRoutes(routers, { pathname }) || [];

  const breadcrumbItems = matches
    .filter(element => element.pathname !== '/')
    .map((element: any) => ({
      title: element.route?.name ?? '',
    }));

  return (
    <Layout>
      <MainHeader />
      <Layout>
        <SiderMenu />
        <Layout
          style={{
            padding: '0 24px 24px',
          }}>
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
            items={breadcrumbItems}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: '#fff',
              height: 'calc(100vh - 64px - 54px - 24px)',
              overflow: 'scroll',
            }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
