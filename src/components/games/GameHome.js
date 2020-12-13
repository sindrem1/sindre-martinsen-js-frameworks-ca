import React from "react";
import Heading from "../heading/Heading";
import GameList from "./GameList"

function FrontPage() {
    return (
        <>
            <Heading content="Games" />
            <GameList />
        </>
    )
}

export default FrontPage;