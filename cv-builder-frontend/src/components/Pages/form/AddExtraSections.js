import React, { useState } from 'react';
import { Button, Divider, Grid, IconButton, Slider, Switch, Tooltip, Typography } from '@mui/material';
import { MySelect, MyTextField } from '../../custom/previewComponents';
import DeleteIcon from '@mui/icons-material/Delete';


const AddExtraSections = (props) => {


    const [showLevel, setShowLevel] = useState(true);

    const handleLabelFormat = (idx) => {
        const levels = ["Sufficient working knowledge", "Good working knowledge", "Very good command", "Highly proficient", "Native Speaker",];

        return levels[idx - 1]
    }

    // const handleLevelChange = (e) => {
    //     const {name,value} = e.target;
    //     setLangLevel(value);

    // }

    let someExtraSection = props.extraSections.courses ||
        props.extraSections.internships ||
        props.extraSections.references ||
        props.extraSections.custom ||
        props.extraSections.hobbies ||
        props.extraSections.languages;



    return (
        <Grid container direction="row" columnSpacing={4}>
            {someExtraSection === true &&
                <Divider sx={{ my: 2 }} />}



            <Grid item md={6} xs={12}>
                <Grid container direction="column">



                    {/* Courses */}
                    {props.extraSections.courses &&
                        <Grid item xs={12}>
                            {/* <Divider sx={{ my: 2 }} /> */}
                            <Typography variant="h5" style={{ fontWeight: "bold" }}>Courses</Typography>
                            {props.sections.courses.map((course, idx) => {
                                return (
                                    <Grid key={idx}>
                                        <Typography variant="h6">Course {idx + 1}</Typography>
                                        <Grid container columnSpacing={4}>
                                            <Grid item xs={8}>
                                                <MyTextField
                                                    id={(idx).toString()}
                                                    label="Course"
                                                    name="course"
                                                    value={course.course}
                                                    onChange={props.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <MyTextField
                                                    id={(idx).toString()}
                                                    label="Institution"
                                                    name="institution"
                                                    value={course.institution}
                                                    onChange={props.handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <MyTextField
                                                    id={(idx).toString()}
                                                    label="Date"
                                                    name="cDate"
                                                    value={course.cDate}

                                                    onChange={props.handleChange}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}

                        </Grid>
                    }

                    {/* Internships */}
                    {props.extraSections.internships &&
                        <Grid item xs={12}>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h5" style={{ fontWeight: "bold" }}>Internships</Typography>
                            {props.sections.internships.map((internships, idx) => {
                                return (
                                    <Grid key={idx}>
                                        <Grid container columnSpacing={4}>

                                            <Grid item xs={6}>
                                                <MyTextField
                                                    id={(idx).toString()}
                                                    label="Position"
                                                    name="iPosition"
                                                    value={internships.iPosition}
                                                    onChange={props.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <MyTextField
                                                    id={(idx).toString()}
                                                    label="Company"
                                                    name="iCompany"
                                                    value={internships.iCompany}
                                                    onChange={props.handleChange}
                                                />
                                            </Grid>


                                            <Grid item xs={6}>
                                                <MyTextField
                                                    id={(idx).toString()}
                                                    label="Date"
                                                    name="iDate"
                                                    value={internships.iDate}
                                                    onChange={props.handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <MyTextField
                                                    id={(idx).toString()}
                                                    label="City"
                                                    name="iCity"
                                                    value={internships.iCity}
                                                    onChange={props.handleChange}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}

                        </Grid>
                    }

                    {/* References */}
                    {props.extraSections.references &&
                        <Grid item xs={12}>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h5" style={{ fontWeight: "bold" }}>References</Typography>
                            {props.sections.references.map((references, idx) => {
                                return (
                                    <Grid key={idx}>
                                        <MyTextField
                                            id={(idx).toString()}
                                            label="References"
                                            name="references"
                                            value={references}
                                            onChange={props.handleChange}
                                        />
                                    </Grid>
                                )
                            })}

                        </Grid>

                    }



                </Grid>
            </Grid>

            <Grid item md={6} xs={12}>
                <Grid container direction="column">
                    {/* Custom */}
                    {/* //////////// */}



                    {/* Hobbies  */}
                    {props.extraSections.hobbies &&
                        <Grid item xs={12}>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h5" style={{ fontWeight: "bold" }}>Hobbies</Typography>
                            {props.sections.hobbies.map((hobbies, idx) => (
                                <Grid key={idx}>
                                    <MyTextField
                                        id={idx.toString()}
                                        label="Hobbies"
                                        name="hobbies"
                                        value={hobbies}
                                        onChange={props.handleChange}
                                    />
                                </Grid>
                            ))}


                        </Grid>
                    }

              
                    {props.extraSections.languages &&
                        <Grid item xs={12}>

                            <Typography variant={"h5"} style={{ fontWeight: "bold" }}>
                                Languages
                            </Typography>
                            <Grid container direction="row" sx={{ py: 1 }} >
                                <Grid item xs={6}>
                                    <Switch
                                        checked={showLevel}
                                        onChange={() => setShowLevel(!showLevel)}
                                    />
                                    <Typography variant="p">
                                        Show level
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ textAlign: "right" }}>
                                    <Button variant="contained" color="info" onClick={props.add} >Add Language</Button>
                                </Grid>
                                </Grid>
                                {props.sections.languages.map((language, idx) => {
                                    return (
                                        <Grid container key={idx} columnSpacing={4}>

                                            <Grid item xs={5} >


                                                <Slider
                                                    id={(idx).toString()}
                                                    name='langLevel'
                                                    value={language.langLevel}
                                                    min={1}
                                                    step={1}
                                                    max={5}
                                                    marks
                                                    getAriaValueText={() => handleLabelFormat(language.langLevel)}
                                                    valueLabelFormat={() => handleLabelFormat(language.langLevel)}
                                                    onChange={props.handleLevelChange(idx, "langLevel")}
                                                    disabled={!showLevel}
                                                    valueLabelDisplay="auto"
                                                    aria-labelledby="non-linear-slider"
                                                    sx={{ my: 2, ml: 1 }}
                                                />
                                            </Grid>

                                            <Grid item xs={7} sx={{ ml: "auto" }}>

                                                <MyTextField
                                                    id={(idx).toString()}
                                                    name="language"
                                                    value={language.language}
                                                    label="Language"
                                                    onChange={props.handleChange}
                                                    inputProps={{
                                                        endAdornment: (
                                                            <Tooltip onClick={() => props.remove(idx)} title="Delete Language" placement='top'>
                                                                <IconButton>
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </Tooltip>
                                                        )
                                                    }}

                                                />
                                            </Grid>


                                        </Grid>
                                    )
                                })}
                            </Grid>
                    }




                        </Grid>
            </Grid>

                {/* const [sections, setSections] = useState({
        courses: [{
            course: "",
            institution: "",
            date: ""
        }],
        internships: [{
            position: "",
            company: "",
            date: "",
            city: "",
        }],
        references: [],
        custom: [{}],
        hobbies: "",
        languages: [{
            language: "",
            skill: 3
        }]

    }) */}


            </Grid>
            );
};

            // courses: false,
            //         internships: false,
            //         references: false,
            //         custom: false,
            //         hobbies: false,
            //         languages: false,

            export default AddExtraSections;