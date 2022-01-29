import React, { useState, useEffect, createContext } from "react"
import { connect } from "react-redux"
import * as actionTypes from './store/actionCreators'
import Scroll from '@/baseUI/scroll/index'
import './Cate.css'
import Menu from '@/components/cate/menu/Menu'
import Banner from '@/components/cate/banner/Banner'
import List from '@/components/cate/list/List'

export const CurNavContext = createContext()

const Cate = (props) => {
    const [curNav, setCurNav] = useState(0)
    const { catedata } = props;
    const { getCateDataDispatch } = props
    console.log(catedata);
    const { cateMenu = [], cateList = [] } = catedata

    useEffect(() => {
        if (!catedata.length) {
            getCateDataDispatch()
        }
    }, [])

    return (
        <CurNavContext.Provider value={{ curNav, setCurNav }}>
            <div className="cate">
                <div className="cate-padding">
                    <Menu cateMenu={cateMenu} />
                    <Scroll direction={"vertical"} refresh={false} className="cate-list"
                        onScroll={(e) => {
                            // console.log(e)
                        }}
                    >
                        <div>
                            <Banner cateList={cateList} />
                            <List cateList={cateList} />
                        </div>
                    </Scroll>
                </div>
            </div>
        </CurNavContext.Provider>
    )
}

const mapStateToDispatch = (dispatch) => {
    return {
        getCateDataDispatch() {
            dispatch(actionTypes.getCateData())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        catedata: state.cate.catedata
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(Cate)