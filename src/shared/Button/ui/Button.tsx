import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';

export enum ButtonOptions {
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
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, themeButton } = props;

    return (
        <button type='button' className={classNames(cls.button, {}, [cls[themeButton]])}>
            {children}
        </button>
    );
};
