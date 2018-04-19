import React from 'react'

import  './index.less'
import Login from '../Login'


class Home extends React.Component{
  constructor(){
    super()
  }
  render(){
    const {history,location,match}=this.props
   return(
     <div>
       <p>欢迎来到Rise Online 首页</p>
       <Login />
     </div>
   )
  }
}


export default Home