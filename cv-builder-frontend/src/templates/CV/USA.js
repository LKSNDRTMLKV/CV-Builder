import { Circle } from '@mui/icons-material';
import { Grid, Typography,Card, LinearProgress, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { createTheme,responsiveFontSizes, ThemeProvider } from '@mui/material';
import JohnDoe from './JohnDoe';

const USA = (props) => {
    const record = JohnDoe;

    const [arg,setArg] = useState(true || false);

    // const handleLevelBoxes = (box) => {
    //     for(let i = 0; i < 6; i++) {
    //         return box[i];
    //     }
    // }

    const arrayOfFive = [1,2,3,4,5];

  

    return (
        <Grid style={{position:'relative'}}>
        <Card style={{position:"absolute",top:0, left:0, width:"21vw", height:"30vw"}}>
             <Grid container spacing={4} sx={{p:2}}>
        <Grid item xs={12}>
            <Typography variant="h4" sx={{fontSize:`${props.fontSize / 100}vw`, fontWeight:"bold"}}>{record.fullName}</Typography>
            <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>{record.profTitle}</Typography>
        </Grid>

        <Grid item xs={8}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Profile</Typography>
                    <Typography variant="body1" sx={{fontSize:`${props.fontSize / 200}vw`}}>{record.aboutMe}</Typography>
                </Grid>

                <Grid item xs={12} sx={{my:1}}>
                    <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Work Experience</Typography>
                    {record.workExperience.map((we,idx) => (
                        <Grid container key={idx} sx={{my:1}}>
                        <Grid item xs={12}>
                        <Typography variant="h6" sx={{fontSize:`${props.fontSize / 200}vw`}}>
                        {we.position} at {we.company}, {we.city}
                        </Typography>
                        <Typography sx={{fontSize:`${props.fontSize / 250}vw`}}>{we.date}</Typography>
                        <Typography variant="body1" sx={{fontSize:`${props.fontSize / 200}vw`}}>{we.description}</Typography>
                        </Grid>
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Education</Typography>
                    {record.education.map((edu,idx) => (
                        <Grid key={idx}>
                        <Typography variant="h6" sx={{fontSize:`${props.fontSize / 200}vw`}}>
                        {edu.degree}, {edu.school} in {edu.eduCity}
                        </Typography>
                        <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{edu.eduDates}</Typography>
                        <Typography variant="body1" sx={{fontSize:`${props.fontSize / 200}vw`}}>{edu.eduDesc}</Typography>
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </Grid>

        <Grid item xs={4}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Details</Typography>
                    <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{record.location}</Typography>
                    <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{record.phone}</Typography>
                    <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{record.email}</Typography>
                    <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{record.social}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Skills</Typography>
                    {record.skills.map((skill,idx) => (
                        <Grid key={idx}>
                            <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{skill}</Typography>
                            {skill.level && 
                            <LinearProgress/>}
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Languages</Typography>
                    {record.languages.map((lang,idx) => {
                        return(
                        <Grid container key={idx}>
                            <Grid item xs={12}>
                                <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{lang.language}</Typography> 
                                
                            </Grid>
                            <Grid item xs={12}> 


                            <Circle color={lang.level >= 1 ?  "inherit" : "action"} sx={{fontSize:`${props.fontSize / 200}vw`}} />
                            <Circle color={lang.level >= 2 ?  "inherit" : "action"} sx={{fontSize:`${props.fontSize / 200}vw`}} />
                            <Circle color={lang.level >= 3 ?  "inherit" : "action"} sx={{fontSize:`${props.fontSize / 200}vw`}} />
                            <Circle color={lang.level >= 4 ?  "inherit" : "action"} sx={{fontSize:`${props.fontSize / 200}vw`}} />
                            <Circle color={lang.level >= 5 ?  "inherit" : "action"} sx={{fontSize:`${props.fontSize / 200}vw`}} />

                            </Grid>
                        </Grid>
                    )})}
                </Grid>

            </Grid>
        </Grid>
        
    </Grid>
        </Card>
       </Grid>
    );
};

export default USA;