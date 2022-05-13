import React from 'react';
import { Typography, Button, Divider } from '@mui/material';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review'

const stripePromise = loadStripe('pk_test_51Kyb7GSEI0skW8lDgdu5SvV2AAxANjW442OxszhBJp5CJSpObcv3yaAWDtO7UhVbiJQX9OWQiL9GWp746TtP7Qnn00fEX0oQMe')

const PaymentForm = ({ checkoutToken, backStep,onCaptureCheckout, nextStep }) => {

  const handleSubmit = async (event, element, stripe) => {
    event.preventDefault();

    if( !stripe || !element) return;

    const cardElement = elements.getElement(CardElement)

    const{ error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if( error ){
      console.log(error)
    } else {
        const orderData = {
          line_items: checkoutToken.live.line_items,
          customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
          shipping: {
            name: 'Primary',
            street: shippingData.address1,
            town_city: shippingData.city,
            county_state: shippingData.shippingSubdivision,
            postal_zip_code: shippingData.zip,
            country: shippingData.country,
           },
           fulfillment: { shipping_method: shippingData.shippingOption },
           gateway: 'stripe',
           stripe: {
             payment_method_id: paymentMethod.id
           }
        }
        onCaptureCheckout(checkoutToken.id, orderData )
        nextStep()
    }


  }

  return (
    <>
        <Review checkoutToken={checkoutToken} />
        <Divider />
        <Typography variant="h6" gutterBottom style={{ margin: '20px,0'}}>Payment method</Typography>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ element, stripe }) => (
              <form onSubmit={(e) => handleSubmit(e, element, stripe)}>
                <CardElement />
                <br /> <br />
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                  <Button variant="outlined" onClick={backStep}>Back</Button>
                  <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                    Pay { checkoutToken.live.subtotal.formatted_with_symbol }
                  </Button>
                </div>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
    </>
  )
}

export default PaymentForm