import * as actionTypes from './constants';

const defaultstate = {
    maindata: [],
    index: 0
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.SET_INDEX:
            return {...state, index: action.data }
        case actionTypes.CHANGE_MAINDATA:
            return {...state, maindata: action.data }
        default:
            return state;
    }
}
export default reducer;