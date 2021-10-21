import React,{useState,useReducer} from 'react'
import ComponentA from '../components/ComponentA'
const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };

export const AuthContext =React.createContext({})
export const ThemeContext=React.createContext({})
export const EmailContext=React.createContext(null)
const UseReducer=()=>{
    return(
        <EmailContext.Provider value="email">
        <ThemeContext.Provider value={themes}>
            <AuthContext.Provider value={{email:'iamshimil@gmail.com'}}>
            <ComponentA/>
            </AuthContext.Provider>
        </ThemeContext.Provider>
        </EmailContext.Provider>
    )
}

export default UseReducer
