import React, { useEffect, useState } from "react";
import { Grid, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Slide, DialogActions, Paper } from "@mui/material";
import Draggable from 'react-draggable';
import { MyTextField } from "../custom/previewComponents";



const DialogMessage = (props) => {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [password, setPassword] = useState('');

    function PaperComponent(props) {
        return (
            <Draggable
                handle="#draggable-dialog-content"
                cancel={'[class*="MuiDialogContent-root"]'}
            >
                <Paper {...props} />
            </Draggable>
        );
    }

    const { OnOpen, OnClose, OnDelete, Message, Title, Content, Password } = props;

    useEffect(() => {

    }, [OnOpen])




    return (

        <Dialog
            
            open={OnOpen}
            // TransitionComponent={Transition}
            PaperComponent={PaperComponent}
            keepMounted
            onClose={OnClose}
            aria-labelledby="draggable-dialog-content"
            aria-describedby="alert-dialog-slide-description"

        >
                <DialogTitle sx={{cursor:"move"}} id="draggable-dialog-content">{Title}</DialogTitle>
            <DialogContent>

                <DialogContentText id="alert-dialog-slide-description">{Content}</DialogContentText>
            </DialogContent>

           
            <DialogActions>
                <Button variant="contained" color="primary" onClick={OnClose} >NO </Button>
                <Button variant="contained" color="error" onClick={OnDelete} >YES </Button>
            </DialogActions>
            {/* <MyTextField
                    initialWidth
                    id="password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    message={validationMessages}
                    sx={{ my: 2, mx: 1, minWidth: "50ch" }}
                    type={passwordVisibility ? "text" : "password"}
                    // inputProps={{
                    //     endAdornment: (
                    //         <InputAdornment position='end'>
                    //             <IconButton onClick={() => setPasswordVisibility(!passwordVisibility)}>
                    //                 <Tooltip title={passwordVisibility ? "Hide Password" : "Show Password"} placement="top">
                    //                     {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                    //                 </Tooltip>
                    //             </IconButton>
                    //         </InputAdornment>
                    //     ),
                    // }}
                /> */}
        </Dialog>
   

    )


}

export default DialogMessage;