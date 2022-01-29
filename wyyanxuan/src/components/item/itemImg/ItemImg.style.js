import styled from "styled-components";

export const Item = styled.div`
    .ItemImg {
        display: flex;
        .ItemImg-box{
            width: 10.388rem;
            height: 5.6944rem;
            overflow: hidden;
            font-size: 0;
            padding-top: 10px;
            .swiper-slide{
                height: 4.6944rem /* 291/108 */;
                overflow: hidden;
                font-size: 0;
                padding-top: 6px;
                .ItemImg__img{
                    display: inline-block;
                    height: 4.6944rem;
                    width: 10.388rem;
                }
                .itemImg__indicator {
                    /* position: fixed; */
                    /* position: absolute; */
                    /* float: left; */
                    top: -6px;
                    right: 10px;
                    width: 2rem;
                    height: 2rem;
                    .itemImg__indicator-txt {
                        width: 2rem;
                        height: 2rem;
                        background-color: red;
                        color: black;
                    }
                }
            }
        }
    }
`