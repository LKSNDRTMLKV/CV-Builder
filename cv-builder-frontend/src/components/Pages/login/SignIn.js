
import { Button, Grid, Icon, IconButton, InputAdornment, Tooltip } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../context/Context';
import { API } from '../../constants/API';
import { MyTextField } from '../../custom/previewComponents';
import { UserActions } from '../../../actions/UserActions';
import { localStorageHelper } from '../../../helpers/localStorageHelper';
import { Link, useNavigate } from 'react-router-dom';
import AlertMessage from '../../messages/AlertMessage';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignIn = (props) => {

    let navigate = useNavigate();

    const {  loggedIn, setLoggedIn } = useContext(Context);

    useEffect(() => {
        if(loggedIn) {
           handleNavigation();
        }
    }, [])



    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })

    const [messageData, setMessageData] = useState({});

    const [validationMessages, setValidationMessages] = useState([]);

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handleNavigation = () => {
            navigate(API.paths.dashboard);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
        setMessageData({});
    }

    const handleLogin = () => {

        async function fetchData() {
            let response = await UserActions.SignInAsync(credentials);
            if (!response.error) {
                if (!response.data.error) {
                    setMessageData({ Message: response.data.status });
                    localStorageHelper.SaveItem("AUTH_TOKEN", response.data.user);
                    setLoggedIn(true);
                    handleNavigation();

                }
                else {
                    setMessageData({ Message: response.data.error, HasError: true });

                }
            }
            else {
                console.log(response)
                if (response.validationMessages) {
                    setValidationMessages(response.validationMessages)

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
            <AlertMessage {...messageData} />

            <Grid item xs={12} >
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

            
                <Grid item xs={6} sx={{ my: 2 }}>
                    <Button variant='contained' color="primary" onClick={handleLogin} sx={{ minWidth: "25ch" }}>
                        Login
                    </Button>

                </Grid>

                <Grid item xs={6}>
                    <Link to={API.paths.sign_up}>
                            Not registered? Sign Up!
                    </Link>
                </Grid>
            



        </Grid>


    );
};

export default SignIn;

