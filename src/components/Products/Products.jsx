import React from 'react';
import { Grid } from '@mui/material';
import Product from './Product/Product';
import { createTheme } from '@mui/material/styles'

// import useStyles from './styles';


const Products = ({ products, onAddToCart }) => {

    // const theme = createTheme((theme) => ({
    //     toolbar: theme.mixins.toolbar,
    //     content: {
    //         flexGrow: 1,
    //         backgroundColor: theme.palette.background.default,
    //         padding: theme.spacing(3),
    //     },
    //     root: {
    //         flexGrow: 1,
    //     },
    // }));

    // const classes = useStyles();

    

  return (
    <main style={{padding: '70px 0 12px 0',}} >
        <div />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products;