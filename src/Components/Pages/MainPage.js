import React from "react";
import "./MainPage.js.css"
import Head from "../Molecules/Head";
import OrdersWidget from "../Organisms/OrdersWidget";
import {useTranslation} from "react-i18next";

function MainPage() {
    const {t} = useTranslation(['mainPage']);
    return (
        <div className={"mainPage"}>
            <div>
                <Head/>
            </div>
            <div className={"mainPageBody"}>
                <h1 className={"welcomeText"}>{t('welcomeText')} </h1>
                <OrdersWidget/><OrdersWidget/><OrdersWidget/><OrdersWidget/><OrdersWidget/><OrdersWidget/>
            </div>
        </div>
    );
}

export default MainPage;