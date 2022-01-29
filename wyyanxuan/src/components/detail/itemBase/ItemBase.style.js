import styled from "styled-components"

export const Item = styled.div `
    width: 100%;
    .item-base {
        /* padding: 40px 30px; */
        padding: 10px;
        background: #ffffff;
        .item-base__price {
            display: flex;
            flex-direction: row;
            align-items: center;
            .item-base__price-symbol {
                padding-top: 8px;
                color: #fa1e32;
                font-weight: bold;
                font-size: 24px;
                line-height: 24px;
            }
            .item-base__price-txt {
                color: #fa1e32;
                font-size: 38px;
                font-weight: bold;
                line-height: 38px;
            }
        }
        .item-base__header {
            align-items: center;
            margin-top: 10px;
            .item-base__header-wrap {
                display: flex;
                flex-direction: column;
                .item-base__header-name {
                    color: #333333;
                    font-size: 18px;
                    white-space: nowrap;
                }
                .item-base__header-tag {
                    /* margin-top: 14px; */
                    color: #ffffff;
                    font-size: 10px;
                    width: 40px;
                    border-radius: 30px;
                    line-height: 20px;
                    text-align: center;
                    border-style: none;
                    background: #fa545a;
                }
            }
            .item-base__header-recommend-top {
                display: flex;
                align-items: center;
                font-size: 12px;
                position: relative;
                .item-base__header-recommend-tag {
                    
                }
                .item-base__header-star {
                    display: flex;
                    align-items: center;
                    position: absolute;
                    right: 0;
                    .item-base__header-star-rate {
                        /* margin-top: 10px; */
                        color: #333333;
                        /* font-size: 16px; */
                    }
                    .item-base__header-star-txt {
                        color: #333;
                        /* font-size: 16px; */
                        font-weight: bold;
                        line-height: 32px;
                    }
                }
            }
            .item-base__header-recommend:after {
                content: '';
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-bottom: 8px solid #fafafa;
                position: absolute;
                top: -8px;
                left: 18px;
            }
            .item-base__header-recommend {
                position: relative;
                display: flex;
                flex-direction: row;
                
                background: #fafafa;
                align-items: center;
                border-style: none;
                padding: 10px;
                margin-top: 10px;
                /* border: solid; */
                
                .item-base__header-recommend-symbol {
                    color: #fa545a;
                    font-size: 16px;
                }
                .item-base__header-recommend-text {
                    margin-left: 6px;
                    font-size: 12px;
                }
            }   
        }
    }
`