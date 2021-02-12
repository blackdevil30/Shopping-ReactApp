import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const stripePaymentPrice = 100 * price;
    const publishableKey = 'pk_test_51I0AeHEi97XsARtFrBdlwTq4Bc1IiYRjIeIoNjUpXTIZLgKgzQMJOGV76EBadevCuy6FbBDovc2damBmys5gNkbo0057tv6fTi'

    const onToken = token => {
        console.log(token);
        alert("payment successful");
    }
return(
     <StripeCheckout
        label= 'Pay Now'
        name= 'Crwn Shop Page'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/en/f3eb2117da'
        description= {`your total is $$ {price}`}
        amount = {stripePaymentPrice}
        panelLabel= 'Pay Now'
        toekn = {onToken}
        stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;