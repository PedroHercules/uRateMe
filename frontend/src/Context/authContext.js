import react, {createContext, useState, useEffect} from "react";

import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }){
    const { loading, authenticated, handleLogin, handleLogout } = useAuth()

    return(
        <Context.Provider value={{ loading, authenticated, handleLogin, loading, handleLogout }}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider};