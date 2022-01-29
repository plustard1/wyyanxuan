import React, { useContext } from "react"
import { CurNavContext } from '@/pages/Cate/Cate'
import Loading from "@/components/loading/Loading"
import { BannerList } from './Banner.style.js'

const Banner = (props) => {
    const { cateList } = props

    const { curNav } = useContext(CurNavContext)
    console.log(cateList);
    return (
        <BannerList>
            <CurNavContext.Provider value={curNav}>
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
            </CurNavContext.Provider>
        </BannerList>
    )
}

export default Banner