import React from "react"
import empty from '@/assets/cartImage/empty.png'
import { Top } from './Empty.style.js'

const Empty = () => {
    return (
        <Top>
            <div className="cart-empty">
                <img src={empty} alt="" className="cart-empty__img" />
                <p className="cart-empty__txt">去添加点什么吧</p>
            </div>
        </Top>
    )
}

export default Empty