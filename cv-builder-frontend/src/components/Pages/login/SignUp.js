import { Button, Grid, Icon, IconButton, InputAdornment, Tooltip} from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserActions } from '../../../actions/UserActions';
import { Context } from '../../../context/Context';
import { MyTextField } from '../../custom/previewComponents';
import { localStorageHelper } from '../../../helpers/localStorageHelper';
import { Link, useNavigate } from 'react-router-dom';
import AlertMessage from '../../messages/AlertMessage';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { API } from '../../constants/API';

const SignUp = (props) => {

    let navigate = useNavigate();

    const { loggedIn, setLoggedIn } = useContext(Context);

    useEffect(() => {
        if(loggedIn) {
        handleNavigation()
    }
    }, [])

    const [credentials, setCredentials] = useState({
        fullName: "",
        username: "",
        email: "",
        password: ""
    })

    const [validationMessages, setValidationMessages] = useState([]);

    const [messageData, setMessageData] = useState({});

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handleNavigation= () => {
        
            navigate(API.paths.home);
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {

        async function fetchData() {
            let response = await UserActions.SignUpAsync(credentials);
            if (!response.error) {
                if(response.data) {
                    setMessageData({Message: response.data.status});
                    localStorageHelper.SaveItem("AUTH_TOKEN", response.data.user);
                    setLoggedIn(true);
                    handleNavigation();
                }
            }
            else {
                if(response.validationMessages) {
                    setValidationMessages(response.validationMessages);
                }
               
            }   
        }
        fetchData();
    }

    return (
        <Grid container 
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{mt:20}}
        >
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

            <Grid item xs={6} sx={{my:2}}>
                <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ minWidth: "25ch" }} >
                    Sign Up
                </Button>
            </Grid>

            <Grid item xs={6}>
                    <Link to={API.paths.sign_in}>
                            Have an account? Sign In!
                    </Link>
                </Grid>

        </Grid>
    );
};

export default SignUp;