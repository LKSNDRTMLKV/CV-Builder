import { Container, Grid, Button, Typography, IconButton, InputAdornment, Tooltip,Dialog, DialogContent, DialogContentText, DialogTitle,DialogActions, Slide } from '@mui/material';
import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../../context/Context';
import { localStorageHelper } from '../../../helpers/localStorageHelper';
import { MyTextField } from '../../custom/previewComponents';
import { SetMealSharp, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useInRouterContext, useNavigate } from 'react-router-dom';
import { API } from '../../constants/API';
import { UserActions } from '../../../actions/UserActions';
import axios from 'axios';
import { restHelper } from '../../../helpers/restHelper';
import { UserServices } from '../../../services/UserServices';
import AlertMessage from '../../messages/AlertMessage';
import DialogMessage from '../../messages/DialogMessage';

const Account = (props) => {

    let navigate = useNavigate();

    const { loggedIn, setLoggedIn } = useContext(Context);

    const currentUser = localStorageHelper.GetItem("AUTH_TOKEN");

    const [onLoad, setOnLoad] = useState(false);

    const [credentials, setCredentials] = useState({
        id: "",
        fullName: "",
        username: "",
        email: "",
        password: ""
    });


    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const [validationMessages, setValidationMessages] = useState([]);

    const [messageData, setMessageData] = useState({});

    const [onDialog,setOnDialog] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
        setMessageData({})
        setValidationMessages([]);
    }

    const handleSubmit = (e) => {
        async function fetchData() {
            let response = await UserActions.UpdateUserAsync(credentials);
            if (!response.error) {
                if (!response.data.error) {
                    setValidationMessages([]);
                    setMessageData({ Message: response.data.status });
                    localStorageHelper.SaveItem("AUTH_TOKEN", response.data.user);
                    setOnLoad(true);
                }
                else {

                }
            }
            else {
                if (response.validationMessages) {
                    setValidationMessages(response.validationMessages);
                    console.log(response.validationMessages)
                }
                setMessageData({ HasError: true, Message: response.error_description })
            }

        }
        fetchData();
    }

    const handleDialog = () => {
        setOnDialog(!onDialog);
    }

    const handleDeleteUser = () => {
        async function fetchData() {
            let response = await UserActions.DeleteUserAsync(currentUser.id)
            if(!response.error) {
                console.log(response)
                setMessageData({Message:response.data.status})
                localStorageHelper.RemoveItem("AUTH_TOKEN");
                setTimeout(() => {
                    setLoggedIn(false);
                    setOnLoad(true);
                }, 2000);
            }
            else{
                setMessageData({Message:response.status})
            }
        }
        fetchData();
    }

    const Transition = React.forwardRef(function Transition(props,ref) {
        return <Slide direction="up" ref={ref}{...props} />
    })


    useEffect(() => {
        
        async function fetchData() {
            let response = await UserActions.GetUserAsync(currentUser.id)
            setCredentials({
                id: response.data._id,
                fullName: response.data.fullName,
                username: response.data.username,
                email: response.data.email,
                password: ""
            })
        }
        if (!loggedIn) {
            navigate(API.paths.sign_in);
        }
        else {
            fetchData();
        }
    }, [onLoad])





    


    return (
        <Grid container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 20 }}
        >

            <AlertMessage {...messageData} />

            <Grid item xs={12}>
                <MyTextField
                    initialWidth
                    id="fullName"
                    label="Full Name"
                    name="fullName"
                    value={credentials.fullName}
                    onChange={handleChange}
                    message={validationMessages}
                    sx={{ my: 2, mx: 1, minWidth: "50ch" }}
                />

            </Grid>
            <Grid item xs={12}>
                <MyTextField
                    initialWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    message={validationMessages}
                    sx={{ my: 2, mx: 1, minWidth: "50ch" }}
                />

            </Grid>
            <Grid item xs={12}>
                <MyTextField
                    initialWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    value={credentials.email}
                    onChange={handleChange}
                    message={validationMessages}
                    sx={{ my: 2, mx: 1, minWidth: "50ch" }}
                />

            </Grid>

            <Grid item xs={12}>
                <MyTextField
                    initialWidth
                    id="password"
                    label="Password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    message={validationMessages}
                    sx={{ my: 2, mx: 1, minWidth: "50ch" }}
                    type={passwordVisibility ? "text" : "password"}
                    inputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton onClick={() => setPasswordVisibility(!passwordVisibility)}>
                                    <Tooltip title={passwordVisibility ? "Hide Password" : "Show Password"} placement="top">
                                        {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                                    </Tooltip>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

            </Grid>

            <Grid item xs={12}>


            <Grid container

                alignItems="center"
                justifyContent="center"
                direction="row"
                wrap='nowrap'
                >
                

              <Grid item xs={6} sx={{ my: 2, p:2 }}>
                    <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ minWidth: "20ch", p:1 }} >
                        Save Changes
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{ my: 2, p:2 }}>
                    <Button variant="contained" color="error" onClick={handleDialog} sx={{ minWidth: "20ch", p:1 }} >
                        Delete Account
                    </Button>
                </Grid>
              </Grid>

              <Button onClick={handleDeleteUser}>Test Delete</Button>

              

                <DialogMessage
                    OnOpen={onDialog}
                    OnClose={handleDialog}
                    OnDelete={() => {
                        handleDeleteUser()
                        handleDialog()
                    }}
                    Message="Delete"
                    Title="Are you sure you want to delete your account?"
                    Content="Deleting your account will cause losing your work and cannnot be undone"
                    Password={  <MyTextField
                        initialWidth
                        id="password"
                        label="Password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        message={validationMessages}
                        sx={{ my: 2, mx: 1, minWidth: "50ch" }}
                        type={passwordVisibility ? "text" : "password"}
                        inputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton onClick={() => setPasswordVisibility(!passwordVisibility)}>
                                        <Tooltip title={passwordVisibility ? "Hide Password" : "Show Password"} placement="top">
                                            {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                                        </Tooltip>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />}
                />
                 {/* <Dialog
                open={onDialog}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleDialog}
                >
                <DialogContent>
                    <DialogTitle sx={{px:0}}>Are you sure you want to delete your account?</DialogTitle>

                    <DialogContentText sx={{fontWeight:"bold"}}>Deleting your account will cause losing your work and cannot be undone!</DialogContentText>
                </DialogContent>
              
                <DialogActions>
                <Button variant="contained" color="primary" onClick={handleDialog} >NO </Button>
                <Button variant="contained" color="error" onClick={handleDialog } >YES </Button>
                </DialogActions>
            </Dialog> */}

            </Grid>
                </Grid>

       




    );
};

export default Account;