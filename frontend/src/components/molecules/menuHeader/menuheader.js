import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import MenuContext from "../../../contexts/menu";
import RegisterContent from "../RegisterContent/register";
import CredentialContent from "../CredentialContent/credential";
import FinancialContent from "../FinancialContent/financial";
import api from "../../../requesters/login/login";

function MenuHeader() {
    const [configs, setConfigs] = useState('Cadastro')
    const state = useContext(MenuContext).state;
    const setState = useContext(MenuContext).setState;

    const getUser = async () => {
        await api.post('api/v1/users/login', {
            "email": 'userName',
            "password": 'password'
        })
            .then(function (response) {
                localStorage.setItem('userName', response.data.userName)
                localStorage.setItem('userId', response.data._id)
                localStorage.setItem('token', response.data.token)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(() => {
        if (state.configs !== configs) {
            if (state.configs === 'Cadastro') {
                setConfigs('Cadastro')
                getUser()
            } else if (state.configs === 'Financeiro') {
                setConfigs('Financeiro')
                getUser()
            } else if (state.configs === 'Credenciais') {
                setConfigs('Credenciais')
                getUser()
            }
        }
    })
    return (<>
        <div
            style={{
                minHeight: '300px',
                backgroundColor: 'rgba(234, 234, 234, 0.7)',
                display: 'grid',
            }}>
            <div
                style={{
                    marginTop: '100px',
                    marginLeft: '30px'
                }}>
                <h1>Menu</h1>
            </div>
            <div
                className="bottom_buttons"
                style={{
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'space-around',
                    width: '100%'
                }}>
                <Button
                    style={{ width: '100%', borderRight: '1px solid black', borderRadius: '0' }}
                    variant="text"
                    children="Cadastro"
                    type='standard'
                    onClick={async () => { await setState({ ...state, configs: 'Cadastro' }) }}
                >
                </Button>
                <Button
                    style={{ width: '100%', borderRight: '1px solid black', borderRadius: '0' }}
                    variant="text"
                    children="Financeiro"
                    type='standard'
                    onClick={async () => { await setState({ ...state, configs: 'Financeiro' }) }}
                >
                </Button>
                <Button
                    style={{ width: '100%' }}
                    variant="text"
                    children="Credenciais"
                    type='standard'
                    onClick={async () => { await setState({ ...state, configs: 'Credenciais' }) }}
                >
                </Button>
            </div>


        </div>
        {configs === 'Cadastro' && <RegisterContent />
        }{configs === 'Financeiro' && <FinancialContent />
        }{configs === 'Credenciais' && <CredentialContent />}
    </>
    );
}

export default MenuHeader;
