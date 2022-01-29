import styled from "styled-components"

export const Menu = styled.div `
    .user-menu {
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        margin-top: 10px;
        padding-top: 40px;
        padding-bottom: 10px;
        border-radius: 10px;
        position: relative;
        .user-menu__text {
            position: absolute;
            left: 10px;
            top: 10px;
            font-size: 14px;
        }
        .user-menu__item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 20%;
            height: 80px;
            .user-menu__item-img {
                width: 28px;
                height: 28px;
            }
            .user-menu__item-txt {
                margin-top: 16px;
                color: #333;
                font-size: 12px;
                line-height: 2px;
            }
        }
    }
`