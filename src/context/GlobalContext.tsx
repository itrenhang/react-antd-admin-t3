import React, { useReducer } from 'react';
import { GLOBAL_REDUCER_TYPE } from '@src/context/enumerate';

const initGlobalData: STATE = {
  language: 'zh',  // 语言
  theme: "dark",
  userInfo: {}
}


type STATE = {
  language: string
  theme: string
  userInfo: Object
}

type ACTION = {
  type: string,
  payload: any
}

const reducer = (state: STATE, action: ACTION) => {
  switch (action.type) {
    case GLOBAL_REDUCER_TYPE.INITGLOBALDATA:
      // 初始化全局数据
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export const GlobalContext = React.createContext<any>({});

export const GlobalProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(reducer, initGlobalData)

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}