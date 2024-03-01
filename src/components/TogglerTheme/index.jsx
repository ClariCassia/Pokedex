import React, { useState } from 'react';
import Toggler from '../Toggler';
import { useTheme } from '../../hooks/useTheme';
import { themes } from '../../context/theme-context';

const TogglerTheme = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(theme === themes.dark);

  const handleToggle = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
    setChecked(!checked);
  };

  return <Toggler checked={checked} onChange={handleToggle} />;
};

export default TogglerTheme;
