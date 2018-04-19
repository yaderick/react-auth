import React from 'react'
import { connect } from 'react-redux';
import { Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import {login_action} from '../Login/actions'
const Rise = ({ history ,handleLoginClick}) => {

  const handleLogout = () => {
    handleLoginClick({ loginState: false })
   
  }
  return (
    <div>
      <h2>恭喜登陆成功--->进入Rise 业务页面</h2>
      <button onClick={()=>handleLogout()}>登出</button>
    </div>
  )
}
const mapStateToProps = (state) => {
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Rise))