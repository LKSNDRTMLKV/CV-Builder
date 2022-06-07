import { Grid, Container, Typography, Button, Divider, LinearProgress, Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Context } from '../../../context/Context';
import Norway from '../../../templates/CV/Norway';
import Sofia from '../../../templates/Letters/Sofia';
import { API } from '../../constants/API';
import MyCard from './MyCard';

const Dashboard = (props) => {

  const { loggedIn, currentUser } = useContext(Context);

  let navigate = useNavigate();

  const handleNavigation = () => {
    !loggedIn && navigate(API.paths.sign_in);
  }

  const [active, setActive] = useState({
    cv: true,
    letter: false
  })

  const [cards, setCards] = useState([1, 2, 3]);


  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    alert("new Card")
  }

  useEffect(() => {
    handleNavigation();
  }, [loggedIn])

  

  return (
    <Container maxWidth="lg">
      <Grid container sx={{ my: 4 }}>
        <Grid item xs={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>Documents</Typography>
        </Grid>

        {/* <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Link to={API.paths.create_cv}>
            <Button variant="contained" color="primary">+ Create new</Button>
          </Link>

        </Grid> */}

        <Grid item xs={12}>

          <Grid container sx={{ my: 2, }} >
            <Grid item md={3} xs={6}>
              <Button variant={active.cv ? "contained" : "text"} onClick={() => setActive({ cv: true, letter: false })}>
                Curriculum Vitae
              </Button>
            </Grid>

            <Grid item md={3} xs={6}>
              <Button variant={active.letter ? "contained" : "text"} onClick={() => setActive({ cv: false, letter: true })}>
                Cover Letters
              </Button>
            </Grid>
          </Grid>




          <Divider sx={{ my: 2 }} />



          <Grid item xs={12}>
            <Grid container spacing={4}>

              {/* CV */}
              {active.cv &&
                <Grid item md={12} xs={12}>
                  <Grid container sx={{ justifyContent: "center" }} spacing={4} >
                    {cards.map((record, idx) => {
                      return (
                        <Grid key={idx} item md={4} sm={6} xs={12}>
                          <Button sx={{ textAlign: "left", textTransform: "none", m: 0, p: 0 }} onClick={() => setOpenModal(!openModal)}>
                            <MyCard
                              template={<Norway />}
                            />

                          </Button>

                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
              }

              {/* CV MODAL */}

              <Modal
                open={openModal}
                onClose={() => setOpenModal(!openModal)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={{postion:"relative"}}>
                <Grid sx={{position:"absolute", bottom:"5%", right:"5%"}} >
                  <Button variant="contained" sx={{m:1}}>Edit Document</Button>
                  <Button variant="contained" sx={{m:1}}>Download PDF</Button>
                </Grid>
                </Box>
              
              </Modal>


              {active.letter &&
                <Grid item md={12} xs={12}>
                  <Grid container sx={{ justifyContent: "center" }} spacing={4}>
                  {cards.map((record, idx) => {
                      return (
                        <Grid key={idx} item md={4} sm={6} xs={12}>
                          <Button sx={{ textAlign: "left", textTransform: "none", m: 0, p: 0 }} onClick={() => setOpenModal(!openModal)}>
                            <MyCard
                              template={<Sofia />}
                            />

                          </Button>

                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
              }

            </Grid>
          </Grid>

        </Grid>

      </Grid>
    </Container>
  );
};

export default Dashboard;