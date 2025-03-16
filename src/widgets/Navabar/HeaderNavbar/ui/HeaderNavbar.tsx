import { AppLink, LinkOptions } from 'shared/AppLink/ui/AppLink';
import { FC } from 'react';

interface HeaderNavbarProps {
}

export const HeaderNavbar: FC<HeaderNavbarProps> = (props) => {
    return (
        <div className='headerNavbar'>
            <AppLink theme={LinkOptions.PRIMARY} to='/'>DISCOVER</AppLink>
            <AppLink theme={LinkOptions.PRIMARY} to='/'>CREATORS</AppLink>
            <AppLink theme={LinkOptions.PRIMARY} to='/'>SELL</AppLink>
            <AppLink theme={LinkOptions.PRIMARY} to='/'>STATS</AppLink>
        </div>
    );
};
