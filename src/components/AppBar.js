import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { useLocation, Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#e262b7',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function ButtonAppBar() {

  const classes = useStyles();
  const location = useLocation();
  return (
    <div className={classes.root} >
      <AppBar position="fixed" style={{backgroundColor: '#e45675'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {location.pathname.startsWith("/details") ? <Link to="/" style={{float: "left",display:"flex"}}><Icon className="backButt">arrow_back</Icon></Link> : <Icon>menu</Icon>}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {location.pathname.startsWith("/details") ? "Details" : "Home"}
          </Typography>
          <Button color="inherit" style={{visibility: location.pathname.startsWith("/details") ? "hidden" : "visible"}}><Icon>search</Icon></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar
