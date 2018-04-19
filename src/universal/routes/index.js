
import React from 'react'
import { Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import PreRouter from './preRouter'
import PubRouter from './PubRouter'


const BasicRouter = () => {
 
  return (
    <Router history={history}>
      <div>
        <PreRouter />
        <PubRouter />
      </div>
    </Router>
  )
};

export default BasicRouter