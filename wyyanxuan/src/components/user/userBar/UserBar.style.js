import styled from "styled-components"

export const Head = styled.div `
    .userBar {
        height: 100%;
        width: 100%;
        position: relative;
    }
    .user-info {
        position: absolute;
        display: flex;
        top: 64px; 
        left: 12px;
        .user-img {
            width: 60px;
            height: 60px;
        }
        .user-title {
            width: 158px;
            height: 50px;
            margin-top: 10px;
            margin-left: 8px;
            .user-name {
                font-size: 14px;
                margin-bottom: 4px;
                margin-left: 2px;
            }
            .user-title__btn {
                display: flex;
                .user__btn {
                    font-size: 10px;
                    margin-right: 10px;
                    border-style: solid;
                    border-width: 0.1px;
                    border-color: rgba(233, 199, 151, 0.5);
                    border-radius: 10px;
                    padding: 0px 2px 2px 2px;
                }
            }
        }
        .user-QR {
            height: 26px;
            width: 26px;
            margin-top: 18px;
            .QR {
                height: 26px;
                width: 26px;
            }
        }
        .user-Pro {
            display: flex;
            position: relative;
            right: 0;
            height: 22px;
            margin-top: 20px;
            margin-left: 6px;
            border-top-left-radius: 10px; 
            border-bottom-left-radius: 10px;
            border-width: 0.1px;
            background-color: rgb(243, 202, 132);
            .Pro {
                margin-top: 3px;
                margin-left: 2px;
                height: 16px;
                width: 16px;
            }
            .user-Pro__txt {
                font-size: 10px;
                font-weight: 500;
                margin-top: 3px;
            }
            .righticon {
                height: 30px;
                width: 18px;
                padding-right: 2px;
            }
        }
    }
`

export const Top = styled.div `
    width: 100%;
    .userBar-top {
        height: 80px;
        .userBarTop {
            height: 80px;
            width: 100%;
        }
    }
`