import * as actionTypes from './constants';

const defaultstate = {
    catedata: [],
    curNav: 0
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.SET_CURNAV:
            return {...state, curNav: action.data }
        case actionTypes.CHANGE_CATEDATA:
            return {...state, catedata: action.data}
        default:
            return state;
    }
}
export default reducer;