import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import UserList from './Components/UserList';
import UserDetails from './Components/UserDetails';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={UserList}/>
      <Route path="/details/:id" component={UserDetails} />
    </Switch>
    </>
  );
}

export default App;
