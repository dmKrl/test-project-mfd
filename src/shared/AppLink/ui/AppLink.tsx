import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum LinkOptions {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    UNIQUE = 'unique',
    UNIQUE_BLACK = 'uniqueBlack',
    CLEAR = 'clear',
}

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    theme?: LinkOptions,
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { children, to, theme } = props;
    return (
        <Link to={to} className={classNames(cls.appLink, {}, [cls[theme]])}>
            {children}
        </Link>
    );
};
