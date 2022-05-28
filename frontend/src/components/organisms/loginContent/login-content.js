import { LoginUser } from '../../../requesters/services/services';
import React, { useState, useContext } from 'react';
import { Card, TextField, Button, Typography } from '@mui/material';
import UserContext from '../../../contexts/user';
import { useEffect } from 'react';


function LoginContent() {
    const [userEmail, setUserEmail] = useState('teste');
    const [password, setPassword] = useState('');
    const [loginErrorDisplay, setLoginErrorDisplay] = useState(false);
    const [errorLoginMessage, setErrorLoginMessage] = useState('Login Incorreto');
    const [logged, setLogged] = useState(false)
    const state = useContext(UserContext).state;
    const setState = useContext(UserContext).setState;

    useEffect(() => {
        if (logged) {
            setState({
                ...state,
                userLoggedOrNot: 'logout',
                name: localStorage.getItem('userName'),
                id: localStorage.getItem('userId'),
                token: localStorage.getItem('token'),
            })
            setLogged(false)
            if(!loginErrorDisplay)
                window.location.href = '/'
        }
    })

    function handleGoToSignUp() {
        setState({
            ...state,
            loginpage: false,
        })
    }

    async function AccessAttempt() {
        await AcessValidation(userEmail, password)
            .then(() => {
                setState({
                    ...state,
                    userLoggedOrNot: 'logout',
                    name: localStorage.getItem('userName'),
                    id: localStorage.getItem('userId'),
                    token: localStorage.getItem('token'),
                })
            })
    }
    async function AcessValidation(userName, password) {
        await LoginUser({
            "email": userName,
            "password": password
        })
            .then(function (response) {
                localStorage.setItem('userName', response.data.userName)
                localStorage.setItem('userId', response.data._id)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('type', response.data.type)
                setLogged(true)
                setLoginErrorDisplay(false)
            })
            .catch(function (error) {
                setErrorLoginMessage(error.response.data.message ? error.response.data.message : error.response.data)
                setLoginErrorDisplay(true)
                setLogged(false)
            })
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: "center",
                marginTop: '10%'
            }}>
            <Card style={{
                padding: '5%',
            }}>
                <TextField
                    style={{
                        width: '100%',
                        marginBottom: '30px'
                    }}
                    id="userEmailTextField" label="E-mail" variant="standard"

                    onChange={() => {
                        setUserEmail(document.getElementById('userEmailTextField').value)
                        setLoginErrorDisplay(false)
                    }}
                ></TextField>
                <TextField
                    type="password"
                    autoComplete="off"
                    style={{
                        width: '100%',
                        marginBottom: '30px',
                    }}
                    id="passwordTextField" label="Password" variant="standard"
                    onChange={() => {
                        setLoginErrorDisplay(false)
                        setPassword(document.getElementById('passwordTextField').value)
                    }}
                ></TextField>
                <div
                    style={
                        {
                            display: 'flex',
                            justifyContent: 'space-between'
                        }
                    }>
                    <Button
                        variant="outlined"
                        children='Acessar'
                        onClick={() => {
                            AccessAttempt();
                        }}
                    >
                    </Button>
                    <Button
                        variant="outlined"
                        children="Fazer meu cadastro"
                        onClick={handleGoToSignUp}

                    >
                    </Button>
                </div>
                {loginErrorDisplay &&
                    <Typography
                        style={
                            {
                                display: 'flex',
                                width: '100%',
                                height: '80%',
                                paddingTop: '40px',
                                justifyContent: 'center',
                                color: 'red',
                            }
                        }
                    >{errorLoginMessage}
                    </Typography>}
            </Card>
        </div>
    )
}
export default LoginContent;