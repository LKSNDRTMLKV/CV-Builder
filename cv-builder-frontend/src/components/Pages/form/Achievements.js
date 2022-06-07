import React from 'react';
import { Grid, Typography, Tooltip, IconButton, Button, Divider } from '@mui/material';
import { MyTextField } from '../../custom/previewComponents';
import DeleteIcon from '@mui/icons-material/Delete';

const Achievements = (props) => {
    return (
        <Grid item md={6} xs={12} >
            {/* <Typography variant={"h5"} style={{ fontWeight: "bold" }} >
                Achievements
            </Typography> */}
            <Grid container sx={{ py: 1 }}>
            {/* <Grid item xs={12} sx={{ my: 2, textAlign:"right" }}>
            <Button variant="contained" color="info" onClick={props.add} sx={{ textAlign: "right" }}>Add Achievement </Button>
            </Grid> */}

            <Grid container sx={{my:2}}>
                <Grid item xs={6}> 
                <Typography variant={"h5"} style={{ fontWeight: "bold" }} >
                Achievements
            </Typography></Grid>
                <Grid item xs={6} sx={{textAlign:"right"}}>
                <Button variant="contained" color="info" onClick={props.add} sx={{ textAlign: "right" }}>Add Achievement </Button>
                </Grid>
            </Grid>
                

                {props.achievements.map((achievement, idx) => (
                    <Grid item xs={12} key={idx}>
                        <MyTextField

                            id={(idx).toString()}
                            name="achievement"
                            value={achievement}
                            label="Achievement"
                            onChange={props.handleChange}
                            multiline={2}
                            inputProps={{
                                endAdornment: (
                                    <Tooltip onClick={() => props.remove(idx)} title="Delete achievement" placement='top'>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                )
                            }}

                        />
                    </Grid>

                ))}
            </Grid>

            <Divider sx={{my:2}} />
            

        </Grid>
    );
};

export default Achievements;