import React from 'react'
import {Switch, Route} from 'react-router'

//import from components
import Test from "./components/test.js";


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Test} />
  </Switch>
)

export default Routes
