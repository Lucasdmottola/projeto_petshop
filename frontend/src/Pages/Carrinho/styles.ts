import styled from "styled-components";

export const CartStyles = styled.div`
    img{
        max-width: 100%;
    }
    text-align: center;
    color: #067175;
    ul{
        padding: 3rem 0rem;

    }
    .css-2s90m6-MuiAvatar-root{
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
    }

    .css-tlelie-MuiListItemText-root {
        max-width: 15rem;
    }
    .css-1p823my-MuiListItem-root{
        width: 50%;
        margin: 0.5rem auto;
        background: #00c8cf1a;
        border-radius: 1rem;
    }
    .btnRemove{
        width: 100%;
        text-align: center;
    }


    .noData{
        margin-top: 7rem;
        p{
            font-size: 2rem;
            display: inline-block;
            vertical-align: super;
        }
        span{
            display: inline-block;
        }
        svg{
            width: 2rem;
            height: 2rem;
        }
    }
`