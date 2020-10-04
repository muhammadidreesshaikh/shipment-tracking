import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'
// import logo from '../assets/img/logo_465x320.png'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linkColor: {
        color: '#ffffff'
    }
}));

function Header() {

    const classes = useStyles();

    return(
        <div>
            <div className="header">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Shipment Tracking
                        </Typography>

                        <Button color="inherit">
                            <Link className={classes.linkColor} to="/home">Home</Link>
                        </Button>
                        <Button color="inherit">
                            <Link className={classes.linkColor} to="/services">Services</Link>
                        </Button>
                        <Button color="inherit">
                            <Link className={classes.linkColor} to="/about">About</Link>
                        </Button>
                        <Button color="inherit">
                            <Link className={classes.linkColor} to="/contact">Contact</Link>
                        </Button>
                        <Button color="inherit">
                            <Link className={classes.linkColor} to="/login">Login</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}

export default Header;