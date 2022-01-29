import React, { useEffect } from 'react';
import MenuBarItem from './menuBarItem/MenuBarItem';
import './MenuBar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const MenuBar = (props) => {
    const { menuBarData } = props
    return (
        <div className="menu-bar">
            <div className="menu-bar1">
                <div className="swiper-menu">
                    {/* swiper  */}
                    <Swiper className="swiper-wrapper"
                    modules={[Pagination]}
                        pagination={{clickable: true}}
                    >
                        <SwiperSlide className="swiper-slide">
                            <div>
                                <MenuBarItem menuBarData={menuBarData.list1}/>
                                <MenuBarItem menuBarData={menuBarData.list2}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide"
                        style={{width: '100%'}}>
                            <div>
                                <MenuBarItem menuBarData={menuBarData.list3}/>
                                <MenuBarItem menuBarData={menuBarData.list4}/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    {/* <div className="swiper-scrollbar-menu"></div> */}
                </div>
            </div>
        </div>
    )
}

export default MenuBar