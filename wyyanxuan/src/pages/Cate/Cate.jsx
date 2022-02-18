import React, { useState, useEffect, memo, createContext } from "react"
import { connect } from "react-redux"
import * as actionTypes from './store/actionCreators'
import Scroll from '@/baseUI/scroll/index'
import './Cate.css'
import Menu from '@/components/cate/menu/Menu'
import Banner from '@/components/cate/banner/Banner'
import List from '@/components/cate/list/List'


const Cate = (props) => {
    const [curNav, setCurNav] = useState(0)
    const { catedata } = props;
    const { getCateDataDispatch } = props
    const { cateMenu = [], cateList = [] } = catedata

    useEffect(() => {
        if (!catedata.length) {
            getCateDataDispatch()
        }
    }, [])

    return (
            <div className="cate">
                <div className="cate-padding">
                    <Menu cateMenu={cateMenu} curNav={curNav} setCurNav={setCurNav}/>
                    <Scroll direction={"vertical"} refresh={false} className="cate-list"
                        onScroll={(e) => {
                            // console.log(e)
                        }}
                    >
                        <div>
                            <Banner cateList={cateList} curNav={curNav}/>
                            <List cateList={cateList} curNav={curNav}/>
                        </div>
                    </Scroll>
                </div>
            </div>
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
export default connect(mapStateToProps, mapStateToDispatch)(memo(Cate))