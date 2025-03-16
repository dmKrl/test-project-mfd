import { AppLink, LinkOptions } from 'shared/AppLink/ui/AppLink';
import { FC } from 'react';

interface FooterNavbarProps {
}

export const FooterNavbar: FC<FooterNavbarProps> = (props) => {
    return (
        <div className='footerNavbar'>
            <AppLink theme={LinkOptions.SECONDARY} to='/'>Privacy Policy</AppLink>
            <AppLink theme={LinkOptions.SECONDARY} to='/'>Term & Conditions</AppLink>
            <AppLink theme={LinkOptions.SECONDARY} to='/'>About Us</AppLink>
            <AppLink theme={LinkOptions.SECONDARY} to='/'>Contact</AppLink>
        </div>
    );
};
