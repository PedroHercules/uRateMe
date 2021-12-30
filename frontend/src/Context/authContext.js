import {createContext} from "react";

import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }){
    const { loading, authenticated, handleLogin, handleLogout, handleRegister, user } = useAuth()

    return(
        <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout, handleRegister, user }}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider};