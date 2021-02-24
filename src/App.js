import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import UserProfil from './pages/UserProfil'
import Sorry from './pages/Sorry'
import './style/index.scss';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/user' component={UserProfil} />
      <Redirect to='/sorry' component={Sorry}/>
    </Switch>
  );
}

export default App;
