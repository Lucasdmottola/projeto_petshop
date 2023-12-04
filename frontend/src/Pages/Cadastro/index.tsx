import { Alert, Box, Button, FormLabel, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { RegisterStyles } from "./styles"
import { ApiClient } from "../../request"
import { log } from "console"


const CadastroPage = () => {

    const [dataRegister, setDataRegister] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        celular: ''
    })
    const [sucessMessage, setSuccessMessage] = useState(false)

    const handleSetValues = (type: string, value: string) => {
        setDataRegister((prevData) => ({
            ...prevData,
            [type]: value,
        }));

    }


    const RegisterUser = async () => {
        const api = ApiClient()

        try {
            const response = await api.post("/add/client", dataRegister)
            if (response.status === 200) {
                setTimeout(() => {
                    setSuccessMessage(true);
                    setTimeout(() => {
                        setSuccessMessage(false);
                    }, 1000);
                }, 1000);

            }
            setDataRegister({
                name: '',
                email: '',
                password: '',
                address: '',
                celular: ''
              });

              window.location.href="/"

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <RegisterStyles>
            <Box className="formulario">
                <Typography className="title">Cadastro de usuário</Typography>
                <div className="areaInput">
                    <FormLabel>Nome</FormLabel>
                    <TextField id="name" onChange={(e) => handleSetValues('name', e.target.value)} />
                </div>
                <div className="areaInput">
                    <FormLabel>E-mail</FormLabel>
                    <TextField id="email" type="email" onChange={(e) => handleSetValues('email', e.target.value)} />
                </div>
                <div className="areaInput">
                    <FormLabel>Senha</FormLabel>
                    <TextField id="password" type="password" onChange={(e) => handleSetValues('password', e.target.value)} />
                </div>
                <div className="areaInput">
                    <FormLabel>Endereço</FormLabel>
                    <TextField id="address" placeholder="Ex:Rua-Estado-Cidade" onChange={(e) => handleSetValues('address', e.target.value)} />
                </div>
                <div className="areaInput">
                    <FormLabel>Celular</FormLabel>
                    <TextField id="celular" onChange={(e) => handleSetValues('celular', e.target.value)} />
                </div>

                <div className="areaInput buttonArea">
                    <Button onClick={RegisterUser}>Cadastrar</Button>
                    {sucessMessage && <Alert severity="success">Usuário adicionado com sucesso</Alert>}
                </div>
            </Box>
        </RegisterStyles>

    )
}

export default CadastroPage