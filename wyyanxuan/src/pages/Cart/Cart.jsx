import React, { useEffect, useState } from "react"
import { Content } from './Cart.style.js'
import { connect } from "react-redux"
import Scroll from '@/baseUI/scroll/index'
import * as actionTypes from './store/actionCreators'
import * as api from '@/api'
import { RecommendListData } from "@/common/recommendListData/RecommendListData"
import Empty from '@/components/cart/empty/Empty'
import ShoppingCart from '@/components/cart/shoppingCart/ShoppingCart'
import { forceCheck } from 'react-lazyload'

const Cart = (props) => {
    const { cartdata = [], checkedMap = [], allMoney, isAllSelected, totalnum } = props
    console.log(cartdata)
    const { getCartDataDispatch, changeLogoDispatch,
        changeAllMoneyDispatch, reduce_btnDispatch,
        add_btnDispatch, change_numDispatch,
        selected_allDispatch, deleteDispatch } = props

    const [isChanged, setIsChanged] = useState(false)
    // console.log(props)
    // console.log(isChanged)
    const [list, setList] = useState([])
    let [page, setPage] = useState(1)
    

    const select_btn = (item) => {
        changeLogoDispatch(item)
        setIsChanged(isChanged => !isChanged)
    }
    const sumPrice = () => {
        changeAllMoneyDispatch(checkedMap)
    }
    const reduce_btn = (id) => {
        reduce_btnDispatch(id)
        setIsChanged(isChanged => !isChanged)
    }
    const add_btn = (id) => {
        add_btnDispatch(id)
        setIsChanged(isChanged => !isChanged)
    }
    const Enter_btn = (e, id) => {
        // 获取表单的数量，用js首先判断是否整数
        let value = parseInt(e.target.value);
        if (e.keyCode == 13) {
            change_numDispatch(value, id)
            setIsChanged(isChanged => !isChanged)
        }
    }
    const select_all = () => {
        selected_allDispatch()
    }
    // const gotodetail = (id) => {
    //     history.push(`/detail/${id}`)
    // }
    const delelte_btn = (id) => {
        deleteDispatch(id)
        setIsChanged(isChanged => !isChanged)
    }
    const buy_btn = (data) => {
        // history.push('/')
    }

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
        if (!cartdata.length) {
            getCartDataDispatch()
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

    return (
        <Content>
            <div className="title">购物车</div>
            <div className="cart">
                <div className="cart__item-marin">
                    {
                        totalnum === 0 ? <Empty /> :
                            <ShoppingCart cartdata={cartdata} select_btn={select_btn} reduce_btn={reduce_btn} buy_btn={buy_btn}
                                add_btn={add_btn} Enter_btn={Enter_btn} delelte_btn={delelte_btn} select_all={select_all}
                                isAllSelected={isAllSelected} allMoney={allMoney} />
                    }
                </div>
                <Scroll direction={"vertical"} refresh={false}
                    pullUp={handlePullUp} pullDown={handlePullDown}
                    onScroll={(e) => {
                        // console.log(e)
                        forceCheck()
                    }}
                >
                    <div className="cart__item-padding">
                        <RecommendListData list={list} />
                    </div>
                </Scroll>
            </div>
        </Content>
    )
}

const mapStateToDispatch = (dispatch) => {
    return {
        getCartDataDispatch() {
            dispatch(actionTypes.getCartData())
        },
        changeLogoDispatch(item) {  //  勾选逻辑
            dispatch(actionTypes.changeLogo(item))
        },
        changeAllMoneyDispatch(item) {  // 总价钱
            dispatch(actionTypes.allmoney(item))
        },
        reduce_btnDispatch(item) {  //减少商品数量
            dispatch(actionTypes.reduce_num(item))
        },
        add_btnDispatch(item) { // 增加商品数量
            dispatch(actionTypes.add_num(item))
        },
        change_numDispatch(num, id) {
            dispatch(actionTypes.change_num(num, id))
        },
        selected_allDispatch() {
            dispatch(actionTypes.select_all())
        },
        deleteDispatch(id) {
            dispatch(actionTypes.delete_btn(id))
        }
    }
}

const mapStateToPorops = (state) => {
    return {
        cartdata: state.cart.cartdata,
        checkedMap: state.cart.checkedMap,
        allMoney: state.cart.allMoney,
        isChanged: state.cart.isChanged,
        isAllSelected: state.cart.isAllSelected,
        totalnum: state.cart.totalnum
    }
}
export default connect(mapStateToPorops, mapStateToDispatch)(Cart)