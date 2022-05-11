import React from "react";
import { Paper } from '@mui/material';
import LoginContent from "../../organisms/loginContent/login-content";
import HomeHeader from '../../molecules/homeHeader/home-header';
import { useContext } from "react";
import UserContext from "../../../contexts/user";
import SignUpContent from "../../organisms/signupContent/signup-content";

function LoginTemplate() {

    const state = useContext(UserContext).state

    return (
        <Paper
            elevation={0}
            style={{
                paddingLeft:'5%',
                paddingRight:'5%',
                paddingTop:'10px'
            }}
        >
            <HomeHeader></HomeHeader>
            {state.loginpage && <LoginContent></LoginContent>}
            {!state.loginpage && <SignUpContent></SignUpContent>}
        </Paper>
    );
}

export default LoginTemplate;
