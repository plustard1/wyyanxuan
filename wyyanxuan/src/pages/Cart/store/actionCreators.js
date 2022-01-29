import * as actionType from './constants.js'
import { reqcart } from '@/api/index'

export const changeCartData = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.CHANGE_CARTDATA,
        data: data
    }
}

export const changeLogo = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionType.CHANGE_LOGO,
            data: data
        })
    }
}

export const reduce_num = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionType.REDUCE_NUM,
            data: data
        })
    }
}

export const add_num = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionType.ADD_NUM,
            data: data
        })
    }
}

export const change_num = (num,id) => {
    return (dispatch) => {
        dispatch({
            type: actionType.CHNANGE_NUM,
            data: {num,id}
        })
    }
}

export const select_all = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionType.SELECT_ALL,
            data: data
        })
    }
}

export const allmoney = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionType.ALL_MONEY,
            data: data
        })
    }
}

// 从详情页去到购物车页
export const goToShoppingCart = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionType.GOTOCART,
            data: data
        })
    }
}


export const delete_btn = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionType.DELETE,
            data: data
        })
    }
}

export const getCartData = () => {
    return (dispatch) => {
        reqcart()
            .then((res) => {
                console.log(res)
                dispatch(changeCartData(res.data.data))
            })
            .catch(() => {
                console.log('出错了')
            })
    }
}