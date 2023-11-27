import styled from 'styled-components'

export const Menu = styled.div`
        background-color: rgb(83 194 206);
        padding: 2rem;

        a{
            margin: 0.5rem;
            text-decoration: none;
            color: #FFF;
        }

        .menuLoja{
            text-align: center;
        }

        .login{
            width: 60%;
            text-align: end;
        }

        svg{
            vertical-align: middle;
            margin-right: 0.2rem;
        }
        img{
            width: 5rem;
            height: 5rem;
        }
        .logoImg{
            vertical-align: middle;
            text-align: left;

        }

        .itemsMenu, .login, .logoImg{
            display: inline-block;
        }
`