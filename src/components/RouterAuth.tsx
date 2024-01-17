import React, { useContext, useEffect } from 'react';
import { LOCALSTORAGE_TYPE } from '@src/context/enumerate';
import { Navigate, useLocation } from "react-router-dom";
import { getUserInfo } from '@src/api/login';
import { GlobalContext } from '@src/context/GlobalContext';
import { GLOBAL_REDUCER_TYPE } from '@src/context/enumerate';

const RouterAuth = ({children}: any) => {
  const { dispatch } = useContext(GlobalContext);
  const location = useLocation();

  let access_token: any = localStorage.getItem(LOCALSTORAGE_TYPE.ACCESSTOKEN);
  
  const getUser = () => {
    if (!access_token) return;
    getUserInfo().then((res: any) => {
      dispatch({
        type: GLOBAL_REDUCER_TYPE.INITGLOBALDATA,
        payload: {userInfo: res}
      })
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  if (location.pathname != '/login' && !access_token) {
    return <Navigate to="/login" replace={true} />
  }
  return children;
}

export default RouterAuth;