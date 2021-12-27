import React, {useContext} from "react";

import { Context } from '../Context/auth'

export default function Login() {

    const { autenticate } = useContext(Context);
    console.log(autenticate)

    return(
        <form>
            <input title="E-mail" type='email'></input>
            <input title="Password" type='password'></input>
            <button>Entrar</button>
        </form>
    )
}