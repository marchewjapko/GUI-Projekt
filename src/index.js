import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import loginPageTranslationEN from "./translations/en/loginPageTranslation.json";
import loginPageTranslationPL from "./translations/pl/loginPageTranslation.json";
import mainPageTranslationEN from "./translations/en/mainPageTranslation.json";
import mainPageTranslationPL from "./translations/pl/mainPageTranslation.json";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MainPage from "./Components/Pages/MainPage";
import LogInPage from "./Components/Pages/LogInPage";

i18next.init({
    interpolation: {escapeValue: false},
    lng: 'en',
    resources: {
        en: {
            loginPage: loginPageTranslationEN,
            mainPage: mainPageTranslationEN
        },
        pl: {
            loginPage: loginPageTranslationPL,
            mainPage: mainPageTranslationPL
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogInPage/>}/>
                <Route path="MainPage" element={<MainPage/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem", color: "white"}}>
                            <h1> 404 Not found </h1>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    </I18nextProvider>,
    document.getElementById('root')
);