import * as actionTypes from './constants'
import * as api from './api'

const defaultstate = {
    cartdata: [],
    allMoney: 0,
    isAllSelected: false,
    totalnum: 2
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CARTDATA:
            return {...state, cartdata: action.data }
        case actionTypes.DELETE:
            return {...state, cartdata: api.deleteItem(action.data,state.cartdata),totalnum:api.totalnum(state.cartdata), allMoney:api.allmoney(state.cartdata), isAllSelected:api.allSelected(state.cartdata)}  
        case actionTypes.GOTOCART:
            return {...state, cartdata: api.goToCart_btn(action.data,state.cartdata),totalnum:api.totalnum(state.cartdata)}  
        case actionTypes.CHANGE_LOGO:
            return {...state, cartdata: api.change_logo(action.data,state.cartdata),
                allMoney:api.allmoney(state.cartdata),
                isAllSelected:api.allSelected(state.cartdata)
            }
        case actionTypes.REDUCE_NUM:
            return {...state, cartdata: api.reduce_num(action.data,state.cartdata),allMoney:api.allmoney(state.cartdata), isAllSelected:api.allSelected(state.cartdata),totalnum:api.totalnum(state.cartdata)} 
        case actionTypes.ADD_NUM:
            return {...state, cartdata: api.add_num(action.data,state.cartdata),allMoney:api.allmoney(state.cartdata), isAllSelected:api.allSelected(state.cartdata),totalnum:api.totalnum(state.cartdata)} 
        case actionTypes.CHNANGE_NUM:
            return {...state, cartdata: api.change_num(action.data,state.cartdata),allMoney:api.allmoney(state.cartdata), isAllSelected:api.allSelected(state.cartdata),totalnum:api.totalnum(state.cartdata)} 
        case actionTypes.SELECT_ALL:
            return {...state, cartdata: api.SelectedAll(state.cartdata),
                allMoney:api.allmoney(state.cartdata), isAllSelected:api.allSelected(state.cartdata)
            } 
        default:
            return state;
    }
}
export default reducer;