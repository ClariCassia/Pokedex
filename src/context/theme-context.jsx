import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#212121',
        background: '#efffff'
    },
    dark: {
        color: '#efffff',
        background: '#212121'
    }
}

export const ThemesContext = createContext();

export const ThemesProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)
    
    return (
        <ThemesContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemesContext.Provider>
    )
}
