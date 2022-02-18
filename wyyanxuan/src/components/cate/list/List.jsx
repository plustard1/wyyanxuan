import React from "react"
import classNames from "classnames"
import Loading from '@/components/loading/Loading'
import { ListContent } from './List.style.js'

const List = (props) => {
    const { cateList, curNav } = props
    return (
        <ListContent>
                <div className="cate-list_wrap">
                    {
                        cateList.length === 0 ? <Loading /> :
                            cateList[curNav].list.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="cate-list__title">
                                            <p className="cate-list__title-text">{item.title}</p>
                                        </div>
                                        <div className="cate-list__group-box">
                                            {
                                                item.subList.map((item, index) => {
                                                    return (
                                                        <div key={index} className={classNames('cate-list__item', { 'cate-list__item--right': (index + 1) % 3 === 0 })}>
                                                            <img src={item.img} className="cate-list__group-img" />
                                                            <div className="cate-list__item-text-wrap">
                                                                <p className="cate-list__item-text">{item.text}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
        </ListContent>
    )
}

export default List