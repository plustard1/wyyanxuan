import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import HomeIcon from '@/assets/tab-bar/home.png'
import HomeIconActive from '@/assets/tab-bar/home-active.png'
import CateIcon from '@/assets/tab-bar/cate.png'
import CateIconActive from '@/assets/tab-bar/cate-active.png'
import CartIcon from '@/assets/tab-bar/cart.png'
import CartIconActive from '@/assets/tab-bar/cart-active.png'
import UserIcon from '@/assets/tab-bar/user.png'
import UserIconActive from '@/assets/tab-bar/user-active.png'
import './Tabbuttom.css'
import HeadNumIcon from '../../common/headNumIcon/HeadNumIcon'
import { connect } from 'react-redux'
import { actionCreators } from '../../pages/Main/store'

const Bottom = (props) => {
    const { route, totalnum } = props
    const { pathname } = useLocation()
    // const {pathname} = location
    console.log(pathname);
    // 
    const index = route.routes.findIndex(item => item.path === pathname) - 1
    console.log(props)
    const { setIndexDispatch } = props
    return (
        <>
            {/* 二级路由而准备 */}
            {renderRoutes(route.routes)}
            <ul className="Botton-warper">
                <li
                    onClick={() => { setIndexDispatch(0) }}
                    className="Botton-warper-warp"
                    key="1">
                    <Link to="/home/main"
                        style={{ textDecoration: "none" }}>
                        <div>
                            <div className="icon">
                                {
                                    index === 0 ? <img className='icon-img' src={HomeIconActive} alt='' /> :
                                    <img className='icon-img' src={HomeIcon} alt='' />
                                }
                            </div>
                            <div
                                style={index === 0 ? { color: '#ec564b' } : {}}
                                className="planet">首页</div>
                        </div>
                    </Link>
                </li>
                <li className="Botton-warper-warp" key="2"
                    onClick={() => { setIndexDispatch(1) }}>
                    <Link to='/home/cate' style={{ textDecoration: "none" }}>
                        <div className="icon">
                            {
                                index === 1 ? <img className='icon-img' src={CateIconActive} alt='' /> :
                                <img className='icon-img' src={CateIcon} alt='' />
                            }
                        </div>
                        <div className="planet" style={index === 1 ? { color: "#ec564b" } : {}}>
                            分类
                        </div>
                    </Link>
                </li>
                <li className="Botton-warper-warp" key="3"
                    onClick={() => { setIndexDispatch(2) }}>
                    <Link to='/home/cart' style={{ textDecoration: "none" }}>
                        <div className="icon">
                            {
                                index === 2 ? <img className='icon-img' src={CartIconActive} alt='' /> :
                                <img className='icon-img' src={CartIcon} alt='' />
                            }
                        </div>
                        <div className="planet" style={index === 2 ? { color: "#ec564b" } : {}} >
                            购物车
                            <HeadNumIcon display="" top="-0.92rem" left="1.5rem" totalnum={totalnum} />
                        </div>
                        
                    </Link>
                </li>
                <li className="Botton-warper-warp" key="4"
                    onClick={() => {
                        setIndexDispatch(3);
                    }}>
                    <Link to='/home/user' style={{ textDecoration: "none" }}>
                        <div className="icon">
                            {
                                index === 3 ? <img className='icon-img' src={UserIconActive} alt='' /> :
                                <img className='icon-img' src={UserIcon} alt='' />
                            }
                        </div>
                        <div className="planet" style={index === 3 ? { color: "#ec564b" } : {}}>
                            个人
                        </div>
                    </Link>
                </li>
            </ul>
            {/* tabbar位置 */}
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        totalnum: state.cart.totalnum,
        index: state.main.index
    }
}
// setIndex changeIndex

const mapDispatchToProps = (dispatch) => {
    return {
        setIndexDispatch(index) {
            dispatch(actionCreators.setIndex(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Bottom))