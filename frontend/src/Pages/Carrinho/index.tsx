import React from "react";
import { CartStyles } from "./styles";
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { ApiClient } from "../../request";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const CartPage = () => {
    var itemCart: any = localStorage.getItem("loja_cart")
    var cart = JSON.parse(itemCart)

    var arrayLocal: any = localStorage.getItem("loja");
    var arr = JSON.parse(arrayLocal)

    var itemCartNames: any = localStorage.getItem("loja_cart_name")
    var cartNames = JSON.parse(itemCartNames)

    const sendData = async (item: string) => {
        const api = ApiClient()

        try {
            const itemSend: any = {
                names: item,
                clientId: arr.id
            }
            const response = await api.post('/add/req/', itemSend)
            if (response.status === 200) {
                localStorage.removeItem("loja_cart_name");
                localStorage.removeItem('loja_cart')
                window.location.reload()

            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <CartStyles>
            {cart?.length > 0 ? (<List>
                {cart?.map((item: any) => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <img src={`http://localhost:3333/files/${item.banner}`} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>{item.name}</ListItemText>
                        <ListItemButton><span className="btnRemove">remover</span></ListItemButton>
                    </ListItem>
                ))}
                <Button onClick={() => sendData(cartNames)}>Finalizar compra</Button>
            </List>) : (
                <Box className="noData">
                    <span><SentimentVeryDissatisfiedIcon/></span>
                    <p>Nenhum item no carrinho</p>
                </Box>
            )}

        </CartStyles>
    )
}

export default CartPage