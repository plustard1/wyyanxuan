import * as actionType from './constants.js'
import { reqcate } from '../../../api/index'

//cate数据
export const changeCateData = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.CHANGE_CATEDATA,
        data: data
    }
}

export const setCurNav = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.SET_CURNAV,
        data: data
    }
}

export const getCateData = () => {
    return (dispatch) => {
        reqcate()
            .then((res) => {
                console.log(res)
                dispatch(changeCateData(res.data.data))
            })
            .catch(() => {
                console.log('出错了')
            })
    }
}