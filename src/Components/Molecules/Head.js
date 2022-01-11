import React, {useState} from "react";
import {ReactComponent as UKIcon} from "../../Images/UK-Flag.svg";
import {ReactComponent as PolandIcon} from "../../Images/Poland-Flag.svg";
import Switch from "react-switch";
import {ReactComponent as Sun} from "../../Images/Sun.svg";
import {ReactComponent as Moon} from "../../Images/Moon.svg";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import "./Head.js.css"

function Head() {
    const {t, i18n} = useTranslation('common');
    const [useEnglish, setUseEnglish] = useState(i18n.language === 'en');

    const [darkMode, setDarkMode] = useState(true);
    const languageClick = () => {
        setUseEnglish(!useEnglish)
        if(useEnglish) {
            i18n.changeLanguage('pl')
        } else {
            i18n.changeLanguage('en')
        }
    }
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

    return(
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
    );
}
export default Head;