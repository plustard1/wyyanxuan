import * as actionType from './constants.js'
import { reqdetail } from '../../../api/index'

export const changeDetailData = (data) => {
    return {
        type: actionType.CHANGE_DETAIL_DATA,
        data: data
    }
}

export const getDetailData = (id) => {
    return (dispatch) => {
        reqdetail(id)
            .then(data => {
                console.log(data, '---')
                dispatch({
                    type: actionType.CHANGE_DETAIL_DATA,
                    data: data.data
                })
            })
            .catch((e) => {
                console.log('出错了')
            })
    }
}