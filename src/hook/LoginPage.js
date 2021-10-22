import React from 'react';
import {AuthContext} from './AuthContext'
import { useDispatch } from 'react-redux';

const LoginPage=()=>{
    const {authState,authAction}=React.useContext(AuthContext)
    console.log(authState,authAction)
    return(
        <div>
            {authState.user}
            <button
            onClick={()=>authAction.loginStateChange('shimil')}
            >Set user</button>
        </div>
    )

}

export default LoginPage