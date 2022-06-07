import React, {useState} from 'react';
import { TextField, Chip, Slider, Select, FormControl, InputLabel,MenuItem, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';



export const MyTextField = (props) => {
    const useStyles = makeStyles((theme) => ({
        helperText: {
            position:'absolute',
            bottom:-20
        }
    }))
    
    const classes = useStyles();
    
    let hasError = false;
    let message = "";
    
    let errorCollention = props.message || "";
    if(errorCollention !== null  && errorCollention.length > 0) {
        let currentOption = errorCollention.find(x => x.id === props.id);
        if(currentOption!== null && currentOption !== undefined) {
            hasError = true;
            message = currentOption.message
        }
    }
    

    

    return (
        <TextField
        variant="outlined"
        fullWidth={!props.initialWidth ? true : false}
        id={props.id}
        label={props.label}
        name={props.name}
        InputProps={props.inputProps}
        onChange={props.onChange}
        value={props.value || ""}
        error={hasError}
        sx={props.sx ? props.sx : {my:2}}
        helperText={message || ""}
        multiline={props.multiline ? true : false }
        rows={props.multiline ? props.multiline : 1}
        contentEditable={props.onEdit}
        color={props.color}
        // defaultValue=""
        type={props.type || "text"}
        FormHelperTextProps={{
            className:classes.helperText
        }}
        

        />
    );
};

export const MyChip = (props) => {
    let id = props.id;

    return (
        <Chip
        id={id}
        label={props.label}
        sx={{py:3, px:4, m:1}}
        clickable
        />
    )


};

export const MySlider = (props) => {
    return (
        <Slider 
        id={props.id}
        name={props.name}
        value={props.value}
        min={1}
        max={5}
        marks
        step={5}
        sx={{my:3}}
        disabled={props.disabled ? props.disabled : null}
        onChange={props.onChange}
        aria-label="Default"
        
        />
    )
}

export const MySelect = (props) => {
    const [onLabel, setOnLabel] = useState(false);
    return(
        <Grid sx={{position:"relative"}}>
            <InputLabel id={props.id} >{props.label}</InputLabel>
            <Select

                fullWidth
                id={props.id}
                name={props.name}
                labelId={props.id}
                label={props.label}
                value={props.value ? props.value : ""}
                onChange={props.onChange}
                // onClick={() => setOnLabel(true)}
                // onBlur={() => setOnLabel(false)}
                sx={{my:1}}
                >
                {props.menuitems.map((items,idx) => {
                    return(
                        <MenuItem key={idx} value={items}>{items}</MenuItem>
                    )
                })}
    
            </Select>
        </Grid>
    )
    }

 
    