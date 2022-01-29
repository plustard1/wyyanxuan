import React, { useState, useEffect, memo } from 'react'
import Scroll from '@/baseUI/scroll'
import './Main.css'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import MainBanner from '@/components/main/mainBanner/MainBanner'
import RotationChart from '@/components/main/rotationChart/RotationChart'
import SearchBar from '@/components/main/searchBar/SearchBar'
import MenuBar from '@/components/main/menuBar/MenuBar'
import ImgList from '@/components/main/imgList/imgList'
import * as api from '@/api'
import { ListData, ListDataTop } from '@/components/main/listData/ListData'
import { forceCheck } from 'react-lazyload'

const Main = (props) => {
    const [list, setList] = useState([])
    let [type, setType] = useState(1)
    // 请求数据页数
    let [page, setPage] = useState(1)
    const [bannerDisplay, setBannerDisplay] = useState(false)
    const [searchDisplay, setSearchDisplay] = useState(false)
    const [ListDataBar, setListDataBar] = useState(false)
    // 属性
    // console.log(props)
    const { maindata } = props
    // action
    const { getMainDataDispatch } = props
    // console.log(maindata);
    const { searchPlaceholder = [], rotationImg = [], rotatingSideImg = [], imgList = [], menuBarData = {}, mainMenu = [] } = maindata;
    // 请求数据 加页
    const fetchList = () => {
        api
            .reqlist(page)
            .then(res => {
                // console.log(res);
                setList([
                    ...list,
                    ...res.data.data.list
                ])
            })
    }
    // 刷新数据
    const fetchListUpdate = () => {
        api
            .reqlist(page)
            .then(res => {
                setList([...res.data.data.list])
            })
    }
    useEffect(() => {
        if (!maindata.length) {
            getMainDataDispatch()
        }
        fetchList()
    }, [])

    useEffect(() => {
        fetchList()
    }, [page])

    // 上拉加载更多
    const handlePullUp = () => {
        console.log('上啦')
        setPage(++page)
    }
    // 下拉刷新
    const handlePullDown = () => {
        console.log('下拉刷新')
    }
    const handleOnclick = () => {
        setType(type + 1)
    }
    useEffect(() => {
        fetchListUpdate()
    }, [type])
    return (
        <div className="main">
            {/* 吸顶效果 */}
            <div className="main-padding" style={bannerDisplay ? { display: '' } : { display: 'none' }}>
                <MainBanner />
            </div>
            <div className="main-padding" style={searchDisplay ? { display: '' } : { display: 'none' }}>
                <SearchBar searchPlaceholder={searchPlaceholder} />
            </div>
            <div className="main__item-padding" style={ListDataBar ? { display: '' } : { display: 'none' }}>
                <Scroll direction={"horizental"} refresh={false}>
                    <ListDataTop mainMenu={mainMenu} handleOnclick={() => { handleOnclick() }} />
                </Scroll>
            </div>
            <Scroll direction={"vertical"} refresh={false}
                pullUp={handlePullUp} pullDown={handlePullDown}
                onScroll={(e) => {
                    // console.log(e)
                    if (e.y < -50) {
                        setBannerDisplay(true)
                    } else {
                        setBannerDisplay(false)
                    }
                    if (e.y < -88) {
                        setSearchDisplay(true)
                    } else {
                        setSearchDisplay(false)
                    }
                    if (e.y < -720) {
                        setListDataBar(true)
                    } else {
                        setListDataBar(false)
                    }
                    forceCheck()
                }}
            >
                <div>
                    <div className="main-padding">
                        {/* 主页头部 */}
                        <MainBanner />
                        {/* 搜索 */}
                        <SearchBar searchPlaceholder={searchPlaceholder} searchDisplay={searchDisplay} />
                        {/* 主页菜单 */}
                        <MenuBar menuBarData={menuBarData} />
                        {/* 主页轮播图 */}
                        <RotationChart rotationImg={rotationImg} rotatingSideImg={rotatingSideImg} />
                        <ImgList imgList={imgList} />
                    </div>
                    <div className='main__item-padding'>
                        <Scroll direction={"horizental"} refresh={false}>
                            <ListDataTop mainMenu={mainMenu} handleOnclick={() => { handleOnclick() }} />
                        </Scroll>
                    </div>
                    <div className="main__item-padding">
                        {/* 推荐 商品 */}
                        <ListData mainMenu={mainMenu} list={list} handleOnclick={() => { handleOnclick() }} />
                    </div>
                </div>
            </Scroll>
        </div>
    )
}
const mapStateToDispatch = (dispatch) => {
    return {
        getMainDataDispatch() {
            dispatch(actionTypes.getMainData())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        maindata: state.main.maindata
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(memo(Main))