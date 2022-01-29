import styled from "styled-components"

export const Item = styled.div `

    .item-info-param {
        margin-top: 18px;
        /* padding-bottom: 20px; */
        padding-left: 10px;
        background: #ffffff;
        .item-info-param__title {
            padding-top: 20px;
            padding-bottom: 20px;
            .item-info-param__title-txt {
                color: #333333;
                font-size: 20px;
                line-height: 28px;
            }
        }
        .item-info-param__item {
            display: flex;
            padding: 10px 60px 10px 0;
            border: 0 dashed #dddddd;
            border-top-width: 1px;
            flex-wrap: wrap;
            .item-info-param__item-name {
                width: 80px;
                color: #b9b9b9;
                font-size: 14px;
                line-height: 30px;
            }
            .item-info-param__item-value {
                flex: 1;
                margin-left: 10px;
                color: #333333;
                font-size: 14px;
                line-height: 30px;
            }
        }
    }
`