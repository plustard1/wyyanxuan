import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import './RotationChart.css'
import { Autoplay, Pagination } from 'swiper'

const RotationChart = (props) => {
    const { rotationImg, rotatingSideImg } = props
    return (
        <div className='rotation'>
            <div className="rotation-box__slide">
                <Swiper modules={[ Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    // direction='vertical'
                    loop
                >
                    {
                        rotatingSideImg.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className='swiper-slide'>
                                    <a href={item.linkUrl}>
                                        <img className='rotationChart-img__slide' src={item.picUrl} alt="" />
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className="rotation-box__main">
                <Swiper modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop
                >
                    {
                        rotationImg.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className='swiper-slide'>
                                    <a href={item.linkUrl}>
                                        <img className='rotationChart-img__main' src={item.picUrl} alt="" />
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className="rotation-box__slide">
                <Swiper modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    loop
                >
                    {
                        rotatingSideImg.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className='swiper-slide'>
                                    <a href={item.linkUrl}>
                                        <img className='rotationChart-img__slide' src={item.picUrl} alt="" />
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
        // <div className="rotation-box">
        //     <div className="swiper">
        //         <div className="swiper-wrapper">
        //             {
        //                 rotationImg.map((item, index) => {
        //                     return (
        //                         <div
        //                             key={index}
        //                             className="swiper-slide">
        //                             <a href={item.linkUrl}>
        //                                 <img className='rotationChart-img' src={item.picUrl} alt="" />
        //                             </a>
        //                         </div>
        //                     )
        //                 })
        //             }
        //         </div>
        //         <div className="swiper-pagination"></div>
        //     </div>
        // </div>
    )
}

export default RotationChart