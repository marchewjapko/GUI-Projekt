import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import MainPage from "./Components/Pages/MainPage";
import LogInPage from "./Components/Pages/LogInPage";

import loginPageTranslationEN from "./translations/en/loginPageTranslation.json";
import loginPageTranslationPL from "./translations/pl/loginPageTranslation.json";
import mainPageTranslationEN from "./translations/en/mainPageTranslation.json";
import mainPageTranslationPL from "./translations/pl/mainPageTranslation.json";
import ordersWidgetTranslationEN from "./translations/en/orderWidgetTranslation.json";
import ordersWidgetTranslationPL from "./translations/pl/orderWidgetTranslation.json";
import headTranslationEN from "./translations/en/headTranslation.json";
import headTranslationPL from "./translations/pl/headTranslation.json";

i18next.init({
    interpolation: {escapeValue: false},
    lng: 'en',
    resources: {
        en: {
            loginPage: loginPageTranslationEN,
            mainPage: mainPageTranslationEN,
            ordersWidget: ordersWidgetTranslationEN,
            head: headTranslationEN
        },
        pl: {
            loginPage: loginPageTranslationPL,
            mainPage: mainPageTranslationPL,
            ordersWidget: ordersWidgetTranslationPL,
            head: headTranslationPL
        },
    },
});

document.documentElement.setAttribute("data-theme", "dark");
localStorage.setItem("useDarkMode", "true");

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogInPage/>}/>
                <Route path="main-page" element={<MainPage/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem", color: "white", textAlign: "center"}}>
                            <h1> 404 Not found </h1>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    </I18nextProvider>,
    document.getElementById('root')
);