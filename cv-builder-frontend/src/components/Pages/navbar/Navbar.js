import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../context/Context';
import { Grid, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { localStorageHelper } from '../../../helpers/localStorageHelper';

// const pages = ["Home", "Dashboard", "Designs"];





const useStyles = makeStyles((theme) => ({

    purple: {
        backgroundColor: theme.palette.purple
    },
    link: {
        width:"100%",
        color: "black"
    }

}))

function HideOnScroll(props) {
    const { children, window } = props;
 
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

const Navbar = (props) => {



    
    const [authentication, setAuthentication] = useState("Login");

    const {loggedIn,setLoggedIn, currentUser} = useContext(Context);

    useEffect(() => {
        if(loggedIn) {
            setAuthentication("Logout");
        }
        else {
            setAuthentication("Login");
        }
    },
    [loggedIn])

    const onMobile = useMediaQuery("min-width:900px");

    let navigate = useNavigate();

    const handleLogout = () => {
        if(loggedIn) {
            localStorageHelper.RemoveItem("AUTH_TOKEN");
            setLoggedIn(false);
        }
    }

    const pages = [
        {
            name: "Home",
            path: props.paths.home
        },
        {
            name: "Dashboard",
            path: props.paths.dashboard
        },
        {
            name: "Insert Idea Here",
            path: "/"
        }
    
    
    ]

    // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const settings = [
        {
            name: "Account",
            path: props.paths.account
        },
        {
            name: authentication,
            path: props.paths.sign_in,
            function: handleLogout,
        }

    ]

    


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const classes = useStyles();

    return (
        <HideOnScroll {...props} >
        <AppBar color="primary">
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        CV BUILDER
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'  }, }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ cursor: "pointer"}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page,idx) => (
                                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                                   <Link to={page.path}>
                                   <Typography textAlign="center">
                                    {page.name}
                                    </Typography>
                                   </Link>
                                    
                                    
                                   
                                    
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        CVBUILDER
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page,idx) => (
                            <Link to={page.path} key={idx}>
                            <Button
                                
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                                
                            </Button>
                                </Link>
                        ))}
                    </Box>
                   
                     <Box sx={{ flexGrow: 0 }}>
                     <Tooltip title="Open settings">
                         <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                             <Avatar alt="Remy Sharp" src="" />
                         </IconButton>
                     </Tooltip>
                     <Menu
                         sx={{ mt: '45px' }}
                         id="menu-appbar"
                         anchorEl={anchorElUser}
                         anchorOrigin={{
                             vertical: 'top',
                             horizontal: 'right',
                         }}
                         keepMounted
                         transformOrigin={{
                             vertical: 'top',
                             horizontal: 'right',
                         }}
                         open={Boolean(anchorElUser)}
                         onClose={handleCloseUserMenu}
                     >

                         

                         {settings.map((setting,idx) => (
                                 <Link to={setting.path}  className={classes.link} key={idx}>
                                     <Button sx={{display:"block"}} onClick={setting.function && setting.function}>

                             <MenuItem  onClick={handleCloseUserMenu}>
                                 <Typography textAlign="center">{setting.name}</Typography>
                             </MenuItem>
                                     </Button>
                                 </Link>
                         ))}
                     </Menu>
                 </Box>
                
                   
                </Toolbar>
            </Container>
                {/* <Toolbar>
            <Grid container direction="row">
                    <Grid item xs={2} >
                        <Typography>
                            CVBUILDER
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container>

                    {pages.map((page,idx) => (
                        <Grid item xs={3} key={idx}>
                            <Link to={page.path} >
                            <Button
                                
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                {page.name}
                                
                            </Button>
                                </Link>
                                </Grid>
                        ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={4} order={3}>

                    </Grid>
            </Grid>
                </Toolbar> */}
        </AppBar>
        </HideOnScroll>
    );
};
export default Navbar;