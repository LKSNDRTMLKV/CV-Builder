import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import bgImage from '../../../images/backgrounds/background.png';
import checkImage from '../../../images/backgrounds/BackgroundFirstPage.png';
import home_1 from '../../../images/backgrounds/home_1.png'
import { API } from '../../constants/API';
import { Context } from '../../../context/Context';
import { v4 as uuidv4 } from 'uuid';
import { localStorageHelper } from '../../../helpers/localStorageHelper';

const useStyles = makeStyles((theme) => ({
    background: {
        
        minHeight: "90vh",
        width: "fit-content",
       

    },

    purple: {
        backgroundColor: theme.palette.purple
    },

    checkImage: {
        maxWidth: "100%",
        objectFit: "cover"
    },
   
}))

const Home = (props) => {



    const {loggedIn, record,setRecord, currentUser,setCurrentUser} = useContext(Context);

    const [recordId, setRecordId] = useState("");

    const gray = "rgba(0,0,0,0.25)"

    const classes = useStyles();

    const onMobile = useMediaQuery('(min-width:700px)');

    const handleUserRecord = () => {
        if(loggedIn) {
            // const userRecord = [...localStorageHelper.GetItem("AUTH_TOKEN").records];
            // setRecord(prevState => ({...prevState, id: recordId}));
            // userRecord.push(record);
            // setCurrentUser(prevState => ({...prevState, records: userRecord}));
            // localStorageHelper.SaveItem("AUTH_TOKEN", currentUser);
        }
    }

    useEffect(() => {
        const recordID = uuidv4().slice(0,8);
        setRecordId(recordID);
    },[])

    return (
        <Grid
            container
            className={classes.background}
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            // style={{ minHeight: "100vh", minWidth: "100%" }}
        >
            
            <Grid item md={6} xs={12} sx={{p:2}}>

            <Grid container justifyContent="center">

                <Grid item md={10} xs={12}>

                <Typography variant={onMobile ? "h3" : "h4"} style={{ fontWeight: "bold" }} sx={{m:2}}>The Ultimate</Typography>
                    
                  <Typography variant={onMobile ? "h3" : "h4"} style={{ fontWeight: "bold" }} sx={{m:2,mb:4}}>CV & Portfolio Checklist</Typography>
                    

                <Typography variant={onMobile ? "h6" : "body1"} style={{color:"gray"}}  sx={{m:2}}>Use these field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!
                </Typography>

                <Link to={loggedIn ? (`${API.paths.create_cv + recordId}`)  : API.paths.sign_in}>
                    <Button variant="contained" sx={{px:2,m:2}} onClick={handleUserRecord}> Step Inside </Button> 
                    </Link>

                </Grid>

            </Grid>

            </Grid>
            
            <Grid item md={6} xs={12} sx={{p:2,}}>
               <Box component="img" src={home_1} className={classes.checkImage} />
            </Grid>
        </Grid>
    );
};

export default Home;