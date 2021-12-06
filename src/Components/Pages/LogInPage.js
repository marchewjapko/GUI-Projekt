import React from "react";
import UsernameInput from "../Molecules/UsernameInput";
import PasswordInput from "../Molecules/PasswordInput";
import LogInButton from "../Atoms/LogInButton";
import AccountIcon from "../Atoms/AccountIcon";
import UKIcon from "../Atoms/UKIcon";
import DarkModeIcon from "../Atoms/DarkModeIcon";
import "./LogInPage.js.css"

function LogInPage() {
    const handleClick = () => {
        console.log()
    }
    return (
        <div className={"logInPage"}>
            <div className={"head"}>
                <UKIcon width={"60px"} height={"40px"} color={"black"}/>
                <DarkModeIcon width={"40px"} height={"40px"} color={"black"} backgroundColor={"white"}/>
            </div>
            <AccountIcon width={"100px"} height={"100px"} color={"black"} backgroundColor={"white"} border={'3'}/>
            <div className={"control"}>
                <UsernameInput/>
            </div>
            <div className={"control"}>
                <PasswordInput/>
            </div>
            <LogInButton handleClick={handleClick}/>
        </div>
    );
}

export default LogInPage;
