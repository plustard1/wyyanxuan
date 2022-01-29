import React, { useState, useContext } from "react"
import classNames from 'classnames'
import { CurNavContext } from "@/pages/Cate/Cate"
import { Slide } from './Menu.style.js'

const Menu = (props) => {
    const { cateMenu } = props
    const { curNav, setCurNav } = useContext(CurNavContext)
    console.log(curNav)
    return (
        <Slide>
            <CurNavContext.Provider value={{ curNav, setCurNav }}>
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
            </CurNavContext.Provider>
        </Slide>
    )
}

export default Menu
