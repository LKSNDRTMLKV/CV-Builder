import React, { useState } from 'react';
import { Button, Divider, Grid, IconButton, Slider, Switch, Tooltip, Typography } from '@mui/material';
import { MySlider, MyTextField } from '../../custom/previewComponents';
import DeleteIcon from '@mui/icons-material/Delete';
const Skills = (props) => {

    const [showLevel, setShowLevel] = useState(true);

    const handleLabelFormat = (idx) => {
        const levels = ["Novice", "Beginner", "Skillful", "Experienced", "Expert"];

        return levels[idx - 1]
    }


    return (
        <Grid item md={6} xs={12} >

            {!props.onMobile && <Divider sx={{my:2}} />}

            <Typography variant={"h5"} style={{ fontWeight: "bold" }}>
                Skills
            </Typography>
            <Grid container direction="row" sx={{ py: 1 }} >
                <Grid item xs={6}>
                    <Switch
                        checked={showLevel}
                        onChange={() => setShowLevel(!showLevel)}
                    />
                    <Typography variant="p">
                        Show skill level
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{textAlign:"right"}}>
                    <Button variant="contained" color="info" onClick={props.add} >Add Language</Button>
                </Grid>
            </Grid>

            <Grid container direction="row">
                {props.skills.map((skill, idx) => {
                    return (
                        <Grid container key={idx} columnSpacing={4}>

                            <Grid item xs={5} >


                                <Slider
                                    id={(idx).toString()}
                                    name='level'
                                    value={skill.level}
                                    min={1}
                                    step={1}
                                    max={5}
                                    marks
                                    getAriaValueText={() => handleLabelFormat(skill.level)}
                                    valueLabelFormat={() => handleLabelFormat(skill.level)}
                                    onChange={props.handleLevelChange(idx, "level")}
                                    disabled={!showLevel}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                    sx={{ my:2,ml:1 }}
                                />
                            </Grid>

                            <Grid item xs={7} sx={{ml:"auto"}}>

                                <MyTextField
                                    id={(idx).toString()}
                                    name="skill"
                                    value={skill.skill}
                                    label="Skill"
                                    onChange={props.handleChange}
                                    inputProps={{
                                        endAdornment: (
                                            <Tooltip onClick={() => props.remove(idx)} title="Delete Skill" placement='top'>
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

            {/* <Divider sx={{my:2}} /> */}

        </Grid>
    );
};

export default Skills;