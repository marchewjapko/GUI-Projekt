import React from "react";
import "./Input.css";
import AccountIcon from "../Atoms/AccountIcon";

function UsernameInput() {
    return (
        <div className={"rectangle"}>
            <div className={"centerImage"}>
                <AccountIcon width={"40px"} height={"40px"} color={"white"} backgroundColor={"rgba(0, 0, 0, 0)"} border={"0"}/>
                <input type="text" name="name" placeholder={"Username"} className={"input"}/>
            </div>
        </div>
    );
}

export default UsernameInput;