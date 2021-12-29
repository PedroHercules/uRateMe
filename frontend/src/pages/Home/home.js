import React, {useContext} from "react";

import { Context } from "../../Context/authContext";

import PageHeader from "../../components/PageHeader/pageHeader";

export default function Home() {
    const { authenticated, handleLogout } = useContext(Context)
    console.log(authenticated)

    return (
        <div>
            <PageHeader/>
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}