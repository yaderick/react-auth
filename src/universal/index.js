import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'


import store from '@/redux/store'
import Router from '@/routes'




const element =(
  <Provider store={store}>
    <Router/>
  </Provider>
)





ReactDOM.render(
  element,
  document.getElementById('root')
);
