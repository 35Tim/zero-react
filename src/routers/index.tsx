import React from 'react';
import BasicLayout from '@/layouts/BasicLayout';

import Home from '@/pages/Home';
import Welcome from '@/pages/Welcome';
import Page403 from '@/pages/Exception/403';
import Page404 from '@/pages/Exception/404';
import Page500 from '@/pages/Exception/500';

const routers = [
  {
    path: '/',
    name: '首页',
    element: <BasicLayout />, // 基本布局
    children: [
      { index: true, name: '首页', element: <Home /> },
      { path: 'home', name: '首页', element: <Home /> },
      {
        path: 'welcome',
        name: '欢迎页',
        element: <Welcome />,
      },
      {
        path: 'exception',
        name: '异常',
        children: [
          {
            path: '403',
            name: '异常403页',
            element: <Page403 />,
          },
          {
            path: '404',
            name: '异常404页',
            element: <Page404 />,
          },
          {
            path: '500',
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
