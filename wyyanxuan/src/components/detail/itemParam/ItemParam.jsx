import React from "react"
import Loading from "@/components/loading/Loading.jsx"
import { Item } from "./ItemParam.style.js"

const ItemParam = (props) => {
    // console.log(props);
    const { data, attrList } = props;
    console.log(data, attrList);
    return (
        <Item>
            <div className='item-info-param'>
                <div className='item-info-param__title'>
                    <p className='item-info-param__title-txt'>商品参数</p>
                </div>
                {
                    attrList.length === 0 ? <Loading /> :
                    attrList.attrList.map((item, index) => (
                        <div key={index} className='item-info-param__item'>
                            <p className='item-info-param__item-name'>{item.attrName}</p>
                            <p className='item-info-param__item-value'>{item.attrValue}</p>
                        </div>
                    ))
                }
            </div>
        </Item>
    )
}

export default ItemParam