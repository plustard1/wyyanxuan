import React from "react"
import { SearchTop } from './SearchBar.style'
import SearchIcon from '@/assets/main/SearchIcon.png'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'

const SearchBar = (props) => {
    const { searchPlaceholder } = props;
    return (
        <SearchTop>
            <div className='home__search'>
                <div className='home__search-wrap'>
                    <img className='home__search-img' src={SearchIcon} />
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 1000 }}
                        direction="vertical"
                        loop
                    >
                        {
                            searchPlaceholder.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className='home__search-placeholder'>{item.text}</SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <button className="home__search-button">
                        <p className="home__search-button_txt">搜索</p>
                    </button>
                </div>
            </div>
        </SearchTop>
    )
}

export default SearchBar