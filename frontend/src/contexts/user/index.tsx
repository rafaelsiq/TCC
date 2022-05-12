import React, { useState, Dispatch, SetStateAction, createContext } from 'react'
type UserType = {
    id: string,
    token: string,
    name: string,
    loginpage:boolean,
    userLoggedOrNot:string
}

type PropsUserContext = {
    state: UserType,
    setState: Dispatch<SetStateAction<UserType>>
}

const DEFAULT_VALUE = {
    state:{
        id: '',
        token: '',
        name: '',
        loginpage:true,
        userLoggedOrNot:'login'
    },
    setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE); 

const UserContextProvider: React.FC = ({children})=> {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <UserContext.Provider
        value={{
            state,
            setState
        }}>
        {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider};
export default UserContext;