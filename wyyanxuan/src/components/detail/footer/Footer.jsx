import React from "react"
import { Foot } from './Footer.style.js'
import homeIcon from '@/assets/details/home.png'
import serviceIcon from '@/assets/details/service.png'
import cartIcon from '@/assets/details/cart.png'
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import * as actionTypes from '@/pages/Cart/store/actionCreators'


const Footer = (props) => {
    const { goToShoppingCartDispatch } = props
    const history = useHistory()
    // console.log(history);
    const handleNav = (url) => {
        history.push(url)
    }
    const dataList = {       
        "img": "https://yanxuan-item.nosdn.127.net/9fb79a3553828a118d7b9f1f202ee662.jpg?imageView&thumbnail=0x750",
         "id":3,
         "title":"加湿香薰夜灯三合一, 日式超声波香薰机",
         "price":120,
         "num":1
    }
    const goToShoppingCart = (data) => {
        goToShoppingCartDispatch(data)
        history.push('/home/cart')
    }
    const NAV_LIST = [{
        key: 'home',
        img: homeIcon,
        txt: '首页',
        url: '/home'
    }, {
        key: 'service',
        txt: '客服',
        img: serviceIcon
    }, {
        key: 'cart',
        txt: '购物车',
        img: cartIcon,
        url: '/home/cart'
    }]
    return (
        <Foot>
            <div className="item-footer">
                {NAV_LIST.map(item => (
                    <div key={item.key} className="item-footer__nav" onClick={() => handleNav(item.url)}>
                        <img className="item-footer__nav-img" src={item.img} />
                        <p className="item-footer-nav-txt">{item.txt}</p>
                    </div>
                ))}
                <div className="item-footer__add">
                    <button className="item-footer__add-txt" onClick={() => goToShoppingCart(dataList)}>加入购物车</button>
                </div>
                <div className="item-footer__buy">
                    <button className="item-footer__buy-txt">立即购买</button>
                </div>
            </div>
        </Foot>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}
  
const mapStateToDispatch = (dispatch) => {
    return {
        goToShoppingCartDispatch(data){
            dispatch(actionTypes.goToShoppingCart(data))
        }
    }
  }

export default connect(mapStateToProps, mapStateToDispatch)(Footer)