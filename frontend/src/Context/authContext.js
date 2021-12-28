import react, {createContext, useState, useEffect} from "react";

import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }){
    const { loading, authenticated, handleLogin, handleLogout, handleRegister } = useAuth()

    return(
        <Context.Provider value={{ loading, authenticated, handleLogin, loading, handleLogout, handleRegister }}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider};