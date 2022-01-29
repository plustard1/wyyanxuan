import styled from "styled-components";


export const ShopContainer =styled.div`
    margin-top: 40px;
    .bottom_menu{
        width: 100vw;
        position: fixed;
        bottom: 66px;
        display: flex;
        align-items: center;
        height: 56px;
        background-color: #ffffff;
        z-index: 10;
        font-size: 18px;
        .logo{
            padding-top: 8px;
            margin-right: 12px;
        }
        .all_btn{
            margin-left: 5px;
        }
        .prize{
            display: flex;
            align-items: center;
            position: absolute;
            right: 120px;
            color:#ea7276;
        }
        .bug{
            color: #fff;
            padding:5px 30px;
            background-color: #dd1a21;
            position: absolute;
            border:1px solid #dd1a21;
            border-radius: 20px;
            right: 10px; 
            text-align: center;
        }
    }
    .scroll{
        display: flex;
        width: 110vw;
    }
    .scrollcontainer{
        width: 100vw;
    }
`
export const ShopBox = styled.div`
    background-color: #ffffff;
    position: relative;
    border:1px solid white;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    .item{
        width: 100vw;
        font-size: 16px;
        /* margin-top: 20px; */
        /* background-color: red; */
        position: relative;
        .logo{
            position: absolute;
            top: 50%;
        }
       
        .shop_item{
            
            display: flex;
            margin-left: 40px;
            margin-top: 40px;
            .activity{
                position:absolute ;
                top: 5px;
                font-size: medium;
            }
            .class{
                display: flex;
                align-items: center;
                display: inline-block;
                border:1px solid gray;
                border-radius: 10px;
                margin-top: 5px;
            }
            .prize{
                font-size: 20px;
                margin-top: 8px;
                position: absolute;
                bottom: 9px;
            }
            .shop_img img{
                width: 100px;
                height: 100px;
            }
            .txt_box{
                margin-left: 10px;
            }
            .button{
                /* float: right; */
                position: absolute;
                right: -11px;
                bottom: -32px;
                width: 120px;
                height: 120px;
                display: flex;
                align-items: center;
                .less,.num,.more{
                    width: 35px;
                    height: 35px;
                    font-size: 12px;
                    border:1px solid white;
                    box-sizing: border-box;
                    border:1px solid #cccccc;
                    text-align: center;
                }
                .num{
                    font-size: 19px;
                }
            }
        }
    }
`
export const Delete = styled.div`
    background-color: #dd1a21;
    padding:20px 5px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 100px;
    /* height: 148px; */
`
