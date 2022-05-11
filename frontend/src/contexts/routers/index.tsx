import React, { useState, Dispatch, SetStateAction, createContext } from 'react'
type RouterType = {
 page: string
}

type PropsRouterContext = {
    state: RouterType,
    setState: Dispatch<SetStateAction<RouterType>>
}

const DEFAULT_VALUE = {
    state:{
        page:'/'
    },
    setState: () => {},
};

const RouterContext = createContext<PropsRouterContext>(DEFAULT_VALUE); 

const RouterContextProvider: React.FC = ({children})=> {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <RouterContext.Provider
        value={{
            state,
            setState
        }}>
        {children}
        </RouterContext.Provider>
    )
}

export {RouterContextProvider};
export default RouterContext;