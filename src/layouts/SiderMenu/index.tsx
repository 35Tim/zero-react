import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import routers from '@/routers';

import './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderMenu = () => {
  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    setOpenKeys(routers.map((item: any) => item.pathname));
  }, []);

  const getSelectedKeys = useMemo(() => {
    return routers.map((item: any) => item.pathname);
  }, [pathname]);

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const renderMenuItem = (routers: any[]) => {
    console.log('routers', routers);

    return routers
      .filter(item => item.path && item.name)
      .map((subMenu: any) => {
        if (subMenu.children) {
          return (
            <SubMenu
              key={subMenu.path}
              title={
                <div>
                  {!!subMenu.icon && subMenu.icon}
                  <span>{subMenu.name}</span>
                </div>
              }>
              {renderMenuItem(subMenu.children)}
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={subMenu.path}>
            <Link to={subMenu.path}>
              <span>
                {!!subMenu.icon && subMenu.icon}
                <span>{subMenu.name}</span>
              </span>
            </Link>
          </Menu.Item>
        );
      });
  };

  return (
    <Sider trigger={null} width={200} collapsible>
      <Menu
        mode='inline'
        className='main-menu'
        defaultSelectedKeys={['/home']}
        defaultOpenKeys={['/home']}
        openKeys={openKeys}
        selectedKeys={getSelectedKeys}
        onOpenChange={onOpenChange}
        style={{
          height: '100%',
          borderRight: 0,
        }}>
        {renderMenuItem(routers)}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
