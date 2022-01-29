import React from 'react'
import './imgList.css'

function ImgList(props) {
    const { imgList } = props;
    return (
        <div className='imgList-box'>
            {
                imgList.map((item, index) => {
                    return (
                        <div className="imgList-one" key={index}>
                            <img src={item.picUrl} className='imgList-one__img' alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}



export default ImgList