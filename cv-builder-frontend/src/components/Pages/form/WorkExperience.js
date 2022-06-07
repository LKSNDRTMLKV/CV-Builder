import React, { useContext, useState } from 'react';
import { Button, Divider, Grid, InputAdornment, MenuItem, Select, TextField, Typography, Tooltip, IconButton } from '@mui/material';
import { MyTextField } from '../../custom/previewComponents';
import DeleteIcon from '@mui/icons-material/Delete';

const WorkExperience = (props) => {


    return (
        <Grid container direction="column">

            <Grid container direction="row">
                <Grid item xs={6}>
                <Typography variant={"h5"} style={{ fontWeight: "bold" }} >Work Experience</Typography>
                </Grid>
                <Grid item xs={6} sx={{textAlign:"right"}}>
                <Button variant='contained' color="info" onClick={props.addWorkExperience}>Add Work Experience</Button>
                </Grid>
            </Grid>

            {/* <Typography variant={"h5"} style={{ fontWeight: "bold" }} >Work Experience</Typography>

            <Grid item xs={12} sx={{ my: 2, textAlign:"right" }}>
                <Button variant='contained' color="info" onClick={props.addWorkExperience}>Add Work Experience</Button>
            </Grid> */}


            {props.workExperience.map((work, idx) => {
                return (
                    <Grid key={idx}>
                        <Grid container direction="row" sx={{my:1}}>
                            <Grid item xs={10}>
                                <Typography variant="h6">Section {idx + 1}</Typography>

                            </Grid>
                            <Grid item xs={1} sx={{ml:"auto", mr:2}}>
                                <Tooltip onClick={() => props.removeWorkExperience(idx)} title="Delete Section" placement='top' >
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>


                        <Grid container columnSpacing={4}>
                            <Grid item xs={6}>
                                <MyTextField
                                    id={(idx).toString()}
                                    label="Position"
                                    name="position"
                                    value={work.position}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <MyTextField
                                    id={(idx).toString()}
                                    label="Company"
                                    name="company"
                                    value={work.company}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <MyTextField
                                    id={(idx).toString()}
                                    label="Date"
                                    name="date"
                                    value={work.date}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <MyTextField
                                    id={(idx).toString()}
                                    label="City"
                                    name="city"
                                    value={work.city}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <MyTextField
                                id={(idx).toString()}
                                label="Description"
                                name="description"
                                value={work.description}
                                onChange={props.handleChange}
                                multiline={5}
                            />
                        </Grid>





                        <Divider sx={{my:2}}/>
                    </Grid>
                )
            })}

        </Grid>
    )


}

export default WorkExperience;