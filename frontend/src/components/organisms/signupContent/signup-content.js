import api from '../../../requesters/login/login';
import React, { useState, useContext } from 'react';
import { Card, TextField, Button, Typography, Switch, FormGroup, FormControlLabel } from '@mui/material'
import UserContext from '../../../contexts/user';


function SignUpContent() {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [switchText, setSwitchText] = useState('Streamers');
    const [streamer, setStreamer] = useState(true);
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('Login Incorreto');
    const [signUpErrorDisplay, setSignUpErrorDisplay] = useState(false);

    const state = useContext(UserContext).state;
    const setState = useContext(UserContext).setState;


    function handleGoToLogin() {
        setState({
            ...state,
            loginpage: true
        })
    }
    function handleSignUpButtonClick() {
        const fields = ['userName', 'firstName', 'lastName', 'userEmailTextField', 'passwordTwoTextField', 'passwordOneTextField']
        fields.forEach(items => {
            if (!document.getElementById(items).value) {
                setErrorMessage("Todos os campos devem estar preenchidos")
                setSignUpErrorDisplay(true)
            }
        })

        if (document.getElementById('passwordTwoTextField').value !== document.getElementById('passwordOneTextField').value) {
            setErrorMessage("Os valores nos campos de senha e confirmação de senham divergem")
            setSignUpErrorDisplay(true)
        }
        const user = {
            "type": switchText,
            "userName": userName,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "email": userEmail,
            "cpf": userEmail
            }
        if (!signUpErrorDisplay)
            handleAccessValidation(user)
    }
    function handleLogin(name, id, token) {
        setState({
            ...state,
            name: name,
            id: id,
            token: token
        })
    }
    async function handleAccessValidation(user) {
        if (user.type === 'Streamers')
            await api.post('api/v1/streamers/signup', user)
                .then(function (response) {
                    handleLogin(response.data.userName, response.data._id, response.data.token)
                    setSignUpErrorDisplay(false)
                })
                .catch(function (error) {
                    setErrorMessage(error)
                    setSignUpErrorDisplay(true)
                })
        else
            await api.post('api/v1/sponsors/signup', user)
                .then(function (response) {
                    handleLogin(response.data.userName, response.data._id, response.data.token)
                    setSignUpErrorDisplay(false)
                })
                .catch(function (error) {
                    setErrorMessage(error)
                    setSignUpErrorDisplay(true)
                })
    }
    return (
        <div
            style={{
                display: 'flex',
                grid: "inherit",
                justifyContent: "center",
                marginTop: '5%'
            }}>
            <Card style={{
                padding: '5%',
                maxWidth: '500px'
            }}>
                <FormGroup name='type'
                    style={{
                        width: '100%',
                        alignContent: 'end'
                    }}
                >
                    <FormControlLabel onChange={() => {
                        if (switchText === 'Streamers') {
                            setSwitchText('Sponsors')
                            setStreamer(false)
                        }
                        else {
                            setSwitchText('Streamers')
                            setStreamer(true)
                        }
                    }}
                        control={<Switch defaultChecked />} label={switchText} />
                </FormGroup>
                <TextField id="userName"
                    style={{
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginBottom: '30px'
                    }}
                    label={"Nome de Usuario"} variant="standard"

                    onChange={() => {
                        setUserName(document.getElementById('userName').value)
                        setSignUpErrorDisplay(false)
                    }}
                ></TextField>
                <TextField id="firstName"
                    style={{
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginBottom: '30px'
                    }}
                    label={streamer ? "Nome" : "Razão Social"} variant="standard"

                    onChange={() => {
                        setFirstName(document.getElementById('firstName').value)
                        setSignUpErrorDisplay(false)
                    }}
                ></TextField>
                <TextField id="lastName"
                    style={{
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginBottom: '30px'

                    }}
                    label={streamer ? "Sobrenome" : "Nome Fantasia"} variant="standard"

                    onChange={() => {
                        setLastName(document.getElementById('lastName').value)
                        setSignUpErrorDisplay(false)
                    }}
                ></TextField>
                <TextField id="userEmailTextField"
                    style={{
                        width: '100%',
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginBottom: '30px'
                    }}
                    label="E-mail" variant="standard"

                    onChange={() => {
                        setUserEmail(document.getElementById('userEmailTextField').value)
                        setSignUpErrorDisplay(false)
                    }}
                ></TextField>
                <TextField id="passwordOneTextField"
                    type="password"
                    autoComplete="off"
                    style={{
                        width: '100%',
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginBottom: '30px'
                    }}
                    label="Password" variant="standard"
                    onChange={() => {
                        setSignUpErrorDisplay(false)
                        setPassword(document.getElementById('passwordOneTextField').value)
                    }}
                ></TextField>
                <TextField id="passwordTwoTextField"
                    type="password"
                    autoComplete="off"
                    style={{
                        width: '100%',
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginBottom: '30px'
                    }}
                    label="Password" variant="standard"
                    onChange={() => {
                        setSignUpErrorDisplay(false)
                        setPassword(document.getElementById('passwordTwoTextField').value)
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
                        children='Criar Cadastro'
                        onClick={handleSignUpButtonClick}
                    >
                    </Button>
                    <Button
                        variant="outlined"
                        children="Já tenho cadastro"
                        onClick={handleGoToLogin}
                    >
                    </Button>
                </div>
                {signUpErrorDisplay &&
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
                    >
                        {errorMessage}
                    </Typography>}
            </Card>
        </div>
    )
}
export default SignUpContent;