import React, {useState} from "react";
import Switch from "react-switch";
import "./LogInPage.js.css"
import {ReactComponent as UKIcon} from "../../Images/UK-Flag.svg";
import {ReactComponent as AccountIcon} from "../../Images/Account.svg";
import {ReactComponent as PasswordIcon} from "../../Images/Lock.svg";
import {ReactComponent as ArrowRightIcon} from "../../Images/Arrow-Right.svg";
import {ReactComponent as Moon} from "../../Images/Moon.svg";
import {ReactComponent as Sun} from "../../Images/Sun.svg";
import {ReactComponent as PolandIcon} from "../../Images/Poland-Flag.svg";
import { useTranslation } from 'react-i18next';

function LogInPage() {
    const [useEnglish, setUseEnglish] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    };
    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };
    const toggleTheme = () => {
        if (darkMode) {
            setLight();
        } else {
            setDark();
        }
        setDarkMode(!darkMode);
    };
    if (darkMode) {
        setDark();
    } else {
        setLight();
    }
    const handleClick = () => {
        console.log("LOGIN")
    }
    const languageClick = () => {
        setUseEnglish(!useEnglish)
        if(useEnglish) {
            i18n.changeLanguage('pl')
        } else {
            i18n.changeLanguage('en')
        }
    }
    const {t, i18n} = useTranslation('common');
    return (
        <div className={"logInPage"}>
            <div className={"head"}>
                <button className={"languageButton"} onClick={languageClick}>
                    {useEnglish === true && (<UKIcon className={"languageIcon"}/> )}
                    {useEnglish === false && (<PolandIcon className={"languageIcon"}/> )}
                </button>
                <Switch
                    checked={darkMode}
                    onChange={toggleTheme}
                    onColor="#202020"
                    onHandleColor="#505050"
                    offColor="#D1D1D1"
                    offHandleColor="#FFFFFF"
                    handleDiameter={25}
                    height={35}
                    width={75}
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.5)"
                    activeBoxShadow="0px 4px 4px 10px rgba(0, 0, 0, 0.5)"
                    uncheckedIcon={
                        <div className={"switchIconDiv"}>
                            <Sun className={"switchIcon"}/>
                        </div>
                    }
                    checkedIcon={
                        <div className={"switchIconDiv"}>
                            <Moon className={"switchIcon"}/>
                        </div>
                    }
                    className="react-switch"
                />
            </div>
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
