import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import Homeicon from '@material-ui/icons/Home';
import Experimenticon from '@material-ui/icons/Games';
import Codeicon from '@material-ui/icons/Code';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

}));


const App_bar_bottom = props =>{

  const classes = useStyles();

  let content = (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar >
              <div style={{ float: "none", margin: "0 auto"}}>
                
                <IconButton 
                    aria-label="home"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    component={Link} to="/"
                >
                  <Experimenticon />
                </IconButton>
                <IconButton 
                    aria-label="home"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    component={Link} to="/"
                >
                  <Homeicon />
                </IconButton>
                <IconButton 
                    aria-label="home"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    component={Link} to="/Key_input" 
                >
                  <Codeicon />
                </IconButton>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  )
  return content;
  };


export default App_bar_bottom;
