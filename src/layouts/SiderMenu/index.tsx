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
    setOpenKeys(routers.map((item: any) => item.path));
  }, []);

  const getSelectedKeys = useMemo(() => {
    return routers.map((item: any) => item.path);
  }, [pathname]);

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const renderMenuItem = (routers: any[] = []) => {
    return routers
      .filter(item => item.path)
      .map((menu: any) => {
        if (menu.children) {
          return (
            <SubMenu
              key={menu.path}
              title={
                <div>
                  {!!menu.icon && menu.icon}
                  <span>{menu.name}</span>
                </div>
              }>
              {renderMenuItem(menu.children)}
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={menu.path}>
            <Link to={menu.path}>
              <span>
                {!!menu.icon && menu.icon}
                <span>{menu.name}</span>
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
        {renderMenuItem(routers?.length > 0 ? routers[0].children : [])}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
