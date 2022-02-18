import React from "react"
import Loading from "@/components/loading/Loading"
import { BannerList } from './Banner.style.js'

const Banner = (props) => {
    const { cateList, curNav } = props
    console.log(cateList);
    return (
        <BannerList>
                <div className="cate-banner">
                    {
                        cateList.length === 0 ? <Loading /> :
                            cateList.slice(curNav, curNav + 1).map((item, index) => {
                                return (
                                    <div key={index} className="cate-banner__item">
                                        <img className="cate-banner__item-img" src={item.banner.img} />
                                    </div>
                                )
                            })
                    }
                </div>
        </BannerList>
    )
}

export default Banner