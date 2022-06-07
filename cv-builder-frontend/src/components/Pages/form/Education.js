import { Grid, Tooltip, IconButton, Button, Typography, Divider } from '@mui/material';
import React from 'react';
import { MyTextField } from '../../custom/previewComponents';
import DeleteIcon from '@mui/icons-material/Delete';

const Education = (props) => {
    return (
        <>
            <Grid item xs={12}>
                <Typography variant={"h5"} style={{ fontWeight: "bold" }} >Education</Typography>
                <Grid item xs={12} sx={{ my: 2, textAlign:"right" }}>
                <Button variant='contained' color="info" onClick={props.addEducation}>Add Education</Button>
            </Grid>
            </Grid>
            {props.education.map((edu, idx) => {
                return(
                <Grid key={idx}>
                    <Grid container direction="row">
                            <Grid item xs={10}>
                                <Typography variant="h6">Section {idx + 1}</Typography>

                            </Grid>
                            <Grid item xs={1} sx={{ml:"auto"}}>
                                <Tooltip onClick={() => props.removeEducation(idx)} title="Delete Section" placement='top' sx={{ml:"auto"}}>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>

            

                <Grid container columnSpacing={4} >
                    <Grid item xs={6} >
                        <MyTextField
                            id={idx.toString()}
                            label="School"
                            name="school"
                            value={edu.school}
                            onChange={props.handleChange}
                        />
                    </Grid>

                    <Grid item xs={6} >
                        <MyTextField
                            id={idx.toString()}
                            label="Degree"
                            name="degree"
                            value={edu.degree}
                            onChange={props.handleChange}
                        />
                    </Grid>

                    <Grid item xs={6} >
                        <MyTextField
                            id={idx.toString()}
                            label="Start & End Dates"
                            name="eduDates"
                            value={edu.eduDates}
                            onChange={props.handleChange}
                        />
                    </Grid>

                    <Grid item xs={6} >
                        <MyTextField
                            id={idx.toString()}
                            label="City"
                            name="eduCity"
                            value={edu.eduCity}
                            onChange={props.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MyTextField
                            id={(idx).toString()}
                            label="Description"
                            name="eduDesc"
                            value={edu.eduDesc}
                            onChange={props.handleChange}
                            multiline={5}
                        />
                    </Grid>

                    

                </Grid>
                </Grid>
            )})}


        </>
    );
};

export default Education;

