import React from 'react'
import { Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Demo1 from '@/views/H5/Demo1'
import Demo2 from '@/views/H5/Demo2'
import Loadable from 'react-loadable';




function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading!</div>;
  } else {
    return null;
  }
}

const Home= Loadable({
  loader: () => import('../views/Home'),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import('../views/Login'),
  loading: Loading,
});


const PubRouter = () => (
  
    <div>
      <Route path="/" exact  component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/demo1" component={Demo1} />
    </div>
)

export default PubRouter