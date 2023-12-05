import styled from "styled-components";


export const ItemStyles = styled.div`
text-align: center;
padding: 3rem;

.areaImg, .areaInfos{
    display: inline-block;
    vertical-align: middle;
    margin: 1rem;
}

.areaImg{
    img{
        width: 15rem;
    }
}

.title{
    font-size: 1.8rem;
}
.description{
    font-size: 1.3rem;
    min-height: 13rem;
    max-height: 13rem;

}
button{
    margin-top: 2rem;
    width: 100%;
    background:  #219321cf;
    color: #FFF;
}
`