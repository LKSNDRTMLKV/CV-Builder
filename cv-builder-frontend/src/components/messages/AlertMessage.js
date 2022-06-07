import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@mui/material';
import {  Grow, Slide, Snackbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    spiner: {
      marginTop: 50
    }
  }));

const AlertMessage = (props) => {

    const classes = useStyles();

    const { Loading, Message, HasError, HasInfo } = props;

    const [open, setOpen] = useState(false);
    
    const [snackBarAttributes, setSnackBarAttributes] = useState({
      vertical: 'top',
      horizontal: 'right',
      transition: Grow,
    })
    const {vertical,horizontal,transition} = snackBarAttributes;
  
    
    useEffect(() => {
      if (Message) { 
        setOpen(true);
      }
      else {
        setOpen(false);  
      }
      return () => { setOpen(false); }; 
    }, [Message]);   
  
 
  
    function AlertComponent(props) {
      return (
        <Snackbar className={classes.spiner} anchorOrigin={{vertical, horizontal}} open={open} TransitionComponent={transition} autoHideDuration={5000} key={vertical + horizontal}>
            <Alert elevation={6} variant="filled" {...props} />
        </Snackbar>
      )
    }
  
    const PleaseWait = () => {
      return ""; 
    }
  
    const ShowMessage = () => {
      return (
        open && <AlertComponent severity={HasError ? "error" : HasInfo ? "warning" : "success"}>{Message}</AlertComponent>
      )
    }
  
    if (Loading && !open) { 
      return PleaseWait(); 
    }
    return ShowMessage();
};

export default AlertMessage;