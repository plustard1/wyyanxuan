import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import Loading from '@/components/loading/Loading'
import { Item } from './ItemImg.style.js'

const ItemImg = (props) => {
    console.log(props);
    const { ItemImg } = props
    return (
        <Item>
            <div className='ItemImg'>
                <div className="ItemImg-box">
                    <Swiper>
                        {
                            ItemImg.length === 0 ? <Loading /> :
                                ItemImg.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index} className='swiper-slide'>
                                            <img className='ItemImg__img' src={item.picUrl} alt="" />
                                        </SwiperSlide>
                                    )
                                })
                        }
                    </Swiper>
                    <div className="itemImg__indicator">
                        <p className="itemImg__indicator-txt">
                            {`${1}/${ItemImg.length}`}
                        </p>
                    </div>
                </div>
            </div>
        </Item>
    )
}

export default ItemImg
