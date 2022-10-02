
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

export default function Cadastro() {
    let navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    function cadastrar() {
        axios.post('http://localhost:5000/cadastro', {
            email: email,
            senha: senha,
            confirmarSenha: confirmarSenha
        }).then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/login")
        }).catch(() => {
            alert("Preencha os campos corretamente")
            setEmail('')
            setSenha('')
            setConfirmarSenha('')
        })
    }

    return (
        <Pagina>
            <Logo>
                <h1>Clima agora</h1>
                <ion-icon className='iconeLogo' name="partly-sunny"></ion-icon>
            </Logo>
            <Formulario>

                <input
                    type='email' placeholder="E-mail"
                    value={email} onChange={item => setEmail(item.target.value)}
                />
                <input
                    type='password' placeholder="Senha"
                    value={senha} onChange={item => setSenha(item.target.value)}
                />
                <input
                    type='password' placeholder="Confirme a senha"
                    value={confirmarSenha} onChange={item => setConfirmarSenha(item.target.value)}
                />
                <Botao onClick={cadastrar}>
                    <h2>Cadastrar</h2>
                </Botao>
                <h3>Possui uma conta? Entre agora!</h3>
            </Formulario>

        </Pagina>
    )
}

const Pagina = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Logo = styled.div`
display: flex;
justify-content: center;
width: 30%;
height: 60px;
margin-top: 120px;

h1{
font-family: 'Quintessential';
font-size: 50px;
margin-top: 30px;
color: white;
margin-bottom: 350px;
}
ion-icon{
color: white;
width: 15%;
height: 35px;
margin-top: 40px;
}
`
const Formulario = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 60px;
width: 30%;
height: 400px;


input{
width: 60%;
height: 40px;
align-self:center;
border-radius: 5px;
background: #1E90FF ;
border: solid #FFFFFF;
font-family: 'Quintessential';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
margin-top: 15px;
}
input::placeholder {
  color: white;
}
h3{
    text-align: center;
    font-family: 'Quintessential';
    font-size: 20px;
    margin-top: 30px;
    color: white;
    font-weight: 400;
}
`
const Botao = styled.div`
background-color:white;
margin-top: 40px;
width: 20%;
height: 30px;
border-radius: 5px;

h2{
    text-align: center;
    font-family: 'Quintessential';
    font-size: 20px;
    margin-top: 5px;
    
}

`