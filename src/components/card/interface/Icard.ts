import { ButtonTemplate } from "../../button/components/Interface/Ibutton";

export interface CardProps {
    title?: string;
    content?: string;
    img?: string;
    template?: string | null | undefined;
    className?: string;
    Style?: React.CSSProperties;
    children?: React.ReactNode;
    button?: { 
        icon?: string,
        label?: string,
        template?: ButtonTemplate,
    };
}