import React from "react";
import { useState, useContext } from "react";
import AdListContent from "../AdListContent/AdListContent";
import { FindAllAds } from '../../../requesters/services/services'
import { useEffect } from "react";
import AdContext from '../../../contexts/advertisement/index'
import { adNormalizer } from '../../../normalizers/index'
export default function AdList() {
    const [isEmpty, setIsEmpty] = useState(true);
    const [isOnLoad, setIsOnLoad] = useState(true);
    const state = useContext(AdContext).state;
    const setState = useContext(AdContext).setState;

    const searchAllAds = async () => {
        let newAdList = [];
         await FindAllAds(localStorage.getItem('userId')).then(
            (response) => {
                console.log(response)
                response.data.forEach((item) => {
                    if (!state.AdList.includes(adNormalizer(item)))
                        newAdList.push(adNormalizer(item))
                })
            }).then(() => {
                if (newAdList.length > 0)
                    setIsEmpty(false)
                setState({
                    ...state,
                    AdList: newAdList
                })
            })
    }

    useEffect(() => {
        if (isOnLoad) {
            setIsOnLoad(false)
            searchAllAds()
        }
    })

    return (<div style={{
        background: 'white',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: '100px',
        borderRadius: '20px'
    }}>
        {isEmpty && <div
            style={{
                justifyContent: 'center',
                width: '70%',
                padding: '100px'
            }}>
            <h2 style={{ width: '100%', textAlign: 'center', color: 'gray', textDecoration: 'none' }}>Você não tem nenhuma propaganda Cadastrada</h2>
        </div>}
        {!isEmpty && <div
            style={{
                justifyContent: 'center',
                width: '80%',
                margin: '100px'
            }}>
            < div style={{
                width: '100%',
                textAlign: "right",
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '10px',
                borderRadius: '',
                boxShadow: '',
                padding: '',
                marginTop: '5px'
            }}
                id='title'
            >
                <h1>ID</h1>
                <h1>Titulo</h1>
                <h1>Valor</h1>
                <h1>Status</h1>
            </div >

            <AdListContent />

        </div>}
    </div>)
}