import { Box } from '@mui/material';
import * as S from './style'
import { Link } from 'react-router-dom';
import { AccountCircleOutlined, Add, ShoppingBasket } from '@mui/icons-material';
import Logo from '../../img/petlogo.jpeg'
import { useEffect, useState } from 'react';
import { ApiClient } from '../../request';
const MenuComponent = () => {
    var arrayLocal: any = localStorage.getItem("loja");
    var arr = JSON.parse(arrayLocal)
    const [listCategory, setListCategory] = useState([])
    var nameCategory: any = localStorage.getItem("loja_category_name");

    var itemCart :any = localStorage.getItem("loja_cart")
    var cart = JSON.parse(itemCart)



    useEffect(() => {
        const loadCategory = async () => {
            try {
                const api = ApiClient()
                const response = await api.get("/list/category")
                setListCategory(response.data)

            } catch (error) {
                console.error(error)
            }
        }

        loadCategory()
    }, [])




    const setValueId = (id: string, name:string) => { 
        localStorage.setItem('loja_category', id)
        localStorage.setItem('loja_category_name', name)
    }

 


    return (
        <S.Menu>
            <Box className="menuLoja">
                <Box className="logoImg">
                    <img src={Logo} />
                </Box>
                <Box className="itemsMenu">
                    <Link to={`/home`}>Home</Link>
                    {listCategory?.map((item: any) => (
                        <Link to={`/products/${item.name}`} onClick={()=>setValueId(item.id, item.name)}>
                            {item.name}
                        </Link>
                    ))}


                </Box>


                <Box className="login">
                    {arr?.name ? (<Link to='/account'><AccountCircleOutlined />Minha conta <span>Bem vindo(a) {arr.name}</span></Link>
                    ) : (<Link to='/'><AccountCircleOutlined />Login</Link>
                    )}

                   <Link to='/cart'><ShoppingBasket />Carrinho <span>{cart?.length}</span></Link>
                </Box>

            </Box>
        </S.Menu >
    )
}

export default MenuComponent;