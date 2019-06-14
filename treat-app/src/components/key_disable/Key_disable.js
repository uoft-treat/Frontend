import React, { useState } from 'react';
import AppBarTop from '../helper_component/App_bar_top';
import AppBarBottom from '../helper_component/App_bar_bottom';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './Key_disable.css';

const Key_disable = props => {


  const page_title = "Close an experiment"

  let content = (

    <React.Fragment>
      <AppBarTop title = {page_title}/>
        <div className = "key_disable_page">
          <div className = "key_input_field">
          <TextField
          id="standard-password-input"
          label="Enter Key to close experiment"
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
        />
      </div>
        <Button component={Link} to="/Key_disable" variant="contained" color="secondary"  style={{height: "100px", fontSize: '18px'}} size="large">Confrim</Button>
      <div className = "bottom_bar">
          <AppBarBottom />
      </div>
      </div>
    </React.Fragment>

  );
  return content;

};


export default Key_disable;
