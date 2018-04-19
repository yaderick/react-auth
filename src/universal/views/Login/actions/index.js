
export const LOGIN_STATE='LOGIN_STATE'


export const login_action = (loginState) => {
   return {
     type:LOGIN_STATE,
     loginState
    }
}