import React from "react"
import { Content } from './UserOrder.styled.js'
import Account from '@/assets/userImage/static-union.gif'

export const UserOrder = (props) => {
    const { orderBarData } = props;
    return (
        <Content>
            <div className="order-menu">
            {orderBarData.map((item, index) => {
                return (
                    <div key={index} className='order-menu__item'>
                        <img className='order-menu__item-img' src={item.picUrl} />
                        <p className='order-menu__item-txt'>{item.text}</p>
                    </div>
                )
            })}
            </div>
            <div className="line"></div>
            <div className="banner">
                <img className="banner-img" src={Account} alt="" />
            </div>
        </Content>
    )
}