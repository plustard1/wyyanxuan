import styled from 'styled-components';

export const List = styled.div `
    height:6.2rem;
    margin-bottom:0.457rem;
    text-decoration:column;
    box-sizing:border-box;
    padding-top:0.35rem;
    background:white;
    justify-content: center;
    display: flex;
    flex: 1;
    .ListItem{
        height: 250px;
        .ListItem-img{
            border-radius:1px;
            width: 160px;
            .ListItem-content__img{
                width: 160px;
                border-radius:9px;
                overflow:hidden;
            }     
        }
    }
    
  
`;
export const TextContent = styled.div `
    position:relative;
    height:90px;
    .ListItem-title{
        padding:0.2rem 0rem 0 0;
        box-sizing:border-box;
        width: 160px;
        font-size:0.38rem;
        font-family: PingFangSC-medium;
        font-weight:500;
        color:black;
        text-align:left;
    }
    .ListItem-price{
        color:red;
        display: flex;
        .dollar {
            padding-top: 0.3rem;
            font-size: 0.4rem;
        }
        .ListItem-price__num {
            
            font-weight: 600;
            font-size: 0.66rem;
        }
    }
`