import { FC } from 'react';
import { AppLink } from 'shared/AppLink/ui/AppLink';
import { Button, ButtonOptions } from 'shared/Button/ui/Button';
import LogoHeader from 'widgets/assets/logo-header.svg';
import { HeaderNavbar } from 'widgets/Navabar';

interface HeaderProps {
}

export const Header: FC<HeaderProps> = (props) => {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <AppLink to='/'><LogoHeader /></AppLink>
                <HeaderNavbar />
            </div>
            <Button themeButton={ButtonOptions.PRIMARY}>Connect Wallet</Button>
        </div>
    );
};
