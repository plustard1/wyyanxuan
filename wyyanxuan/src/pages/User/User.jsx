import React, { useEffect, useState } from "react"
import './User.css'
import { connect } from "react-redux"
import Scroll from '@/baseUI/scroll/index'
import * as actionTypes from './store/actionCreators'
import * as api from '@/api'
import { UserBar, UserBarTop } from '@/components/user/userBar/UserBar'
import { UserData } from '@/components/user/userData/UserData'
import { UserOrder } from '@/components/user/userOrder/UserOrder'
import { UserMenu } from '@/components/user/userMenu/UserMenu'
import { RecommendListData } from "@/common/recommendListData/RecommendListData"
import { forceCheck } from 'react-lazyload'

const User = (props) => {
    const [userBarDisplay, setUserBarDisplay] = useState(false)
    const { getUserDataDispatch } = props
    // console.log(props)
    const [list, setList] = useState([])
    let [page, setPage] = useState(1)
    const { userdata } = props
    // console.log(userdata)
    const { orderBarData = [], myServiceData = [] } = userdata

    const fetchList = () => {
        api
            .reqlist(page)
            .then(res => {
                // console.log(res)
                setList([
                    ...list,
                    ...res.data.data.list
                ])
            })
    }

    useEffect(() => {
        if (!userdata.length) {
            getUserDataDispatch()
        }
        fetchList()
    }, [])

    useEffect(() => {
        fetchList()
    }, [page])

    // 上拉加载更多
    const handlePullUp = () => {
        console.log('上啦')
        setPage(++page);
    }
    // 下拉刷新
    const handlePullDown = () => {
        console.log('下拉刷新')
    }

    return (
        <div className="user">
            {/* 吸顶效果 */}
            <div style={userBarDisplay ? { display: '' } : { display: 'none' }}>
                <UserBarTop />
            </div>
            <Scroll direction={"vertical"} refresh={false}
                pullUp={handlePullUp} pullDown={handlePullDown}
                onScroll={(e) => {
                    // console.log(e)
                    if (e.y < -150) {
                        setUserBarDisplay(true)
                    } else {
                        setUserBarDisplay(false)
                    }
                    forceCheck()
                }}
            >
                <div className="scroll">
                    <UserBar />
                    <UserData />
                    <div className="user-padding">
                        <UserOrder orderBarData={orderBarData} />
                        <UserMenu myServiceData={myServiceData} />
                    </div>
                    <div className="user__item-padding">
                        <RecommendListData list={list} />
                    </div>
                </div>
            </Scroll>
        </div>
    )
}

const mapStateToDispatch = (dispatch) => {
    return {
        getUserDataDispatch() {
            dispatch(actionTypes.getUserData())
        }
    }
}

const mapStateToPorops = (state) => {
    return {
        userdata: state.user.userdata
    }
}
export default connect(mapStateToPorops, mapStateToDispatch)(User)