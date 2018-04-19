import {LOGIN_STATE} from '../actions'


const initState={
  loginState:false
}

export const loginReducer =(state=initState,action)=>{
  switch (action.type) {
    case LOGIN_STATE:
      return {
        ...state,...action.loginState
      }
    default:
      return state
  }
}