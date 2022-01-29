import React, { useEffect, memo } from "react"
import { connect } from "react-redux"
import * as actionTypes from './store/actionCreators'
import { useLocation } from "react-router-dom"
import HeaderComponent from '@/common/headerComponent/HeaderComponent'
import Gallery from '@/components/detail/gallery/Gallery'
import ItemBase from '@/components/detail/itemBase/ItemBase'
import ItemParam from '@/components/detail/itemParam/ItemParam'
import ItemImgList from '@/components/detail/itemImgList/ItemImgList'
import Footer from '@/components/detail/footer/Footer'
import Scroll from '@/baseUI/scroll'
import { Item } from './Detail.style.js'

const Detail = (props) => {
    const { detaildata } = props
    // console.log(detaildata)
    const { DetailData = [], data } = detaildata
    // console.log(data)
    const { getDetailDataDispatch } = props
    let { pathname } = useLocation()
    let id = pathname.replace('/detail/', '') || undefined
    console.log(pathname, id)
    useEffect(() => {
        if (id) {
            getDetailDataDispatch(id)
        }

    }, [])

    const handleShare = () => {
        // to be continue    share
    }
    // 上拉加载更多
    const handlePullUp = () => {
        console.log('上啦')
    }
    // 下拉刷新
    const handlePullDown = () => {
        console.log('下拉刷新')
    }
    return (
        <Item>
            <div className="detail">
                <HeaderComponent handleShare={handleShare} />
                <Scroll direction={"vertical"} refresh={false}
                    pullUp={handlePullUp} pullDown={handlePullDown}
                    onScroll={(e) => {
                        // console.log(e)
                    }}>
                    <div className="detail-padding">
                        <Gallery list={DetailData} />
                        <ItemBase data={data} />
                        <ItemParam attrList={DetailData} data={data} />
                        <ItemImgList imgList={DetailData}/>
                    </div>
                </Scroll>
                <Footer />
            </div>
        </Item>
    )
}
const mapStateToDispatch = (dispatch) => {
    return {
        getDetailDataDispatch(id) {
            dispatch(actionTypes.getDetailData(id))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        detaildata: state.detail.detaildata
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(memo(Detail))