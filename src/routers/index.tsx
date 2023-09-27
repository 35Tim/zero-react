import React from 'react';
import BasicLayout from '@/layouts/BasicLayout';

import Overview from '@/pages/Overview';
import ServiceMap from '@/pages/ServiceManage/ServiceMap';
import Home from '@/pages/Home';
import Welcome from '@/pages/Welcome';
import Page403 from '@/pages/exception/403';
import Page404 from '@/pages/exception/404';
import Page500 from '@/pages/exception/500';

const routers = [
  {
    path: '/',
    element: <BasicLayout />, // 基本布局
    children: [
      {
        path: '/overview',
        name: '概览',
        element: <Overview />,
      },
      {
        path: '/serviceManage',
        name: '服务管理',
        children: [
          {
            path: '/serviceManage/serviceMap',
            name: '服务映射',
            element: <ServiceMap />,
          },
        ],
      },
      { index: true, name: '首页', element: <Home /> },
      { path: '/home', name: '首页', element: <Home /> },
      {
        path: '/welcome',
        name: '欢迎页',
        element: <Welcome />,
      },
      {
        path: '/exception',
        name: '异常',
        children: [
          {
            path: '/exception/403',
            name: '异常403页',
            element: <Page403 />,
          },
          {
            path: '/exception/404',
            name: '异常404页',
            element: <Page404 />,
          },
          {
            path: '/exception/500',
            name: '异常500页',
            element: <Page500 />,
          },
        ],
      },
    ],
  },
  { path: '*', element: <Page404 /> },
];

export default routers;
