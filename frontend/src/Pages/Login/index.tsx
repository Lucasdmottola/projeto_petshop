import React, { useState } from "react";
import * as S from './style'
import { Box, Button, FormLabel, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ApiClient } from "../../request";
const LoginPage = () => {

    const [dataLogin, setDataLogin]=useState({
        email: '',
        password:''
    })


    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = ()=>{
        setShowPassword(true)
    }

    const handleMouseDownPassword = ()=>{
        setShowPassword(false)
    }

    const handleSetValues = (type: string, value:string)=>{
        setDataLogin((prevData) => ({
            ...prevData,
            [type]: value,
          }));

    }


    const sendDataLogin = async()=>{

        try{
            const api = ApiClient()
            const response = await api.post("/login/client", dataLogin)         

            if(response.data){
                const data = {
                    name:response.data.name,
                    id: response.data.id
                }
                localStorage.setItem("loja", JSON.stringify(data))
                window.location.href = '/home'
            }

        }catch(error){
            console.error(error)
        }

    }
    return (
        <S.Login>
            <Box className="loginBlock">
                <Typography className="titleLogin" variant="h5">Acesse sua conta</Typography>
                <Box className="blocoFormulario">
                    <FormLabel className="labelFormulario">Email:</FormLabel>
                    <TextField id="email" onChange={(e)=>handleSetValues('email', e.target.value)} />
                    <FormLabel className="labelFormulario">Senha:</FormLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e)=>handleSetValues('password', e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />

                    <Button className="loginBtn" onClick={sendDataLogin}>Entrar</Button>
                </Box>
            </Box>
            <Box className="loginBlock conta">
                <Typography className="titleLogin" variant="h5">Crie sua conta</Typography>
                <Typography className="textDesc">
                    Com a sua conta  você tem acesso
                    a Ofertas exclusivas, descontos, pode criar
                    e gerenciar a sua Assinatura, acompanhar
                    os seus pedidos e muito mais!
                </Typography>
                <Button href="/register" className="btnCriar">Criar conta</Button>
            </Box>
        </S.Login>
    )
}

export default LoginPage