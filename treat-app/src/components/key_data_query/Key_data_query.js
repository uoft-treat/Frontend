import React, { useState } from 'react';
import AppBarTop from '../helper_component/App_bar_top';
import AppBarBottom from '../helper_component/App_bar_bottom';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './Key_data_query.css';

const Key_data_query = props => {


  const page_title = "Experiment Data Download"

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
        <Button component={Link} to="/Key_input" variant="contained" color="secondary"  style={{height: "100px", fontSize: '18px'}} size="large">Download</Button>
      <div className = "bottom_bar">
          <AppBarBottom />
      </div>
      </div>
    </React.Fragment>

  );
  return content;

};


export default Key_data_query;
