import styled from "styled-components"

export const Foot = styled.div `
    position:fixed;
    display:flex;
    justify-content:space-between;
    align-items:center;
    bottom:0px;
    width:100%;
    height:1.6rem;
    font-size:0.4rem;
    background-color:white;
    padding: 10px 0;
    font-family: PingFangSC-Medium,PingFang SC;
    z-index:99;
    .item-footer {
        display: flex;
        align-items: center;

        .item-footer__nav {
            margin: 6px;
            .item-footer__nav-img {
                width: 26px;
                height: 26px;
            }
            .item-footer-nav-txt {
                font-size: 10px;
                line-height: 10px;
            }
        }

        .item-footer__add {
            height: 45px;
            .item-footer__add-txt {
                height: 45px;
                width: 112px;
                border-radius: 30px;
                background: #cc9756;
                font-size: 16px;
                color: #ffffff;
                font-weight: bold;
                border-style: none;
            }
        }

        .item-footer__buy {
            height: 45px;
            margin: 0 10px 0 10px;
            .item-footer__buy-txt {
                height: 45px;
                width: 112px;
                border-radius: 30px;
                background: #dd1922;
                font-size: 16px;
                color: #ffffff;
                font-weight: bold;
                border-style: none;
            }
        }
    }
`