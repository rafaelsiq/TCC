import React, { useState, Dispatch, SetStateAction, createContext } from 'react'
type MenuType = {
    configs: string,
    cpf: string,
    link: string,
    name: string,
    userName: string,
    lastName: string
}

type PropsMenuContext = {
    state: MenuType,
    setState: Dispatch<SetStateAction<MenuType>>
}

const DEFAULT_VALUE = {
    state: {
        configs: ' ',
        cpf: ' ',
        link: ' ',
        name: ' ',
        userName: ' ',
        lastName: ' ',
    },
    setState: () => { },
};

const MenuContext = createContext<PropsMenuContext>(DEFAULT_VALUE);

const MenuContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <MenuContext.Provider
            value={{
                state,
                setState
            }}>
            {children}
        </MenuContext.Provider>
    )
}

export { MenuContextProvider };
export default MenuContext;