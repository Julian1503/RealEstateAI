import {createTheme, PaletteOptions as MuiPaletteOptions} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteBackground {
        section?: string;
        cardAlt?: string;
        grey?: string;
    }

    interface PaletteOptions extends MuiPaletteOptions {
        background?: Partial<PaletteBackground>;
    }
}

const darkColors = {
    primaryMain: '#00aa94',
    primaryLight: '#00e5c8',
    primaryDark: '#007d6b',
    secondaryMain: '#f5a623',
    secondaryLight: '#ffbc57',
    secondaryDark: '#d48c0f',
    darkBackground: '#020925',
    paperBackground: '#070e33',
    sectionBackground: '#000038',
    greyBackground: '#2A2A3A',
    cardAltBackground: '#070e33',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.7)',
    divider: 'rgba(255,255,255,0.05)'
};

const lightColors = {
    primaryMain: '#00aa94',
    primaryLight: '#4fdbc8',
    primaryDark: '#007d6b',
    secondaryMain: '#f5a623',
    secondaryLight: '#ffbc57',
    secondaryDark: '#d48c0f',
    darkBackground: '#f8f9fa',
    paperBackground: '#ffffff',
    sectionBackground: '#f0f2f5',
    greyBackground: '#e9ecef',
    cardAltBackground: '#ffffff',
    textPrimary: '#1a1a2e',
    textSecondary: 'rgba(0,0,0,0.7)',
    divider: 'rgba(0,0,0,0.09)'
};

export const createCustomTheme = (mode = 'dark') => {
    const colors = mode === 'dark' ? darkColors : lightColors;

    return createTheme({
        palette: {
            mode: mode as 'light' | 'dark',
            primary: {
                main: colors.primaryMain,
                light: colors.primaryLight,
                dark: colors.primaryDark,
            },
            secondary: {
                main: colors.secondaryMain,
                light: colors.secondaryLight,
                dark: colors.secondaryDark,
            },
            background: {
                default: colors.darkBackground,
                paper: colors.paperBackground,
                section: colors.sectionBackground,
                grey: colors.greyBackground,
                cardAlt: colors.cardAltBackground,
            },
            divider: colors.divider,
            text: {
                primary: colors.textPrimary,
                secondary: colors.textSecondary,
            },
        },
        typography: {
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
            h1: { fontWeight: 700, fontSize: '3rem' },
            h2: { fontWeight: 700 },
            h3: { fontWeight: 600 },
            h4: { fontWeight: 600 },
            h5: { fontWeight: 500 },
            h6: { fontWeight: 500 },
            body1: { fontSize: '1rem' },
            body2: { fontSize: '0.875rem' },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        borderColor: colors.primaryLight,
                        '&:hover': {
                            backgroundColor: mode === 'dark'
                                ? 'rgba(0, 229, 200, 0.1)'
                                : 'rgba(0, 170, 148, 0.08)',
                            borderColor: colors.primaryLight,
                        },
                        textTransform: 'none',
                        fontWeight: 500,
                        padding: '10px 20px',
                        fontSize: '1rem',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        border: `1px solid ${colors.divider}`,
                        borderRadius: 12,
                        backgroundColor: colors.cardAltBackground,
                        boxShadow: mode === 'dark'
                            ? '0 8px 16px rgba(0,0,0,0.2)'
                            : '0 2px 10px rgba(0,0,0,0.05)',
                    },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: mode === 'dark' ? '#010b2c' : '#ffffff',
                        borderRight: `1px solid ${colors.divider}`,
                    },
                },
            },
            MuiLink: {
                styleOverrides: {
                    root: {
                        textDecoration: 'none',
                        color: colors.primaryMain,
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    },
                },
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        color: colors.primaryMain,
                    },
                },
            },
        },
    });
};

export const darkTheme = createCustomTheme('dark');
export const lightTheme = createCustomTheme('light');