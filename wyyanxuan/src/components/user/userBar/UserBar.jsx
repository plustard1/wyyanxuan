import React from 'react'
import { Head, Top } from './UserBar.style.js'
import UserBackground from '@/assets/userImage/userBackground.png'
import UserImg from '@/assets/userImage/userImg.png'
import UserQR from '@/assets/userImage/user-QR.png'
import Pro from '@/assets/userImage/Pro.png'
import UserBackgroundTop from '@/assets/userImage/UserBackgroundTop.png'

export const UserBar = () => {

    return (
        <Head>
            <div>
                <img className='userBar' src={UserBackground} alt=''/>
            </div>
            <div className='user-info'>
                <img className='user-img' src={UserImg} alt=''/>
                <div className="user-title">
                    <p className="user-name">小鱼儿</p>
                    <div className="user-title__btn">
                        <div className="user__btn">
                            更新头像昵称
                        </div>
                        <div className="user__btn">
                            切换账号
                        </div>
                    </div>
                </div>
                <div className="user-QR">
                    <img className='QR' src={UserQR} alt=''/>
                </div>
                <div className="user-Pro">
                    <img className='Pro' src={Pro} alt=''/>
                    <p className="user-Pro__txt">Pro会员特权</p>
                    <div className=" iconfont righticon">
                        &#xe62b;
                    </div>
                </div>
            </div>
        </Head>
    )
}

export const UserBarTop = () => {
    return (
        <Top>
            <div className='userBar-top'>
                <img className='userBarTop' src={UserBackgroundTop} alt=''/>
            </div>
        </Top>
    )
}
