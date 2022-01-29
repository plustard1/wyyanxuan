import React, { useEffect } from "react"
import { Item } from './ItemBase.style.js'

const ItemBase = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <Item>
            {
                data && 
                <div className='item-base'>
                <div className='item-base__price'>
                    <p className='item-base__price-symbol'>¥</p>
                    <p className='item-base__price-txt'>
                        120
                    </p>
                </div>

                <div className='item-base__header'>
                    <div className='item-base__header-wrap'>
                        <p className='item-base__header-name'>加湿香薰夜灯三合一, 日式超声波香薰机</p>
                        <p className='item-base__header-tag'>自营</p>
                    </div>
                    <div className="item-base__header-recommend-top">
                        <div className="item-base__header-recommend-tag">推荐理由</div>
                        <div className='item-base__header-star'>
                            <p className='item-base__header-star-rate'>好评率</p>
                            <p className='item-base__header-star-txt'>{data.rate}%</p>
                        </div>
                    </div>
                    <div className="item-base__header-recommend">
                        <div className="item-base__header-recommend-symbol">①</div>
                        <p className="item-base__header-recommend-text">{data.desc}</p>
                    </div>
                </div>
            </div>}
        </Item>
    )
}

export default ItemBase