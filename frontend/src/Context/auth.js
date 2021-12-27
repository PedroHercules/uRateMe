import react, {createContext} from "react";

const Context = createContext();

function AuthProvider({ children }){
    return(
        <Context.Provider value={{ autenticate: false}}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider};