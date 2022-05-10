import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import useStyles from './styles';

function Navbar({ totalItems }){

    const classes = useStyles;

    return (
        <>
            <AppBar theme={classes.appBar} position='fixed' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '12px 16px' }}  color="inherit">
                <Typography variant='h6' className={classes.title} color="inherit">
                    {/* <img src='' alt="logo.png"  height="25px" /> */}
                    PPL Commerce
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button} >
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </AppBar>
        </>
    );
}

export default Navbar