import styled from "styled-components"

export const SearchTop = styled.div `
    .home__search {
        width: 100%;
        .home__search-wrap {
            height: 30px;
            display: flex;
            flex-direction: row;
            background-color: #ffffff;
            align-items: center;
            border: 1px solid #333333;
            border-radius: 28px;
            .home__search-img {
                margin-left: 15px;
                margin-right: 10px;
                width: 16px;
                height: 16px;
            }    
            .home__search-placeholder {
                color: rgb(94, 82, 82);
                font-size: 14px;
            }
            .swiper {
                width: 100%;
                height: 20px;
            }
            .home__search-button {
                position: absolute;
                height: 26px;
                width: 52px;
                right:16px;
                background-color: rgb(226, 42, 42);
                border-radius: 28px;
                border-style: none;
                .home__search-button_txt {
                    color: #ffffff;
                    font-size: 14px;
                }
            }
        }
    }
`