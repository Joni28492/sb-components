/// <reference types="react" />
import './page.css';
declare type User = {
    name: string;
};
export interface PageProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Page: ({ user, onLogin, onLogout, onCreateAccount }: PageProps) => JSX.Element;
export {};
