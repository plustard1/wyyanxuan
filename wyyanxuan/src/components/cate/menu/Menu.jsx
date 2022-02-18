import React from "react"
import classNames from 'classnames'
import { Slide } from './Menu.style.js'

const Menu = (props) => {
    const { cateMenu, curNav, setCurNav } = props
    console.log(curNav)
    return (
        <Slide>
                <div className="cate-menu">
                    {
                        cateMenu.map((item, index) => {
                            const active = item.id === curNav
                            return (
                                <div key={index} onClick={setCurNav.bind(null, index)} className={classNames("cate-menu__item", active && "cate-menu__item--active")}>
                                    <p className={classNames("cate-menu__item-name", active && "cate-menu__item-name--active")}>
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
        </Slide>
    )
}

export default Menu
