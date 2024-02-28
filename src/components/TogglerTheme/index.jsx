import { useTheme } from './../../hooks/useTheme.jsx';
import { themes } from '../../context/theme-context.jsx';
import { useState }from 'react';
import Toggler from '../Toggler/index.jsx'

const TogglerTheme = () => {

    const { theme, setTheme } = useTheme();

    const [checked, setChecked] = useState(false);

    const handleToggle = () => {

        setChecked(prevChecked => !prevChecked);

        const newTheme = theme === themes.light ? themes.dark : themes.light;

        setTheme(newTheme);
    };

    return (

        <Toggler
            checked={checked}
            onChange={handleToggle}
        />

    );
};

export default TogglerTheme;
