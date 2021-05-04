import * as React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ComputerIcon from '@material-ui/icons/Computer';
import BuildIcon from '@material-ui/icons/Build';
import grey from '@material-ui/core/colors/grey';
import teal from '@material-ui/core/colors/teal';
const drawerWidth = 240;
const logo = require("../../../img/positanoLogo.jpg");

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  margin: {
    margin: theme.spacing(1),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:grey[600]
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundImage: teal[400]
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  links: {
    color: grey[900]
  },

  drawerPaper: {
    width: 240,
    backgroundColor:grey[100],
    color:grey[900]
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            POSITANO <ComputerIcon />{' '}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h7" noWrap>
            <img
              alt=""
              src={logo}
              width="250"
              height="220"
              color="white"
              className="d-inline-block align-top"
              button onClick={handleDrawerClose}
            />
          </Typography>
        </div>
        <Divider />
        <List>
           <Link className={classes.links} to='/'>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemIcon>
              <HomeRoundedIcon className={classes.links} />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>  
          </Link>
          <Link  className={classes.links} to='/stock'>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <BuildIcon  className={classes.links}/>
                </ListItemIcon>
                <ListItemText primary='Stock' />
              </ListItem>
            </Link>
            <Link  className={classes.links} to='/ventas'>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <BuildIcon  className={classes.links}/>
                </ListItemIcon>
                <ListItemText primary='Ventas' />
              </ListItem>
            </Link>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}