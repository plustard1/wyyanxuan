import * as actionTypes from './constants';

const defaultstate = {
    detaildata: []
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL_DATA:
            return {
                ...state,
                detaildata: action.data
            }
        default:
            return state
    }
}
export default reducer