 const addCartItems=(cartItems, cartItemsToAdd) => {
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
} 

export default addCartItems;