import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDefault } from './LayoutDefault';

interface ButtonDefaultProps {
    label: string;
    as?: any;
    href?: string;
    to?: string;
    onClick?: () => void;
}

interface ButtomConfirmProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    action: (event: React.FormEvent) => void;
    bigButton?: boolean;
    lessRound?: boolean;
    style?: React.CSSProperties;
}

export const ButtomConteudo: React.FC<ButtonDefaultProps> = ({ label, as, href, to, onClick }) => {
    const Componente = to ? Link : as || 'button';
    const propsComponente = to ? { to } : href ? { href } : { onClick };

    return (
        <LayoutDefault as={Componente} {...propsComponente}>
            {label}
        </LayoutDefault>
    );
};

export const ButtomConfirm: React.FC<ButtomConfirmProps> = ({
    action,
    label,
    bigButton = false,
    lessRound = false,
    style,
}) => {
    return (
        <button
            onClick={action}
            style={{
                padding: bigButton ? '15px 30px' : '10px 20px',
                borderRadius: lessRound ? '5px' : '20px',
                ...style,
            }}
        >
            {label}
        </button>
    );
};
