import { FC } from 'react';
import { AppLink } from 'shared/AppLink/ui/AppLink';
import LogoFooter from 'widgets/assets/logo-footer.svg';
import { FooterNavbar } from 'widgets/Navabar';

interface FooterProps {
}

export const Footer: FC<FooterProps> = (props) => {
    return (
        <div className='footer'>
            <div className='footeUp'>
                <AppLink to='/'><LogoFooter /></AppLink>
                <FooterNavbar />
            </div>
            <div className='footeUp'>
                <p>© 2023 EATLY All Rights Reserved.</p>
            </div>
        </div>
    );
};
