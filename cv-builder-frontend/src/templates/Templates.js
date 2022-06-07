import { Modal, Grid, Button, Box, Typography,Card } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Norway from './CV/Norway';
import USA from './CV/USA';
import NewZealand from './CV/NewZealand';
import JohnDoe from './CV/JohnDoe';
import { Link } from 'react-router-dom';


const Templates = (props) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "80%",
        minHeight: "80vh",
        backgroundColor: "#fff",
        border: '2px solid rgba(0,0,0,0.25)',
        boxShadow: 24,
        p: 4,
        // justifyContent:"center"
    };

   
   
    useEffect(() => {
        setRecord(JohnDoe);
      
        
            
    }, []);



    const { record, setRecord } = useContext(Context);

    // const templates = [<Norway record={record} fontSize={50}/>, <USA record={record}/>, <NewZealand record={record}/>]
    const templates = [<Norway record={record} fontSize={80}/>, <Norway record={record} fontSize={50}/>, <Norway record={record} fontSize={50}/>, <Norway record={record} fontSize={80}/>, <Norway record={record} fontSize={50}/>, <Norway record={record} fontSize={50}/>]

    // templates.forEach((template,idx) => (<template record={record}/>))

    const [onModal, setOnModal] = useState(false);

    

    return (
        <Grid>
            <Button variant="contained" onClick={() => setOnModal(true)}>Open Modal</Button>
            <Modal
                open={onModal}
                onClose={() => setOnModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container spacing={0} sx={style}>
                    {templates.map((template, idx) => (
                        <Grid item md={4} xs={6} key={idx}>
                            
                            {template}

                             {/* <Link to="/app/templates/norway">Norway</Link> */}
                            
                        </Grid>
                    ))}
                </Grid>
            </Modal>
        </Grid>
    );
};

export default Templates;