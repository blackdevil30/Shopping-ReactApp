 export const addCartItems=(cartItems, cartItemsToAdd) => {
    const existingCartItems = cartItems.find(
        cartItems => cartItems.id === cartItemsToAdd.id
    );

    if(existingCartItems){
        return cartItems.map(cartItems => 
           cartItems.id === cartItemsToAdd.id ? 
           {
               ...cartItems, quantity: cartItems.quantity + 1
           }
           : cartItems );
    }
    return [...cartItems, {...cartItemsToAdd, quantity: 1}];
};

export const RemoveCartItems = (cartItems, cartItemToRemove) => {
    const existingCartItems = cartItems.find(cartItems => cartItems.id === cartItemToRemove.id);

    if(existingCartItems.quantity === 1){
        return cartItems.filter(cartItems => cartItems.id !== cartItemToRemove.id);
    }
    return cartItems.map(cartItems => 
        cartItems.id === cartItemToRemove.id ?
        {
            ...cartItems, quantity: cartItems.quantity - 1
        }
        : cartItems);
};
