import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom'


import useStyles from './styles';

function Navbar({ totalItems }){

    const classes = useStyles;
    const location = useLocation();

    return (
        <>
            <AppBar theme={classes.appBar} position='fixed' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '12px 16px' }}  color="inherit">
                <Typography component={Link} to="/" variant='h6' className={classes.title} styles={{flexGrow: 1, alignItems: 'center', display: 'flex', textDecoration: 'none',}} color="inherit">
                    {/* <img src='' alt="logo.png"  height="25px" /> */}
                    AE Commerce 
                </Typography>
                <div className={classes.grow} />
                {location.pathname === '/' && (
                <div className={classes.button} >
                    <IconButton component={Link} to="/cart"  aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </AppBar>
        </>
    );
}

export default Navbar