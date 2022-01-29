import React from "react"
import Loading from "@/components/loading/Loading"
import { Detail } from './ItemImgList.style.js'

const ItemImgList = (props) => {
    // console.log(props);
    const { imgList } = props;
    // console.log(imgList.detailImg);
    return (
        <Detail>
            <div className='item-detail'>
                {
                    imgList.length === 0 ? <Loading /> :
                    imgList.detailImg.map((item, index) => (
                        <img
                            key={index}
                            className='item-detail__img'
                            src={item.picUrl}
                        />
                    ))}
            </div>
        </Detail>
    )
}

export default ItemImgList