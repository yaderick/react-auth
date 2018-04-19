import React from 'react';
import Loadable from 'react-loadable';
import path from 'path';

import WithAuth from '@/components/withAuth'


function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading!</div>;
  } else {
    return null;
  }
}

const Rise = Loadable({
  loader: () => import('../views/Rise'),
  loading: Loading,
});


const routeConfig = [

  {
    path: '/rise',
    component: Rise,
    key:'/rise'
  }
]

export default routeConfig