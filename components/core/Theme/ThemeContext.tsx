import React, {createContext, ReactNode, useContext, useState} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import {darkTheme, lightTheme} from '@/theme/theme';
import {ThemeMode, ThemeContext} from "@core/Theme/Theme.types";


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>('dark');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    const theme = mode === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};