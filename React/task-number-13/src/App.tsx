import React, {Component} from "react";

interface Props {
    locale: string;
}

class App extends Component<Props, {}> {

    private locales = {
        "en": "English",
        "ru": "Russian"
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            locale: navigator.language
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hello World</h1>
                </header>
                <p className="App-intro">
                    To change the language of the application, select one of the supported languaged in this dropdown
                </p>
                <select>
                    {Object.keys(this.locales).map((key) => {
                        return <option value={key} key={key}>{this.locales[key]}</option>;
                    })}
                </select>
            </div>
        );
    }
}

export default App;