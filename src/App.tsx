import React, { useEffect, useContext } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { GlobalProvider, GlobalContext } from '@src/context/GlobalContext';
import LocaleProvider from '@src/components/LocaleProvider';
import RouterAuth from '@src/components/RouterAuth';
import routeList from './router';
import './styles/App.scss';

const Root = () => {
  const { state: { theme } } = useContext(GlobalContext);
  const routers = useRoutes(routeList);

  return (
    <div id="App" className={`App ${theme}`}>
      {routers}
    </div>
  )
}

function App() {
  return (
    <GlobalProvider>
      <LocaleProvider>
        <BrowserRouter>
          <RouterAuth>
            <Root />
          </RouterAuth>
        </BrowserRouter>
      </LocaleProvider>
    </GlobalProvider>
  );
}

export default App;
