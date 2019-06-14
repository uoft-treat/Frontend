import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AppBarTop from '../helper_component/App_bar_top';
import AppBarBottom from '../helper_component/App_bar_bottom';
import {Link} from 'react-router-dom'
import './Admin.css';

const Admin = props => {

  const page_title = "Welcome, Student"

  let content = (

    <React.Fragment>
      <div className = "main">
        <AppBarTop title = {page_title}/>
        <div className = "section">
            <Button component={Link} to="/Key_generator" variant="contained" color="primary" className = "button" style={{fontSize: '18px'}} size="large">Create an experiement</Button>
          </div>
          <div className = "section">
            <Button component={Link} to="/Key_disable" variant="contained" color="secondary" className = "button" style={{fontSize: '18px'}} size="large">Close an experiment</Button>
          </div>
          <div className = "section">
            <Button component={Link} to="/Data_download" variant="contained" color="primary" className = "button" style={{fontSize: '18px'}} size="large">Experiment Data Download</Button>
          </div>
      <div className = "bottom_bar">
          <AppBarBottom />
      </div>
      </div>
    </React.Fragment>

  );
  return content;

};



export default Admin;