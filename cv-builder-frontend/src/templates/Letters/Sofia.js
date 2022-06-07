import { Circle } from '@mui/icons-material';
import { Grid, Typography,Card, LinearProgress, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { createTheme,responsiveFontSizes, ThemeProvider } from '@mui/material';

import { fontWeight } from '@mui/system';
import JaneDoe from './JaneDoe';

const Sofia = (props) => {

    const record = JaneDoe;

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

        <Grid item xs={12}>
            <Typography variant="h3">Dear {record.company.employer && record.company.employer}, {record.company.name && record.company.name}</Typography>
            <Typography variant="body1">{record.company.description && record.company.description}</Typography>
        </Grid>
        
        <Grid alignItems="end" item xs={12}>
            <Typography variant='body1'>{record.address && record.address}</Typography>
            <Typography variant='body1'>{record.phone && record.phone}</Typography>
            <Typography variant='body1'>{record.email && record.email}</Typography>
        </Grid>

    </Grid>
       </Grid>
    </ThemeProvider>
    );
}

export default Sofia;