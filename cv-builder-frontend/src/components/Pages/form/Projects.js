import { Grid, Tooltip, IconButton, Button, Typography, Divider } from '@mui/material';
import React from 'react';
import { MyTextField } from '../../custom/previewComponents';
import DeleteIcon from '@mui/icons-material/Delete';

const Projects = (props) => {

    return (
        <>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant={"h5"} style={{ fontWeight: "bold" }} >Projects</Typography>
                    </Grid>

                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                        <Button variant='contained' color="info" onClick={props.addProject}>Add Projects</Button>
                    </Grid>
                </Grid>


            </Grid>
            {props.projects.map((pro, idx) => {
                return (
                    <Grid key={idx}>
                        <Grid container columnSpacing={4} >
                            <Grid item xs={12} >
                                <MyTextField
                                    id={idx.toString()}
                                    label="Title"
                                    name="projectTitle"
                                    value={pro.projectTitle}
                                    onChange={props.handleChange}
                                    inputProps={{
                                        endAdornment: (
                                            <Tooltip onClick={() => props.removeProject(idx)} title="Delete Project" placement='top'>
                                                <IconButton>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        )
                                    }}
                                />
                            </Grid>

                            


                            <Grid item xs={12}>
                                <MyTextField
                                    id={(idx).toString()}
                                    label="Description"
                                    name="eduDesc"
                                    value={pro.projectDesc}
                                    onChange={props.handleChange}
                                    multiline={5}
                                />
                            </Grid>



                        </Grid>
                    </Grid>
                )
            })}


        </>
    );
};

export default Projects;