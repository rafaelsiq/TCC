import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import MenuContext from "../../../contexts/menu";
import RegisterContent from "../RegisterContent/register";
import { LoginUser } from "../../../requesters/services/services";
import TitleDisplay from "../../atoms/titleDisplay/titleDisplay";

function MenuHeader() {
    const [configs, setConfigs] = useState('Cadastro')
    const state = useContext(MenuContext).state;
    // const setState = useContext(MenuContext).setState;

    const getUser = async () => {
        await LoginUser({
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
                minHeight: '100px',
                backgroundColor: 'rgba(234, 234, 234, 0.7)',
                display: 'grid',
            }}>
            <TitleDisplay title="Menu" background={false} />

            {/* <div
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
            </div> */}


        </div>
        {configs === 'Cadastro' && <RegisterContent />
     }
     {/* {configs === 'Financeiro' && <FinancialContent />
         }{configs === 'Credenciais' && <CredentialContent />} */}
    </>
    );
}

export default MenuHeader;
