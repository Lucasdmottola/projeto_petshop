import styled from "styled-components";


export const HomeStyles = styled.div`
.bannerHome{
    text-align: center;
    box-shadow: rgb(0 200 207) -2px 4px 20px 0px;
}
.infosHome{
    margin-top: 3rem;
    h5{
        text-align: center;
        color: #000000ad;
        text-transform: uppercase;
        font-size: 1.8rem;
    }

    p{
        text-align: justify;
        font-size: 1.6rem;
        padding: 1rem;
        color: #000000ad;
}
}
.cardInfos{
    width: 45%;
    display: inline-block;
    padding: 1rem;
    background: rgba(0, 200, 207, 0.27);
    margin: 0.5rem;
    border-radius: 1rem;
    min-height: 7rem;
    vertical-align: middle;
    max-height: 7rem;
}
.servicosHome{
    text-align: center;
    h5{
          
            margin: 2rem 0rem;
            color: #000000ad;
            text-transform: uppercase;
            font-size: 1.8rem;

    }
    .title{
        color: #1d9195;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: left;
    }

    p{
        text-align: justify;
        color: #000000ad;
    }
}
`