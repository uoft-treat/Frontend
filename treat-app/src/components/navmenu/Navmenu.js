import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AppBarTop from '../helper_component/App_bar_top';
import AppBarBottom from '../helper_component/App_bar_bottom';
import './Navmenu.css';



const Navmenu = props => {

  const page_title = "TREAT"

  let content = (

    <React.Fragment>
      <div className = "main">
        <AppBarTop title = {page_title}/>
        <div className = "section">
            <Button component={Link} to="/Key_input" variant="contained" color="secondary" className = "button" style={{fontSize: '18px'}} size="large">Join an Experiment</Button>
          </div>
          Or Create your own experiment by 
          <div className = "section">
            <Button component={Link} to="/Login" variant="contained" color="secondary" className = "button_nav_login" style={{fontSize: '15px'}} size="large">Log in</Button>
          </div>
          <div className = "bottom_bar">
          <AppBarBottom />
          </div>
        </div>
    </React.Fragment>

  );
  return content;

};



export default Navmenu;