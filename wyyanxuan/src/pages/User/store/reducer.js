import * as actionTypes from './constants';

const defaultstate = {
    userdata: [],
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_USERDATA:
            return {...state, userdata: action.data }
        default:
            return state;
    }
}
export default reducer;