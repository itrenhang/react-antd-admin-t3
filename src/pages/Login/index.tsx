import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from "react-router-dom";
import { login, getUserInfo } from '@src/api/login';
import { GlobalContext } from '@src/context/GlobalContext';
import { GLOBAL_REDUCER_TYPE } from '@src/context/enumerate';

import './index.scss';

const Login = () => {
  const { dispatch } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const intl = useIntl();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    setLoading(true)
    login({
      username: values.username,
      password: values.password
    }).then((res: any) => {
      if (res.code === 1) {
        return setLoading(false);
      }
      if (res.access_token) {
        localStorage.setItem("access_token", res.access_token);
        getUser();
        setLoading(false)
        navigate("/");
      }
    })
  };

  const getUser = () => {
    getUserInfo().then((res: any) => {
      dispatch({
        type: GLOBAL_REDUCER_TYPE.INITGLOBALDATA,
        payload: {userInfo: res}
      })
    })
  }

  return (
    <div className="login-wrapper">
      <div className="login-content">
        <h3 className="login-title"><FormattedMessage id="login" defaultMessage="登陆" /></h3>
        <Form
          name="login_form"
          className="login-form"
          initialValues={{}}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder={intl.formatMessage({id: "email", defaultMessage: "邮箱"})} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              placeholder={intl.formatMessage({id: "password", defaultMessage: "密码"})}
            />
          </Form.Item>

          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
              <FormattedMessage id="login" defaultMessage="登陆" />
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login;