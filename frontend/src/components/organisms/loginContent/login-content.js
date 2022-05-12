import api from '../../../requesters/login/login';
import React, { useState, useContext } from 'react';
import { Card, TextField, Button, Typography } from '@mui/material';
import UserContext from '../../../contexts/user';


function LoginContent() {
    const [userEmail, setUserEmail] = useState('teste');
    const [password, setPassword] = useState('');
    const [loginErrorDisplay, setLoginErrorDisplay] = useState(false);
    const [errorLoginMessage, setErrorLoginMessage] = useState('Login Incorreto');

    const state = useContext(UserContext).state
    const setState = useContext(UserContext).setState

    function handleLogin(name,id,token) {
        setState({
            ...state,
            name: name,
            id: id,
            token: token,
            userLoggedOrNot:'logout'
            })
        window.location.href = '/'
    }
    function handleGoToSignUp() {
        setState({
            ...state,
            loginpage: false,
        })
    }
    function handleGoToHomePage() {
        setState({
            ...state,
            redirect: true,
        })
    }
    function accessAttempt() {
        setState({
            ...state,
            userLoggedOrNot:'logout'
        })
        AcessValidation(userEmail, password)
    }

    async function AcessValidation(userName, password) {
        await api.post('api/v1/streamers/login', {
            "email": userName,
            "password": password
        })
            .then(function (response) {
                 handleLogin(response.data.userName, response.data._id, response.data.token)
                 console.log(localStorage.getItem('token'))
                 console.log(response.data)
                 localStorage.setItem('token',response.data.token)
                 setLoginErrorDisplay(false)
                 handleGoToHomePage()
            })
            .catch(function (error) {
                setErrorLoginMessage(error.response)
                setLoginErrorDisplay(true)
                console.log(error);
            })
    }

    return (
        <div
            style={{
                display: 'flex',
                grid: "inherit",
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
                        onClick={accessAttempt}
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