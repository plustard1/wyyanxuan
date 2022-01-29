import styled from 'styled-components'

export const List = styled.div `
    display: flex;
    flex-flow: wrap;
    text-align: center;
    margin-bottom:0.457rem;
    /* margin-left: 0.177rem; */
    text-decoration:column;
    box-sizing:border-box;
    padding-top:1.45rem;
    background:#ffffff;
    position: relative;
    .list-title {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top: 0.4rem;
        font-size: 16px;
    }
    .ListItem {
        background: #ffffff;
        flex: 1;
        .ListItem-img{
            /* margin-right: 0.086rem; */
            border-radius:1px;
            .ListItem-content__img{
                width: 4.5rem;
                border-radius:9px;
                overflow:hidden;
            }     
        }
    }
    .ListItem--right {
        margin-right: 0px;
    }
`;
export const TextContent = styled.div `
    position:relative;
    height:100%;
    .ListItem-title{
        padding:0.2rem 0rem 0 0.2rem;
        text-align: left;
        box-sizing:border-box;
        width:160px;
        font-size:0.38rem;
        font-family: PingFangSC-medium;
        font-weight:500;
        color:black;
    }
    .ListItem-price{
        color:red;
        display: flex;
        padding-left: 0.2rem;
        .dollar {
            margin-top: 0.28rem;
            font-size: 0.4rem;
        }
        .ListItem-price__num {
            font-weight: 600;
            font-size: 0.66rem;
        }
    }
`