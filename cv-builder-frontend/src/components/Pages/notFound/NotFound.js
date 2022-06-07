import { Grid, Typography } from '@mui/material';
import React from 'react';

const NotFound = (props) => {
    return (
        <Grid container sx={{m:10}}>
            <Grid item>
                <Typography variant="h4">404. Page Not Found</Typography>
                
            </Grid>
        </Grid>
    );
};

export default NotFound;