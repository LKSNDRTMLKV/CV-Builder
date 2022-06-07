import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const ControlExtraSections = (props) => {

    const handleExtraSections = (param) => {
        console.log(props.extraSections)
    }



    return (
        <Grid container direction="row">
            <Grid item xs={12}>
                <Typography variant={"h5"} style={{ fontWeight: "bold" }} >Add Sections</Typography>
            </Grid>

            <Grid item md={6} xs={12}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Button
                            variant="contained" color="info" sx={{my:1}}
                            onClick={() => props.setExtraSections(prevState => ({ ...prevState, courses: !props.extraSections.courses }))}>
                            {props.extraSections.courses ? "Remove" : "Add"} Courses
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained" color="info" sx={{my:1}}
                            onClick={() => props.setExtraSections(prevState => ({ ...prevState, internships: !props.extraSections.internships }))}>
                            {props.extraSections.internships ? "Remove" : "Add"} Internships
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained" color="info" sx={{my:1}}
                            onClick={() => props.setExtraSections(prevState => ({ ...prevState, references: !props.extraSections.references }))}>
                            {props.extraSections.references ? "Remove" : "Add"} References
                        </Button>
                    </Grid>
                </Grid>



            </Grid>
            <Grid item md={6} xs={12}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Button
                            variant="contained" color="info" sx={{my:1}}
                            onClick={() => props.setExtraSections(prevState => ({ ...prevState, custom: !props.extraSections.custom }))}>
                            {props.extraSections.custom ? "Remove" : "Add"} Custom
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained" color="info" sx={{my:1}}
                            onClick={() => props.setExtraSections(prevState => ({ ...prevState, hobbies: !props.extraSections.hobbies }))}>
                            {props.extraSections.hobbies ? "Remove" : "Add"} Hobbies
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained" color="info" sx={{my:1}}
                            onClick={() => props.setExtraSections(prevState => ({ ...prevState, languages: !props.extraSections.languages }))}>
                            {props.extraSections.languages ? "Remove" : "Add"} Languages
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Button onClick={handleExtraSections}>Log Sections</Button>
        </Grid>
    );
};

// courses: false,
//         internships: false,
//         references: false,
//         custom: false,
//         hobbies: false,
//         languages: false,

export default ControlExtraSections;