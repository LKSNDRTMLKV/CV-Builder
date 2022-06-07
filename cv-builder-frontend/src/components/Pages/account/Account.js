import { Container, Grid, Button, Typography,IconButton, InputAdornment, Tooltip } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { localStorageHelper } from '../../../helpers/localStorageHelper';
import { MyTextField } from '../../custom/previewComponents';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Account = (props) => {

    const [credentials, setCredentials] = useState({
        fullName: "",
        username: "",
        email: "",
        password: ""
    });

    
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {

    }

    useEffect(() => {
        const currentUser = (localStorageHelper.GetItem("AUTH_TOKEN"));
        setCredentials({
            fullName:currentUser.fullName,
            username:currentUser.username,
            email:currentUser.email,
            password:currentUser.password
        })
    },[])


    return (
        <Container maxWidth="lg">
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
                    // message={validationMessages}
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
                    // message={validationMessages}
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
                    // message={validationMessages}
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
                    // message={validationMessages}
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
                    Save Changes
                </Button>
            </Grid>


            </Grid>
        </Container>
    );
};

export default Account;