import React, {useState} from "react";
import {ReactComponent as UKIcon} from "../../Images/UK-Flag.svg";
import {ReactComponent as PolandIcon} from "../../Images/Poland-Flag.svg";
import Switch from "react-switch";
import {ReactComponent as Sun} from "../../Images/Sun.svg";
import {ReactComponent as Moon} from "../../Images/Moon.svg";
import {useTranslation} from "react-i18next";
import "./Head.js.css"

function Head(props) {
    const {i18n} = useTranslation();
    const [useEnglish, setUseEnglish] = useState(i18n.language === 'en');
    const [checked, setChecked] = useState(localStorage.getItem("useDarkMode") === "true");
    const languageClick = () => {
        setUseEnglish(!useEnglish)
        if(useEnglish) {
            i18n.changeLanguage('pl')
        } else {
            i18n.changeLanguage('en')
        }
    }
    const setDark = () => {
        localStorage.setItem("useDarkMode", "true");
        setChecked(true);
        document.documentElement.setAttribute("data-theme", "dark");
    };
    const setLight = () => {
        localStorage.setItem("useDarkMode", "false");
        setChecked(false);
        document.documentElement.setAttribute("data-theme", "light");
    };
    const toggleTheme = () => {
        if (localStorage.getItem("useDarkMode") === "true") {
            setLight();
        } else {
            setDark();
        }
        console.log(checked)
    };
    return(
        <div className={"head"}>
            <h1 className={"welcomeText"}>{props.headTitle} </h1>
            <button className={"languageButton"} onClick={languageClick}>
                {useEnglish === true && (<UKIcon className={"languageIcon"}/> )}
                {useEnglish === false && (<PolandIcon className={"languageIcon"}/> )}
            </button>
            <Switch
                checked={checked}
                onChange={toggleTheme}
                onColor="#505050"
                onHandleColor="#202020"
                offColor="#C4C4C4"
                offHandleColor="#FFFFFF"
                handleDiameter={25}
                height={35}
                width={75}
                boxShadow="0px 2px 2px rgba(0, 0, 0, 0.5)"
                activeBoxShadow="0px 2px 2px rgba(0, 0, 0, 0.5)"
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
    );
}
export default Head;