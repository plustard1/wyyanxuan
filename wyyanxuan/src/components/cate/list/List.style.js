import styled from 'styled-components'

export const ListContent = styled.div `
    .cate-list_wrap {
        padding-top: 25px;
        padding-right: 15px;
        padding-bottom: 10px;
        padding-left: 110px;
        .cate-list__title {
            display: flex;
            flex-direction: row;
            padding-bottom: 4px;
            border-width: 0px;
            /* border-style: solid; */
            border-color: #dddddd;
            border-bottom-width: 0.5px;
            .cate-list__title-text {
                color: #333333;
                font-size: 16px;
                font-weight: bold;
                line-height: 21px;
            }
        }
        .cate-list__group-box {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 2px;
            border-top-width: 1px;
            border-color: rgba(0, 0, 0, 0.15);
            border-top-style: solid;
            .cate-list__item {
                padding-top: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 17px;
                width: 72px;
                flex-basis: 72px;
                .cate-list__group-img {
                    width: 72px;
                    height: 72px;
                }
                .cate-list__item-text-wrap {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    width: 100%;
                    height: 36px;
                    .cate-list__item-text {
                        color: #333333;
                        font-size: 14px;
                        line-height: 18px;
                        text-align: center;
                    }
                }
            }
            .cate-list__item--right {
                margin-right: 0px;
            }
        }
    }
`
















