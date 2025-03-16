import { AppLink, LinkOptions } from 'shared/AppLink/ui/AppLink';
import { FC } from 'react';
import cls from './FooterNavbar.module.scss';

interface FooterNavbarProps {
}

export const FooterNavbar: FC<FooterNavbarProps> = () => {
    return (
        <div className={cls.footerNavbar}>
            <AppLink theme={LinkOptions.SECONDARY} to='/'>Privacy Policy</AppLink>
            <AppLink theme={LinkOptions.SECONDARY} to='/'>Term & Conditions</AppLink>
            <AppLink theme={LinkOptions.SECONDARY} to='/'>About Us</AppLink>
            <AppLink theme={LinkOptions.SECONDARY} to='/'>Contact</AppLink>
        </div>
    );
};
