import * as actionType from './constants.js'
import { requser } from '../../../api/index'

export const changeUserData = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.CHANGE_USERDATA,
        data: data
    }
}

export const getUserData = () => {
    return (dispatch) => {
        requser()
            .then((res) => {
                console.log(res)
                dispatch(changeUserData(res.data.data))
            })
            .catch(() => {
                console.log('出错了')
            })
    }
}