export interface TabGroupProps {
    tabs: string[];
    active: string;
    onChange: (tab: string) => void;
}
