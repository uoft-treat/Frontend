import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AppBarTop from '../helper_component/App_bar_top';
import AppBarBottom from '../helper_component/App_bar_bottom';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './Key_generator.css';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(10),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(10),
    },
  }));


function generate_key(){
    return Math.floor(100000 + Math.random() * 900000);
}


const Key_generator = props => {

  const page_title = "Create an experiement"
  const classes = useStyles();

  const [values, setValues] = React.useState({
    exp: '',
    name: 'hai',
  });

  const [generatemsg, setGeneratmsg] = React.useState({
    msg: '',
  });


  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }


  function handleClick() {
    if (values.exp == ''){
        alert("Please select an experiment first")
    }
    else {
        var key = generate_key();
        setGeneratmsg(oldValues => ({
            ...oldValues,
            msg: "Generate Key " + key + " for " + values.exp,
        }));
    }
  }


  let content = (

    <React.Fragment>
      <div className = "main">
        <AppBarTop title = {page_title}/>
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="experimentchoosen">Experiments</InputLabel>
                <Select
                value={values.exp}
                onChange={handleChange}
                inputProps={{
                name: 'exp',
                id: 'experimentchoosen',
                }}
                >
                <MenuItem value={"10 Seconds Challenge"}>10 Seconds Challenge</MenuItem>
                <MenuItem value={"How fast can you tap"}>How fast can you tap</MenuItem>
                <MenuItem value={"Memory Training"}>Memory Training</MenuItem>
                </Select>
            </FormControl>
        </form>
        <div>{generatemsg.msg}</div>
        <div className = "section">
            <Button onClick={handleClick} variant="contained" color="primary" className = "button" style={{fontSize: '18px'}} size="large">Generate a key</Button>
          </div>
      <div className = "bottom_bar">
          <AppBarBottom />
      </div>
      </div>
    </React.Fragment>

  );
  return content;

};



export default Key_generator;