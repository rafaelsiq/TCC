import { Button, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import MenuContext from "../../../contexts/menu";
import api from "../../../requesters/login/login";
import { InputStyle } from "../../atoms/input/input";
import HelperContent from "../HelperMenuContent/helperContent";


function RegisterContent() {
    const state = useContext(MenuContext).state
    const setState = useContext(MenuContext).setState
    const [updateMessage, setUpdateMessage] = useState('')
    const [displayMessage, setDisplayMessage] = useState(false)

    const updateDatas = () => {
        let user = null;
        const userName = document.getElementById('userName').value;
        const lastName = document.getElementById('lastName').value;
        const firstName = document.getElementById('firstName').value;
        const link = document.getElementById('link').value;
        const cpf = document.getElementById('cpf').value;
        if (userName)
            user = { ...user, userName }
        if (lastName)
            user = { ...user, lastName }
        if (firstName)
            user = { ...user, firstName }
        if (link)
            user = { ...user, link }
        if (cpf)
            user = { ...user, cpf }


        if (user) {
            console.log({ body: { ...user } })
            api.patch('/api/v1/users/update?userId=' + localStorage.getItem('userId'), user)
                .then((response) => {
                    console.log(response)
                    setDisplayMessage(true)
                    setUpdateMessage('Cadastro Atualizado')
                }).catch((err) => {
                    setDisplayMessage(false)
                    console.log(err)
                })
        }


    }

    return (<>

        <div style={{
            display: 'flex',
            width: '100%'
        }}>

            <div style={{
                display: 'grid',
                marginTop: '50px',
                width: '80%'
            }}>
                <div style={{
                    display: 'flex',
                    width: '100%'
                }} >
                    <InputStyle
                        id='userName'
                        value={state.userName}
                        style={{ width: '80%' }}
                        title={"Usuario"}
                    ></InputStyle>
                    <InputStyle
                        id='firstName'
                        value={state.name}
                        style={{ width: '80%' }}
                        title={"Nome"}
                    ></InputStyle>
                </div>
                <div style={{
                    display: 'flex'
                }}>
                    <InputStyle
                        id='lastName'
                        value={state.lastName}
                        style={{ width: '80%' }}
                        title={"Sobrenome"}
                    ></InputStyle>
                    <InputStyle
                        id='cpf'
                        value={state.cpf}
                        style={{ width: '80%' }}
                        title={"CPF"}
                    ></InputStyle>
                </div>
                <div style={{
                    display: 'flex'
                }}>
                    <InputStyle
                        id='link'
                        value={state.link}
                        style={{ width: '70%' }}
                        title={"Link"}
                    ></InputStyle>
                </div>
                <div style={{
                    marginTop: '30px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <Button style={{
                        'background': 'linear-gradient(180deg, rgba(28, 106, 224, 0.539) 21.92%, rgba(162, 33, 223, 0.483) 129.03%), linear-gradient(0deg, rgba(62, 67, 205, 0.7), rgba(62, 67, 205, 0.7)), #FFFFFF',
                        'borderRadius': '6px',
                        'color': 'white',
                        'minWidth': '100px'
                    }}
                    onClick={()=>{
                        setDisplayMessage(false)
                    }}
                        href='/'
                    >VOLTAR</Button>
                    <Button
                        style={{
                            'background': 'linear-gradient(180deg, rgba(28, 106, 224, 0.539) 21.92%, rgba(162, 33, 223, 0.483) 129.03%), linear-gradient(0deg, rgba(62, 67, 205, 0.7), rgba(62, 67, 205, 0.7)), #FFFFFF',
                            'borderRadius': '6px',
                            'color': 'white',
                            'minWidth': '100px',
                            'marginLeft':'10px'
                        }}
                        onClick={updateDatas}
                    >SALVAR</Button>
                    <Typography
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            display: 'flex',
                            color: '#f00'
                        }} >{updateMessage}</Typography>
                </div>
            </div>
            <div style={{
                display: 'grid',
                width: '20%',
                marginTop: '20px'
            }}>
                <HelperContent />
            </div>

        </div>

    </>
    );
}

export default RegisterContent;
