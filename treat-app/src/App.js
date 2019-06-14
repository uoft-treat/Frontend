import React, { useState } from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Admin from './components/admin/Admin';
import Navmenu from './components/navmenu/Navmenu';
import Login from './components/log_in_page/Log_in_page';
import Key_input from './components/key_input/Key_input';
import Key_data_query from './components/key_data_query/Key_data_query';
import Key_disable from './components/key_disable/Key_disable';
import Key_generator from './components/key_generator/Key_generator';

import './App.css';

const App = props => {

  let content = (

    <React.Fragment>
      <BrowserRouter>
        <div>
          <Route path="/" component={Navmenu} exact/>
          <Route path="/Admin" component={Admin}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Key_input" component={Key_input}/>
          <Route path="/Data_download" component={Key_data_query}/>
          <Route path ="/Key_disable" component = {Key_disable}/>
          <Route path ="/Key_generator" component = {Key_generator}/>
          </div>
        </BrowserRouter>
    </React.Fragment>

  );
  return content;

};



export default App;