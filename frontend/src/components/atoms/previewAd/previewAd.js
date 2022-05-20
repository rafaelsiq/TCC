import React from "react";
import Button from "@mui/material/Button";
import { SwitchAdStatus } from "../../../requesters/services/services";
import { useContext } from "react";
import AdContext from "../../../contexts/advertisement/index";


export default function PreviewAd() {
    const state = useContext(AdContext).state
    const setState = useContext(AdContext).setState

    const handleSwitchAdStatus = async () => { 
        await SwitchAdStatus(state.currentAd.id, state.currentAd.status === 'Parado' ? 'Online' : 'Parado')    
        .then((response) => {
                if(response.status === 200){
                    let newAdList=[]
                    state.AdList.forEach(element => {
                        if(element.id !== state.currentAd.id)
                            newAdList.push(element)
                        else
                            newAdList.push(state.currentAd)
                    });
                    setState({
                        ...state,
                        AdList: newAdList,
                        currentAd: {
                            ...state.currentAd,
                            status: state.currentAd.status === 'Parado' ? 'Online':'Parado'
                        }
                    })   
                }
                
            })
        localStorage.setItem('pageReload', state.currentAd.id)
        await window.location.reload()

    }

    return (<>
    <div style={{
        background: 'rgba(234, 234, 234, 0.7)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        justifyContent: 'center',
        display: 'grid'
    }}>
        <h2 style={{
            width: '100%',
            textAlign: 'center',

        }}>Preview</h2>
        <img
            src={state.currentAd.url}
            alt={state.currentAd.name}
            style={{ maxHeight: '200px', margin: '0px 20px', marginBottom: '20px', borderRadius: '20px' }}
        ></img>
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
            <Button
                children={"Deixar   "+(state.currentAd.status === 'Parado' ? 'Online': 'Parado')}
                onClick={handleSwitchAdStatus}
            ></Button>

        </div>
    </div></>)
}