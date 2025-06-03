import {NavLinkItem} from "@shared/Header";

export interface LogoProps {
    text?: string;
    iconColor?: string;
    fontSize?: string | number;
}

export interface MobileMenuButtonProps {
    onClick?: () => void;
    iconColor?: string;
}

export interface NavigationDrawerProps {
    open: boolean;
    onClose: () => void;
    links: NavLinkItem[];
    primaryButtonText: string;
    themeMode: 'light' | 'dark';
    toggleTheme: () => void;
    avatarSrc?: string;
    onLogout?: () => void;
}

export interface HeaderDesktopActionsProps {
    links: NavLinkItem[];
    avatarSrc?: string;
    primaryButtonText: string;
    themeMode: 'light' | 'dark';
    toggleTheme: () => void;
}

export interface NavLinksProps {
    links: NavLinkItem[];
}

export interface HeaderMobileActionsProps {
    onMenuClick: () => void;
}