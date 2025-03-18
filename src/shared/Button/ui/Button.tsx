import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';

export enum ButtonOptions {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    PRIMARY_INVERTED = 'primaryInverted',
    PRIMARY_CARD = 'primaryCard',
    PRIMARY_HEADER = 'primaryHeader',
    SECONDARY = 'secondary',
    SECONDARY_INVERTED = 'secondaryInverted',
}

interface ButtonProps {
    themeButton?: ButtonOptions,
    children: ReactNode,
    className?: string,
    onClick?: () => void,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        themeButton,
        onClick,
        className,
    } = props;

    return (
        <button
            type='button'
            className={classNames(cls.button, {}, [cls[themeButton], className])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
