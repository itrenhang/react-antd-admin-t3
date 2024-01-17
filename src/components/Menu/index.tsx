import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import { GlobalContext } from '@src/context/GlobalContext';
import './index.scss';

const SiderMenu = () => {
  const { state: { theme } } = useContext(GlobalContext);
  const [selectKey, setSelectKey] = useState('');
  const localtion = useLocation();
  const navigate = useNavigate();
  const list = [
    {
      key: '/Home',
      icon: <TeamOutlined />,
      label: '首页',
    }
  ]
  const selectHandle = ({ key }: any) => {
    setSelectKey(key);
    navigate(key);
  }

  useEffect(() => {
    setSelectKey(localtion.pathname)
  },[])
  return (
    <Menu
      theme={theme}
      mode="inline"
      selectedKeys={[selectKey]}
      items={list}
      onSelect={selectHandle}
    />
  )
}

export default SiderMenu;