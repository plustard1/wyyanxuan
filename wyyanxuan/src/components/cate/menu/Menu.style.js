import styled from 'styled-components'

export const Slide = styled.div `
    .cate-menu {
        position: fixed;
        width: 90px;
        height: 100%;
        border-width: 0;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.15);
        padding-top: 20px;
        border-right-width: 1px;
        .cate-menu__item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 25px;
            height: 25px;
            border-width: 0;
            border-style: solid;
            border-color: rgb(243, 247, 245);
            border-left-width: 3px;
            .cate-menu__item-name {
                width: 100%;
                /* color: #333; */
                font-size: 16px;
                letter-spacing: 2px;
                text-align: center;
            }
            .cate-menu__item-name--active {
                color: #e41a1a;
            }
        }
        .cate-menu__item--active {
            border-left-color: #e41a1a;
        }
    }
`



