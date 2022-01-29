import { combineReducers } from 'redux';
import { reducer as mainReducer } from '../pages/Main/store/index'
import { reducer as cateReducer } from '../pages/Cate/store/index'
import { reducer as detailReducer } from  '../pages/details/store/index'
import { reducer as cartReducer } from '../pages/Cart/store/index'
import { reducer as userReducer } from '../pages/User/store/index'


export default combineReducers({
    main: mainReducer,
    cate: cateReducer,
    detail: detailReducer,
    cart: cartReducer,
    user: userReducer
});