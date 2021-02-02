
import CartActionTypes from'./cart.types';
import addCartItems from './cart.util';

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
        default: 
            return state;
    }
};

export default CartReducer;