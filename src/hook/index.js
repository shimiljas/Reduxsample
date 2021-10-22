import React from 'react';
import {AuthProvider} from './AuthContext'
import LoginPage from './LoginPage'
const ContextApp=()=>{
    return(
                <AuthProvider>
                 <LoginPage/>
                </AuthProvider>
    )

}

export default ContextApp