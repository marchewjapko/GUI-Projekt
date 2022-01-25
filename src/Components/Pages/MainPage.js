import React from "react";
import "./MainPage.js.css"
import Head from "../Molecules/Head";
import OrdersWidget from "../Organisms/OrdersWidget";
import ProductRatingWidget from "../Organisms/ProductRatingWidget";
import SalesWidget from "../Organisms/SalesWidget";
import {useTranslation} from "react-i18next";

function MainPage() {
    const {t} = useTranslation(['mainPage']);
    return (
        <div className={"mainPage"}>
            <div>
                <Head headTitle={t('mainPageTitle')}/>
            </div>
            <div className={"mainPageBody"}>
                <div className={"grid"}>
                    <div className={"elem1"}>
                        <OrdersWidget/>
                    </div>
                    <div className={"elem2"}>
                        <ProductRatingWidget/>
                    </div>
                    <div className={"elem3"}>
                        <SalesWidget/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;