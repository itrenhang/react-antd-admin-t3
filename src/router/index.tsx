import React, { Suspense, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

import BaseLayout from '@src/layouts/BaseLayout';
const Home = lazy(() => import('@pages/Home'))
const Login = lazy(() => import('@pages/Login'))
const Error = lazy(() => import('@pages/404'))

const LazyComponent = (element: ReactNode): ReactNode => {
  return (
    <Suspense fallback={<div></div>}>
      { element }
    </Suspense>
  )
}

const routeList = [
  {
    path: '/',
    element: <Navigate to="/clientManagement" replace={true} />
  },
  {
    path: '/',
    meta: {
      auth: true
    },
    element: LazyComponent(<BaseLayout />),
    children: [
      {
        path: 'home',
        element: LazyComponent(<Home />)
      }
    ]
  },
  {
    path: '/login',
    element: LazyComponent(<Login />)
  },
  {
    path: '/*',
    element: LazyComponent(<Error />)
  }
]

export default routeList;