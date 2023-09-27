import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import router from '@/routers';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={createBrowserRouter(router)} />
      </ConfigProvider>
    </React.StrictMode>
  );
};

export default App;
