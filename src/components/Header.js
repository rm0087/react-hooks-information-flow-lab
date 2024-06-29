import React from "react";

export default function Header({darkState, onDarkModeClick}){

    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {darkState ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}