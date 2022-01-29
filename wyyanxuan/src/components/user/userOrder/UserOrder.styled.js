import styled from "styled-components"

export const Content = styled.div `
    background: #fff;
    margin-top: 40px;
    border-radius: 10px;
    position: relative;
    height: 160px;
    .order-menu {
        display: flex;
        .order-menu__item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 20%;
            height: 80px;
            .order-menu__item-img {
                width: 26px;
                height: 26px;
            }
            .order-menu__item-txt {
                margin-top: 16px;
                color: #333;
                font-size: 14px;
                line-height: 2px;
            }
        }
    }
    .line {
        position: absolute;
        top: 20px;
        left: 72px;
        border-right: 1px solid rgb(217, 217, 217);
        height: 48px;
        /*border: 20px solid transparent;
        border-right-color: black; */
    }
    .banner {
        height: 64px;
        .banner-img{
            height: 64px;
            width: 100%;
        }
    }
`