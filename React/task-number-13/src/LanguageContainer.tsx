import React, {Component} from "react";
import App from "./App";
import * as locale_ru from "react-intl/locale-data/ru";
import * as messages_ru from "translations/locales/ru.json";
import {addLocaleData, IntlProvider} from "react-intl";

addLocaleData([...locale_ru]);

interface State {
    locale: string;
}

const messages = {
    "en": null,
    "ru": messages_ru
};

class LanguageContainer extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            locale: "en"
        };
    }

    public changeLanguage = (locale: string) => {
        this.setState({
            locale
        });
    }

    public render() {
        const msg = messages[this.state.locale];

        return (
            <IntlProvider key={this.state.locale} locale={this.state.locale} messages={msg}>
                <App changeLanguage={this.changeLanguage} currentLocale={this.state.locale}/>
            </IntlProvider>
        );
    }
}

export default LanguageContainer;