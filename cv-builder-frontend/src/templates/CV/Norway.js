import { Circle } from '@mui/icons-material';
import { Grid, Typography,Card, LinearProgress, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { createTheme,responsiveFontSizes, ThemeProvider } from '@mui/material';
import JohnDoe from './JohnDoe';
import { fontWeight } from '@mui/system';

const Norway = (props) => {

    const record = JohnDoe;

    const [arg,setArg] = useState(true || false);

    // const handleLevelBoxes = (box) => {
    //     for(let i = 0; i < 6; i++) {
    //         return box[i];
    //     }
    // }

    let theme = createTheme({
        typography:{
            h1:{
                fontSize: "1rem",
                fontWeight:"bolder"
            },
            h2:{
                fontSize:"0.8rem",
                fontWeight:"bold"
            },
            h3:{
                fontSize:"0.7rem",
                fontWeight:"bold"
            },
            body1:{
                fontSize:"0.5rem"
            },
            body2:{
                fontSize:"0.4rem"
            }
        }
    });
    theme = responsiveFontSizes(theme);

   
    return (
    <ThemeProvider theme={theme}>
         <Grid style={{position:'relative'}}>
        
             <Grid container spacing={4} sx={{p:2}}>
        <Grid item xs={12}>
            <Typography variant="h1" >{record.fullName && record.fullName}</Typography>
            <Typography variant="h2" >{record.profTitle && record.profTitle}</Typography>
        </Grid>

        <Grid item xs={8}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h3" >Profile</Typography>
                    <Typography variant="body2" >{record.aboutMe && record.aboutMe}</Typography>
                </Grid>

                <Grid item xs={12} sx={{my:1}}>
                    <Typography variant="h3" >Work Experience</Typography>
                    {record.workExperience.map((we,idx) => (
                        <Grid container key={idx} sx={{my:1}}>
                        <Grid item xs={12}>
                        <Typography variant="body1" >
                        {we.position && we.position} at {we.company && we.company}, {we.city && we.city}
                        </Typography>
                        <Typography variant="body2" sx={{textAlign:"right"}}>{we.date && we.date}</Typography>
                        <Typography variant="body2" >{we.description && we.description}</Typography>
                        </Grid>
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h3">Education</Typography>
                    {record.education.map((edu,idx) => (
                        <Grid key={idx}>
                        <Typography variant="body1" >
                        {edu.degree && edu.degree}, {edu.school && edu.school} in {edu.eduCity && edu.eduCity}
                        </Typography>
                        <Typography variant="body2">{edu.eduDates && edu.eduDates}</Typography>
                        <Typography variant="body2" >{edu.eduDesc && edu.eduDates}</Typography>
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </Grid>

        <Grid item xs={4} >
            <Grid container spacing={2} sx={{textAlign:"right"}}>
                <Grid item xs={12}>
                    <Typography variant="h3" >Details</Typography>
                    <Typography  variant="body2">{record.location && record.location}</Typography>
                    <Typography  variant="body2">{record.phone && record.phone}</Typography>
                    <Typography variant="body2" >{record.email && record.email}</Typography>
                    <Typography  variant="body2">{record.social && record.social}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h3" >Skills</Typography>
                    {record.skills.map((skill,idx) => (
                        <Grid key={idx}>
                            <Typography variant="body2">{skill && skill}</Typography>
                            {skill.level && 
                            <LinearProgress/>}
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h3" >Languages</Typography>
                    {record.languages.map((lang,idx) => {
                        return(
                        <Grid container key={idx}>
                            <Grid item xs={12}>
                                <Typography variant="body1">{lang.language}</Typography> 
                                
                            </Grid>
                            {lang.level && 
                            <Grid item xs={12} sx={{mt:-1, mb:0.5}}> 
                            <Circle color={lang.level >= 1 ?  "inherit" : "action"} sx={{fontSize:"0.4rem"}}/>
                            <Circle color={lang.level >= 2 ?  "inherit" : "action"} sx={{fontSize:"0.4rem"}}/>
                            <Circle color={lang.level >= 3 ?  "inherit" : "action"} sx={{fontSize:"0.4rem"}}/>
                            <Circle color={lang.level >= 4 ?  "inherit" : "action"} sx={{fontSize:"0.4rem"}}/>
                            <Circle color={lang.level >= 5 ?  "inherit" : "action"} sx={{fontSize:"0.4rem"}}/>
                           
                            </Grid>
                            }
                            
                        </Grid>
                    )})}
                </Grid>

            </Grid>
        </Grid>
        
    </Grid>
       </Grid>
    </ThemeProvider>








    //     <Grid style={{position:'relative'}}>
    //     <Card style={{position:"absolute",top:0, left:0, width:"21vw", height:"30vw"}}>
    //          <Grid container spacing={4} sx={{p:2}}>
    //     <Grid item xs={12}>
    //         <Typography variant="h4" sx={{fontSize:`${props.fontSize / 100}vw`, fontWeight:"bold"}}>{record.fullName}</Typography>
    //         <Typography variant="h5" >{record.profTitle}</Typography>
    //     </Grid>

    //     <Grid item xs={8}>
    //         <Grid container spacing={2}>
    //             <Grid item xs={12}>
    //                 <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Profile</Typography>
    //                 <Typography variant="body1" sx={{fontSize:`${props.fontSize / 200}vw`}}>{record.aboutMe}</Typography>
    //             </Grid>

    //             <Grid item xs={12} sx={{my:1}}>
    //                 <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Work Experience</Typography>
    //                 {record.workExperience.map((we,idx) => (
    //                     <Grid container key={idx} sx={{my:1}}>
    //                     <Grid item xs={12}>
    //                     <Typography variant="h6" sx={{fontSize:`${props.fontSize / 200}vw`}}>
    //                     {we.position} at {we.company}, {we.city}
    //                     </Typography>
    //                     <Typography sx={{fontSize:`${props.fontSize / 250}vw`}}>{we.date}</Typography>
    //                     <Typography variant="body1" sx={{fontSize:`${props.fontSize / 200}vw`}}>{we.description}</Typography>
    //                     </Grid>
    //                     </Grid>
    //                 ))}
    //             </Grid>

    //             <Grid item xs={12}>
    //                 <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Education</Typography>
    //                 {record.education.map((edu,idx) => (
    //                     <Grid key={idx}>
    //                     <Typography variant="h6" sx={{fontSize:`${props.fontSize / 200}vw`}}>
    //                     {edu.degree}, {edu.school} in {edu.eduCity}
    //                     </Typography>
    //                     <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{edu.eduDates}</Typography>
    //                     <Typography variant="body1" sx={{fontSize:`${props.fontSize / 200}vw`}}>{edu.eduDesc}</Typography>
    //                     </Grid>
    //                 ))}
    //             </Grid>

    //         </Grid>
    //     </Grid>

    //     <Grid item xs={4}>
    //         <Grid container spacing={2}>
    //             <Grid item xs={12}>
    //                 <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Details</Typography>
    //                 <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{record.location}</Typography>
    //                 <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{record.phone}</Typography>
    //                 <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{record.email}</Typography>
    //                 <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{record.social}</Typography>
    //             </Grid>

    //             <Grid item xs={12}>
    //                 <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Skills</Typography>
    //                 {record.skills.map((skill,idx) => (
    //                     <Grid key={idx}>
    //                         <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{skill}</Typography>
    //                         {skill.level && 
    //                         <LinearProgress/>}
    //                     </Grid>
    //                 ))}
    //             </Grid>

    //             <Grid item xs={12}>
    //                 <Typography variant="h5" sx={{fontSize:`${props.fontSize / 150}vw`}}>Languages</Typography>
    //                 {record.languages.map((lang,idx) => {
    //                     return(
    //                     <Grid container key={idx}>
    //                         <Grid item xs={12}>
    //                             <Typography sx={{fontSize:`${props.fontSize / 200}vw`}}>{lang.language}</Typography> 
                                
    //                         </Grid>
    //                         <Grid item xs={12}> 


    //                         <Circle color={lang.level >= 1 ?  "inherit" : "action"} sx={{fontSize:`${props.fontSize / 200}vw`}} />
    //                         <Circle color={lang.level >= 2 ?  "inherit" : "action"} sx={{fontSize:`${props.fontSize / 200}vw`}} />
    //                         <Circle color={lang.level >= 3 ?  "inherit" : "action"} sx={{fontSize:`${props.fontSize / 200}vw`}} />
    //                         <Circle color={lang.level >= 4 ?  "inherit" : "action"} sx={{fontSize:`${props.fontSize / 200}vw`}} />
    //                         <Circle color={lang.level >= 5 ?  "inherit" : "action"} sx={{fontSize:`${props.fontSize / 200}vw`}} />

    //                         </Grid>
    //                     </Grid>
    //                 )})}
    //             </Grid>

    //         </Grid>
    //     </Grid>
        
    // </Grid>
    //     </Card>
    //    </Grid>
    );
};

export default Norway;