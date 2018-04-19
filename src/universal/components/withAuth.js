
import React from 'react'
import { Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'






const WithAuth = ({ component: Component, loginState: isLogin, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      if (isLogin.loginState) {
        return <Component {...props} />
      } else {
        return <Redirect to={{ pathname: '/login', }} />
      }
    }}/>
  )

}


const mapStateToProps = (state) => {
  return {
    loginState: state.loginReducer,
  }
}



export default connect(mapStateToProps)(WithAuth)