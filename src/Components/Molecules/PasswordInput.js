import React from "react";
import "./Input.css";
import PasswordIcon from "../Atoms/LockIcon";

function PasswordInput() {
    return (
        <div className={"rectangle"}>
            <div className={"centerImage"}>
                <PasswordIcon width={"40px"} height={"40px"} color={"white"}/>
                <input type="password" name="password" placeholder={"Password"} className={"input"}/>
            </div>
        </div>
    );
}

export default PasswordInput;