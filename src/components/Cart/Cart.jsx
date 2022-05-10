import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

import useStyles from './styles';


const Cart = ({ cart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no item in your shopping cart, start adding some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                { cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} type="button" variant="contained" size="large" color="secondary">Empty cart</Button>
                        <Button className={classes.checkout} type="button" variant="contained" size="large" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
    )

    if(!cart.line_items) return "Loading..."

  return (
    <Container>
        <div style={{padding: '34px 0 0 0'}} />
        <Typography className={classes.title} variant="h3">Your shopping cart</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart;