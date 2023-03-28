import {createContext, useContext, useEffect, useState} from 'react';
import {AuthContext} from "./AuthContext";



export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        token:  null,
    });

    useEffect(()=>{
        setAuthState({
            isAuthenticated: localStorage.getItem("isAuthenticated")== "true"? true: false,
            token:  localStorage.getItem("token"),
        })

    },[])



    const login = (token) =>{
        setAuthState({
            isAuthenticated: true,
            token: token,
        });
        localStorage.setItem("isAuthenticated",true)
             localStorage.setItem("token",token)

    }

    const logout = () =>{
        setAuthState({
            isAuthenticated: false,
            token: null,
        });
        localStorage.setItem("isAuthenticated",false)
        localStorage.setItem("token",null)
    }


    const contextValue = {
        authState,
        login,
        logout,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
