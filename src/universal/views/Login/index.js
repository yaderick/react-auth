import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import  './index.less'


import {login_action} from './actions'

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  
  handleLogin(){
    this.props.handleLoginClick({loginState:true})
  }

  render() { 
    const {loginState}=this.props
    
    if(loginState ){
      return  <Redirect to={{
        pathname: '/rise',
      }}/>
    }
     
    return (
      <div>
        <button className='login-btn' onClick={()=>this.handleLogin()}>登录</button>
      </div>
    )
  }
}

const  mapStateToProps=(state)=> {
  return {
    loginState: state.loginReducer.loginState,
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(appActions, dispatch);
// }
const mapDispatchToProps = dispatch => {
  return {
    handleLoginClick: login => {
      dispatch(login_action(login))
    }
  }
}

Login.propTypes = {
  handleLoginClick: PropTypes.func.isRequired,
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login))