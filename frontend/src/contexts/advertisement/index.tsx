import React, { useState, Dispatch, SetStateAction, createContext } from 'react'
interface Ad {
    id:string,
    title:string,
    status:string,
    value:string,
    url:string,
    name:string,
} 

type AdType = {
    displayPreview: string,
    inEdition: boolean,
    inPreview:boolean,
    currentAd: Ad,
    AdList: Ad[]
}

type PropsAdContext = {
    state: AdType,
    setState: Dispatch<SetStateAction<AdType>>
}

const DEFAULT_VALUE = {
    state: {
        displayPreview: 'initial',
        inEdition:false,
        inPreview:false,
        currentAd: {
            id:"",
            title:"",
            status:"",
            value:"",
            url:"",
            name:""
        },
        AdList: [{
            id:"",
            title:"",
            status:"",
            value:"",  
            url:"",
            name:""

        }]
    },
    setState: () => { },
};

const AdContext = createContext<PropsAdContext>(DEFAULT_VALUE);

const AdContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <AdContext.Provider
            value={{
                state,
                setState
            }}>
            {children}
        </AdContext.Provider>
    )
}

export {  AdContextProvider };
export default AdContext;