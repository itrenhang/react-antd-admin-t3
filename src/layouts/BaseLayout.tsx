import React, { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { GlobalContext } from '@src/context/GlobalContext';
import Menu from '@components/Menu';
import HeaderMenu from '@components/HeaderMenu';
import './baseLayout.scss';
const { Header, Footer, Sider, Content } = Layout;

const BaseLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { state: { theme } } = useContext(GlobalContext);
  return (
    <Layout className="layout-wrapper">
      <Sider theme={theme} trigger={null} collapsible collapsed={collapsed}>
        <div className={`logo-vertical ${collapsed ? "logo_img2" : "logo_img1"}`} />
        <Menu />
      </Sider>
      <Layout>
        <Header className="layout-header-wrapper">
          <Button
            type="text"
            className="menu-collapsed-button"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <HeaderMenu />
        </Header>
        <Content className="layout-content-wrapper">
          <Outlet />
        </Content>
        {/* <Footer className="layout-footer-wrapper">Footer</Footer> */}
      </Layout>
    </Layout>
  )
}

export default BaseLayout;