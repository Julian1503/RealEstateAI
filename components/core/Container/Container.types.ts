export interface SectionContainerProps {
    id?: string;
    bgcolor?: string;
    children: React.ReactNode;
    py?: number;
    px?: number;
    sx?: any;
    maxWidth?: string | number;
    useContainer?: boolean;
}

export interface SectionHeadingProps {
    title?: string;
    subtitle?: string;
    mb?: number;
    titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
    subtitleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
    subtitleColor?: string;
    titleFontWeight?: string | number;
    titleColor?: string;
    fontSize?: any;
    textAlign?: 'left' | 'center' | 'right';
    sx?: any;
}

export interface SectionProps {
    id?: string;
    bgcolor?: string;
    maxWidth?: string | number;
    py?: number;
    px?: number;
    sx?: any;
    useContainer?: boolean;
    title?: string;
    subtitle?: string;
    heading?: Partial<SectionHeadingProps>;
    children?: React.ReactNode;
}