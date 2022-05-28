import React from 'react';
import HomeHeader from '../../molecules/homeHeader/home-header';
import Title from '../../atoms/titleDisplay/titleDisplay'
import { useState } from "react";
import { useEffect } from "react";
import { SponsorRequestReport } from "../../../requesters/services/services";
import { Button } from '@mui/material';

function SponsorsReportTemplate() {
    const [listLives, setListLives] = useState([])
    useEffect(() => { 
        
        if (listLives.length === 0) {
            SponsorRequestReport().then((response) => {
                setListLives(response.data)
            })
        }
    })
    return (
        <>
            {localStorage.getItem('userId') &&
                <div
                    variant="outlined"
                    style={{
                        paddingLeft: '5%',
                        paddingRight: '5%',
                        paddingTop: '10px'
                    }}>
                    <HomeHeader />
                    <Title title='Reports' background={true}></Title>
                    {listLives.length === 0 && <>
                        <div style={{
                            width: '100%',
                            fontSize: '10px',
                            justifyContent: 'center',
                            paddingTop: '50px'
                        }}>

                            <h1 style={{ width: '100%', textAlign: 'center' }}>Suas propagandas ainda não foram exibidas por nenhum streamer</h1>
                        </div>
                    </>}

                    {listLives.length !== 0 &&
                        <>
                            <div style={{
                                width: '100%',
                                fontSize: '7px',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <h1 style={{
                                    marginRight: '50px'
                                }}>Data de Exibição</h1>
                                <h1 style={{
                                    marginLeft: '50px'
                                }}>ID da propaganda Exibida</h1></div>
                            {
                                listLives.map((item) => {
                                    return (
                                        <Button
                                            style={{ width: '100%', fontSize: '5px', }}
                                            onClick={() => { window.location.href = '/ads' }}
                                        >
                                            < li
                                                id={item.live.adId}
                                                style={{
                                                    width: '30%',
                                                    textAlign: "right",
                                                    display: 'flex',
                                                    justifyContent: 'space-around',
                                                    fontSize: '6px',
                                                    borderRadius: '10px',
                                                    boxShadow: '1px 1px 1px rgba(234, 234, 234, 0.7)',
                                                    padding: '5px',
                                                    marginTop: '5px'
                                                }}
                                            >
                                                <h1>{`${item.live.createdAt ? new Date(item.live.createdAt).toLocaleString() : ""}`}</h1>
                                                <h1>{`${item.live.adId ? item.live.adId : item.live.adId}`}</h1>
                                            </li >
                                        </Button>)
                                })
                            }

                        </>
                    }


                </div>
            }</>
    );
}

export default SponsorsReportTemplate;
