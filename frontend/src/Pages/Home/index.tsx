import React from 'react'
import { HomeStyles } from './style'

import BannerDog from '../../img/dogImg.jpg'
import { Box, Typography } from '@mui/material'
const HomePage = () => {
    return (
        <HomeStyles>
            <Box className="bannerHome"><img src={BannerDog} /></Box>
            <Box className="infosHome">
                <Typography variant='h5'>Sobre nós</Typography>
                <Typography>
                     Amamos os animais tanto quanto você. Nossa missão é tornar a vida dos seus companheiros de quatro patas mais feliz, saudável e cheia de amor. Somos apaixonados por animais e dedicados a fornecer a você, nosso cliente querido, os melhores produtos e serviços para atender às necessidades do seu pet.
                </Typography>
            </Box>
            <Box className="servicosHome">
                <Typography variant='h5'>Nossos serviços</Typography>
               <Box className="cardInfos">
                <Typography className='title'>Conveniência Online</Typography>
                <Typography>Com a nossa loja de petshop online, você pode fazer compras a qualquer momento, em qualquer lugar. Oferecemos um processo de compra simples e seguro para que você possa encontrar o que precisa com facilidade.</Typography>
               </Box>

               <Box className="cardInfos">
                <Typography  className='title'> Entrega Rápida e Segura</Typography>
                <Typography> Entendemos que o tempo é essencial quando se trata de cuidar do seu pet. Por isso, garantimos entregas rápidas e seguras para que você receba seus produtos no conforto da sua casa.</Typography>
               </Box>
            </Box>
        </HomeStyles>
    )
}

export default HomePage