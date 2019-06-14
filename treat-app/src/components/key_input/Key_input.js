import React, { useState } from 'react';
import AppBarTop from '../helper_component/App_bar_top';
import AppBarBottom from '../helper_component/App_bar_bottom';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './Key_input.css';

const Key_input = props => {


  const page_title = "Enter the Key to join"

  let content = (

    <React.Fragment>
      <AppBarTop title = {page_title}/>
        <div className = "key_page">
          <div className = "key_input_field">
          <TextField
          id="standard-password-input"
          label="Enter Key"
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
        />
      </div>
        <Button component={Link} to="/Key_input" variant="contained" color="primary"  style={{height: "100px", fontSize: '18px'}} size="large">Confrim</Button>
      <div className = "bottom_bar">
          <AppBarBottom />
      </div>
      </div>
    </React.Fragment>

  );
  return content;

};


export default Key_input;
