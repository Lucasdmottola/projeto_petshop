import React from "react";
import { ItemStyles } from "./style";
import { Box, Button, Typography } from "@mui/material";



const DetailItem = () => {

    var itemArr: any = localStorage.getItem('loja_item');
    var item = JSON.parse(itemArr)



    const addItemCart = (item: any, names: any) => {
        const storedValue = localStorage.getItem('loja_cart');
        var items: any[] = storedValue ? JSON.parse(storedValue) : [];
        items.push(item)
        localStorage.setItem("loja_cart", JSON.stringify(items))

        const namesList = localStorage.getItem('loja_cart_name');
        var valuesListName: any[] = namesList ? JSON.parse(namesList) : [];
        valuesListName.push(names)

        
        localStorage.setItem("loja_cart_name", JSON.stringify(valuesListName))
        window.location.reload()
    }
    return (
        <ItemStyles>
            <Box className="areaImg">
                <img src={`http://localhost:3333/files/${item.banner}`} />
            </Box>
            <Box className="areaInfos">
                <Typography className="title">Titulo:{item.name}</Typography>
                <Typography className="description">Descrição do produto: {item.description}</Typography>
                <Button onClick={() => addItemCart(item, item.name)}>Comprar</Button>
            </Box>
        </ItemStyles>
    )
}

export default DetailItem