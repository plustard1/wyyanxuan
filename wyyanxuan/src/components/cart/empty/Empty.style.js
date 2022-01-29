import styled from "styled-components";

export const Top = styled.div `
    .cart-empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        padding: 60px 0 60px;
        background: #ffffff;
        .cart-empty__img {
            width: 120px;
            height: 120px;
            margin-left: 20px;
        }
        .cart-empty__txt {
            margin-top: -10px;
            color: #333333;
            font-size: 20px;
            line-height: 20px;
        }
    }
`