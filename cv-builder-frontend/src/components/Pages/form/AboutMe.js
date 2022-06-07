import {  Avatar, Button, Collapse, Divider, Fab, Grid, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import { MyTextField } from '../../custom/previewComponents';
import { Email, Phone, LocationOn, LinkedIn, UploadFileRounded } from '@mui/icons-material';
import { DropzoneArea, DropzoneDialog } from 'material-ui-dropzone';




const AboutMe = (props) => {

    const [onAdditional, setOnAdditional] = useState(false);

    const handleImageUpload = () => {

    }


    return (
        <Grid container direction="row" columnSpacing={4}>



                    <Grid item md={6} xs={12} >
                        <Grid container direction="row" columnSpacing={4} >
                            <Grid item xl={6} md={12} sm={6} xs={12}>
                                <MyTextField
                                    id="fullName"
                                    name="fullName"
                                    label="Full Name"
                                    value={props.record.fullName}
                                    onChange={props.handleChange}
                                />
                            </Grid>

                            <Grid item xl={6} md={12} sm={6} xs={12}>
                                <MyTextField
                                    id="profTitle"
                                    name="profTitle"
                                    label="Proffesional Title"
                                    value={props.record.profTitle}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <MyTextField
                                    id="aboutMe"
                                    name="aboutMe"
                                    label="About Me"
                                    value={props.record.aboutMe}
                                    onChange={props.handleChange}
                                    multiline={4}
                                // lines={5}
                                />
                            </Grid>

                        </Grid>
                    </Grid>


                    

                    {/* <Grid item md={3} xs={12}>
                        <Grid container>
                            <Grid item xs={12} >
                                
                                
                            </Grid>
                        </Grid>
                    </Grid> */}



                   
                    <Grid item md={6} xs={12} >

                        <Grid container direction="row" columnSpacing={4}>
                            <Grid item xl={6} md={12} sm={6} xs={12}>
                                <MyTextField
                                    id="email"
                                    name="email"
                                    label="E-mail"
                                    value={props.record.email}
                                    onChange={props.handleChange}
                                    inputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xl={6} md={12} sm={6} xs={12}>
                                <MyTextField
                                    id="phone"
                                    name="phone"
                                    label="Phone Number"
                                    value={props.record.phone}
                                    onChange={props.handleChange}
                                    inputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Phone />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xl={6} md={12} sm={6} xs={12}>
                                <MyTextField
                                    id="location"
                                    name="location"
                                    label="Location"
                                    value={props.record.location}
                                    onChange={props.handleChange}
                                    inputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                 <LocationOn />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                            </Grid>

                            <Grid item xl={6} md={12} sm={6} xs={12}>
                                <MyTextField
                                    id="social"
                                    name="social"
                                    label="LinkedIn"
                                    value={props.record.social}
                                    onChange={props.handleChange}
                                    inputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                 <LinkedIn />
                                            </InputAdornment>
                                        ),
                                    }}
                                />


                            </Grid>

                            <Grid item xs={12}>
                                
                            </Grid>

                        </Grid>

                    </Grid>

                    
                    

                    <Grid item xs={12}>
                    <Divider sx={{my:2}} />
                        <Button variant="contained" sx={{mb:2}} onClick={() => setOnAdditional(!onAdditional)}>{onAdditional ?  "Remove" : "Add"} Additional Details</Button>
                    
                    </Grid>
                        {onAdditional && 
                        <>
                        

                        <Grid item md={6} xs={12} >
                        <Grid container direction="row" columnSpacing={4}>
                            <Grid item xl={6} md={12} sm={6} xs={12}>
                            <MyTextField 
                            id="country"
                            name="country"
                            label="Country"
                            value={props.additionalInfo.country}
                            onChange={props.handleChange}
                            />
                            </Grid>

                            <Grid item xl={6} md={12} sm={6} xs={12}>
                            <MyTextField 
                            id="address"
                            name="address"
                            label="Address"
                            value={props.additionalInfo.address}
                            onChange={props.handleChange}
                            />
                            </Grid>

                            <Grid item xl={6} md={12} sm={6} xs={12}>
                            <MyTextField 
                            id="birthPlace"
                            name="birthPlace"
                            label="Birth Place"
                            value={props.additionalInfo.birthPlace}
                            onChange={props.handleChange}
                            />
                            </Grid>

                            <Grid item xl={6} md={12} sm={6} xs={12}>
                            <MyTextField 
                            id="driving"
                            name="driving"
                            label="Driving License"
                            value={props.additionalInfo.driving}
                            onChange={props.handleChange}
                            />
                            </Grid>
                          
                        </Grid>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Grid container direction="row" columnSpacing={4}>
                            <Grid item  xl={6} md={12} sm={6} xs={12}>
                            <MyTextField 
                            id="from"
                            name="from"
                            label="City"
                            value={props.additionalInfo.from}
                            onChange={props.handleChange}
                            />
                            </Grid>

                            <Grid item  xl={6} md={12} sm={6} xs={12}>
                            <MyTextField 
                            id="postal"
                            name="postal"
                            label="Postal Code"
                            value={props.additionalInfo.postal}
                            onChange={props.handleChange}
                            />
                            </Grid>

                            <Grid item  xl={6} md={12} sm={6} xs={12}>
                            <MyTextField 
                            id="nationality"
                            name="nationality"
                            label="Nationality"
                            value={props.additionalInfo.nationality}
                            onChange={props.handleChange}
                            />
                            </Grid>

                            <Grid item  xl={6} md={12} sm={6} xs={12}>
                            <MyTextField 
                            id="birthDate"
                            name="birthDate"
                            label="Birth Date"
                            value={props.additionalInfo.birthDate}
                            onChange={props.handleChange}
                            />
                            </Grid>
                            
                          
                        </Grid>
                    </Grid>
                        
                        </>
                        
                        }
                    


                        
                     

                </Grid>
    );
};

export default AboutMe;