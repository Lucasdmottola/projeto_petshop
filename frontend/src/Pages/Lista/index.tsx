import React, { useEffect, useState } from "react";
import { ApiClient } from "../../request";
import { ListStyles } from "./styles";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";


const ListPage = () => {
    const [listProds, setListProds] = useState([])

    var idCategory: any = localStorage.getItem("loja_category");
    var nameCategory: any = localStorage.getItem("loja_category_name");


    useEffect(() => {
        const loadProds = async () => {
            try {
                const api = ApiClient()
                const response = await api.get(`/list/prod?category_id=${idCategory}`)
                setListProds(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        loadProds()
    }, [idCategory])


    var rotaAnterior = obterIdDaRota();

    function obterIdDaRota() {
        var url = window.location.href;
        var partesDaURL = url.split('/');
        return partesDaURL[partesDaURL?.length - 1];
    }

    function verificarMudancaNaRota() {
        var url = window.location.href;

        if (url.startsWith('http://localhost:3000/products/')) {
            var idAtual = obterIdDaRota();

            if (idAtual !== rotaAnterior) {
                window.location.reload();
            }

            rotaAnterior = idAtual;
        }
    }

    setInterval(verificarMudancaNaRota, 100);

    const openDetailItem = (item: any) => {
        localStorage.setItem("loja_item", JSON.stringify(item))
        window.location.href = `/detail/${item.id}`
    }

    return (
        <ListStyles>
            <Box>
                <Typography variant="h5">
                    Tudo para {nameCategory}
                </Typography>

                <Box className="listItems">
                    {listProds.map((item: any) => (
                        <Card>
                            <CardMedia
                                image={`http://localhost:3333/files/${item.banner}`}
                            />
                            <CardContent>
                                <Typography className="titleProd" gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography className="price" variant="body2" color="text.secondary">
                                    R${item.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Button onClick={() => openDetailItem(item)} className="btnCompra">Comprar</Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </ListStyles>
    )
}


export default ListPage