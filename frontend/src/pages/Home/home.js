import React, {useContext} from "react";

import { Context } from "../../Context/authContext";

export default function Home() {
    const { authenticated, handleLogout } = useContext(Context)
    console.log(authenticated)

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}