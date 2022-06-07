import React from 'react';
import { Card, Button, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        border: "2px solid rgba(0,0,0,0.25)",
        minHeight: "30rem",
        position: "relative",
        padding: 4
    },
    button: {
        border: "rgba(0,0,0,0.25)!important",
        borderRadius: "50%!important",
        fontSize: 24,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    }
}))

const MyCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
             {/* <Typography variant="h6">{props.header}</Typography>
                <Typography variant="p">{props.text}</Typography>
            <Button 
            className={classes.button} 
            variant="outlined" 
            size="large" 
            onClick={props.handleClick}  
            >+</Button> */}
            {props.template}
        </Card>
    );
};

export default MyCard;