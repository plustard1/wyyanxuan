import styled from "styled-components"

export const List = styled.div `
    width: 100%;
    .gallery {
        position: relative;
        margin-top: 1.189rem;
        .gallery-box {
            width: 375px;
            height: 375px;
            .swiper-slide {
                width: 375px;
                height: 375px;
                .gallery__img {
                    height: 375px;
                    width: 375px;
                }
            }
        }
        .gallery__indicator {
            position: absolute;
            right: 20px;
            bottom: 20px;
            z-index: 2;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 20px;
            background: white;
            .gallery__indicator-txt {
                color: #333;
                font-size: 14px;
            }
        }
    }
`