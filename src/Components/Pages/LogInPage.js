import React, {useState} from "react";
import "./LogInPage.js.css"
import {ReactComponent as AccountIcon} from "../../Images/Account.svg";
import {ReactComponent as PasswordIcon} from "../../Images/Lock.svg";
import {ReactComponent as ArrowRightIcon} from "../../Images/Arrow-Right.svg";
import { useTranslation } from 'react-i18next';

import Head from "../Molecules/Head";

import {useNavigate} from "react-router-dom"

function LogInPage() {
    const {t} = useTranslation(['loginPage']);
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/main-page");
    }
    return (
        <div className={"logInPage"}>
            <Head/>
            <AccountIcon className={"accountIconBig"}/>
            <div className={"rectangle"}>
                <div className={"centerImage"}>
                    <AccountIcon className={"accountIconSmall"}/>
                    <input type="text" name="name" placeholder={t('username')} className={"input"}/>
                </div>
            </div>
            <div className={"rectangle"}>
                <div className={"centerImage"}>
                    <PasswordIcon className={"passwordIcon"}/>
                    <input type="password" name="password" placeholder={t('password')} className={"input"}/>
                </div>
            </div>
            <button className={"loginButton"} onClick={handleClick}>
                <ArrowRightIcon className={"arrow"}/>
            </button>
        </div>
    );
}
export default LogInPage;
