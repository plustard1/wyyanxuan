import styled from "styled-components"

export const Content = styled.div`
    .title{
        font-size: 20px;
        font-weight: bolder;
        position: fixed;
        left: 0;
        top: 0;
        align-items: center;
        background-color: #ffffff;
        width: 100vw;
        height: 40px;
        z-index: 10;
        text-align: center;
    }
    .cart {
        height: calc(100vh - 0.65rem);
        width: 100%;
        /* .cart-padding {
            padding: 0rem 0.324rem 0 0.324rem;
            background: rgb(240, 240, 240);
        } */
        .cart__item-marin {
            /* margin: 0 0.3rem 0 0.3rem; */
            /* overflow: hidden; */
        }
        .cart__item-padding {
            padding: 0rem 0.324rem 0rem 0.324rem;
            margin-top: 22px;
            background-color: #ffffff;
        }
    }
`