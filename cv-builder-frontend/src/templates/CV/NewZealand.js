import { Grid } from '@mui/material';
import React from 'react';

const NewZealand = (props) => {
    return (
       <Grid>
           {props.record.fullName}
       </Grid>
    );
};

export default NewZealand;