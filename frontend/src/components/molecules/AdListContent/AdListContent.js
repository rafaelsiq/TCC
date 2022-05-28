import { Button } from "@mui/material";
import React, { useContext } from "react";
import AdContext from '../../../contexts/advertisement/index'
import { FindAllAds } from "../../../requesters/services/services";

export default function AdListContent() { 
    const state = useContext(AdContext).state;
    const setState = useContext(AdContext).setState;

    const setPreview = async (id) => {
        await state.AdList.forEach((element) => {
            if (element.id === id) {
                setState({
                    ...state,
                    currentAd: element,
                    inPreview: true
                })
            }
        })
    }
    const allAds = (adId) =>{
        let ad = ''
        FindAllAds(localStorage.getItem('userId')).
        then((response)=>{
            response.data.forEach(item =>{
                if(item._id === adId)
                    ad = item
            })
            return ad
        })
        
    }
    return (
        <>
            {
                state.AdList.map((item) => {
                    return (
                        <Button
                            style={{ width: '100%', fontSize: '5px', }}
                            onClick={e => setPreview(e.target.id)}
                        >
                            < li
                                id={item.id}
                                style={{
                                    width: '100%',
                                    textAlign: "right",
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '6px',
                                    borderRadius: '10px',
                                    boxShadow: '1px 1px 1px rgba(234, 234, 234, 0.7)',
                                    padding: '5px',
                                    marginTop: '5px'
                                }}
                            >
                                <h1>{item.id}</h1>
                                <h1>{item.title}</h1>
                                <h1>{item.value}</h1>
                                <h1>{item.status}</h1>
                            </li >
                        </Button>)
                })
            }

        </>
    )
}