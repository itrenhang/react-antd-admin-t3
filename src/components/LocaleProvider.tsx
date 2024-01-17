import React, { useContext } from 'react';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import { GlobalContext } from '@src/context/GlobalContext';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import en from '@src/locale/en.json';
import zh from '@src/locale/zh.json';

const LocaleProvider = ({children}: any) => {
  const { state: { language, theme } } = useContext(GlobalContext);

  const getCurrentMessages = () => {
    switch(language) {
      case 'en':
        return en;
      default:
        return zh;
    }
  }
  
  return (
    <ConfigProvider locale={language === 'zh' ? zhCN : enUS} theme={{
      // token: {
      //   colorPrimary: theme === "concise" ? '#44C4B8' : "#0A43D1",
      // }
    }}>
      <IntlProvider locale={language} messages={getCurrentMessages()}>
        {children}
      </IntlProvider>
    </ConfigProvider>
  )
}

export default LocaleProvider;