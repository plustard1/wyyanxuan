import React from 'react'
import classNames from 'classnames'
import { Menu } from './UserMenu.style.js'

export const UserMenu = (props) => {
    // console.log(props);
    const { myServiceData } = props;
    return (
        <Menu>        
            <div className='user-menu'>
                <p className="user-menu__text">我的服务</p>
                {myServiceData.map((item, index) => {
                    return (
                        <div key={index} className='user-menu__item'>
                            <img className='user-menu__item-img' src={item.picUrl} />
                            <p className='user-menu__item-txt'>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </Menu>
    )
}