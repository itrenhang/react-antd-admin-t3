import React from 'react';
import { Dropdown, Avatar } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from "react-router-dom";
import './index.scss';

const HeaderMenu = () => {
  const navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  }

  const items: any = [
    {
      key: 'logout',
      label: <div onClick={logoutHandle}><FormattedMessage id="logout" defaultMessage="退出登录" /></div>,
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }}>
        <Avatar className="avatar_img">U</Avatar>
      </Dropdown>
    </div>
  )
}

export default HeaderMenu;