import React, { useState } from "react"
import { Top, List } from './listData.style'
import Loading from '@/components/loading/Loading'
import ListItem from './listItem/ListItem'
import classNames from "classnames"

export const ListData = (props) => {
    const { list } = props
    return (
        <>
            <List>
                {
                    list.map((item, index) => (
                        // <ListItem key={item.id} item={item} />
                        <ListItem key={index} item={item} />
                    ))
                }
            </List>
        </>
    )
}

export const ListDataTop = (props) => {
    const [curIndex, setIndex] = useState(0)
    const { mainMenu, handleOnclick } = props
    return (
        <>
            <Top onClick={() => handleOnclick()}>
                <div className="personal-info-card">
                    {
                        mainMenu.length === 0 ? <Loading /> :
                            mainMenu.map((item, index) => {
                                const active = item.id === curIndex
                                return (
                                    <div key={index} onClick={setIndex.bind(null, index)} className={classNames("personal-info-num", active && "personal-info-num--active")}>
                                        {item.text}
                                    </div>
                                )
                            })
                    }
                </div>
            </Top>
        </>
    )
}

