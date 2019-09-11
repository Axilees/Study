import * as React from "react";

export const themes = {
    primary:{
        color : "primary"
    },
    secondary:{
        color: "secondary"
    }
}

export const ThemeContext = React.createContext(
    themes.primary
);
