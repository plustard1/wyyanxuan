import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import Loading from '@/components/loading/Loading'
import { List } from './Gallery.style.js'

const Gallery = (props) => {
    // console.log(props);
    const { list } = props;
    const [current, setCurrent] = useState(0)
    // console.log(list.gallery);
    const handleIndexChange = (e) => {
        setCurrent(e.activeIndex)
    }
    return (
        <List>
            <div className='gallery'>
                <div >
                    <Swiper className="gallery-box"
                        onSlideChange={handleIndexChange}
                    >
                        {
                            list.length === 0 ? <Loading /> :
                                list.gallery.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index} className='swiper-slide'>
                                            <img className='gallery__img' src={item.picUrl} alt="" />
                                        </SwiperSlide>
                                    )
                                })
                        }
                    </Swiper>
                    <div className="gallery__indicator">
                        {
                            list.length === 0 ? <Loading /> :
                                <p className="gallery__indicator-txt">
                                    {`${current + 1}/${list.gallery.length}`}
                                </p>
                        }
                    </div>
                </div>
            </div>
        </List>
    )
}

export default Gallery
