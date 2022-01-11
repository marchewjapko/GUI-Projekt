import React from "react";
import "./MainPage.js.css"
import Head from "../Molecules/Head";
import {useTranslation} from "react-i18next";
function MainPage() {
    const {t, i18n} = useTranslation(['mainPage']);
    return(
      <div className={"mainPage"}>
          <Head/>
          <h1 className={"welcomeText"}>{t('welcomeText')} </h1>
      </div>
    );
}
export default MainPage;