
import CartActionTypes from'./cart.types';
import {addCartItems, RemoveCartItems} from './cart.util';

const INITIAL_STATE = {
    hidden: true,
    cartItem: []
}

const CartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){ 
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
               cartItem: addCartItems(state.cartItem , action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItem: state.cartItem.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItem: RemoveCartItems(state.cartItem, action.payload)
            };
        default: 
            return state;
    }
};

export default CartReducer;