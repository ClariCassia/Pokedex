import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#212121',
        background: '#efffff',
        boxShadow:  '7px 7px 5px #22212150',
    },
    dark: {
        color: '#efffff',
        background: '#212121',
        boxShadow:  '7px 7px 5px #000000dd',        
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
