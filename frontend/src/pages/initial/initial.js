import React from "react";
import { useEffect } from "react";
import InitialTemplate from '../../components/templates/InitialTemplate/initial'

export default function Initial() {
    useEffect(()=>{
        if(window.location.href === 'http://localhost:3001/' && !!localStorage.getItem('token'))
        {
            window.location.href = '/home'
        }
    })
    return (
        <>
        <InitialTemplate />
        </>
    )
}