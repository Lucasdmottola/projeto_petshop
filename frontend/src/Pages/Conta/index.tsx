import { Box, Button, ListItem, ListItemText, Typography } from "@mui/material"
import { AccountStyles } from "./styles"
import { ApiClient } from "../../request";
import { useEffect, useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import moment from "moment";



const UserAccountPage = () => {
    var infosLogin: any = localStorage.getItem("loja");
    var user = JSON.parse(infosLogin)
    const [listRequests, setListRequests] = useState([])

    const handleReq = async () => {
        const api = ApiClient()

        try {
            const response = await api.get(`/list/req?clientId=${user.id}`)
            setListRequests(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleReq()
    }, [])

    const loggoutAccount = ()=>{
        localStorage.removeItem("loja");
        window.location.href = '/'

    }
    return (
        <AccountStyles>
            <Box className="title">
                <Typography>Bem vindo(a) - {user?.name}</Typography>
                <span>Sair da conta</span>  <Button onClick={loggoutAccount}><LogoutIcon/></Button>
            </Box>
            <Box className="sub">
                <Typography>Histórico de compras - Pedidos</Typography>

                <Box className="listProd">
                    {listRequests.map((item: any) => (
                        <ListItem key={item.id}>
                            <ListItemText>Data compra: {moment(item?.created_at).format('DD/MM/YYYY')}</ListItemText>
                            {item?.names.length > 0 ? (
                                <ListItemText>Produtos comprados: {item.names.join(', ')}</ListItemText>
                            ) : <ListItemText>Produto comprado: {item.names} </ListItemText>}
                        </ListItem>
                    ))}
                </Box>
            </Box>
        </AccountStyles>
    )
}


export default UserAccountPage 