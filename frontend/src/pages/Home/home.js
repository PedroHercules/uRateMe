import React, {useContext} from "react";

import { Context } from "../../Context/authContext";

import PageHeader from "../../components/PageHeader/pageHeader";

export default function Home() {
    const { authenticated, handleLogout, user } = useContext(Context)
    console.log(authenticated, user);

    return (
        <div>
            <PageHeader/>
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}