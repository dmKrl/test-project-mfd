import { FC } from 'react';
import { AppLink } from 'shared/AppLink/ui/AppLink';
import Instagram from 'widgets/assets/instagram.svg';
import Linkedin from 'widgets/assets/linkedin.svg';
import Facebook from 'widgets/assets/facebook.svg';
import Twitter from 'widgets/assets/twitter.svg';
import cls from './Social.module.scss';

export const Social: FC = () => {
    return (
        <div className={cls.social}>
            <AppLink to='/'><Instagram className={cls.socialIcon} /></AppLink>
            <AppLink to='/'><Linkedin className={cls.socialIcon} /></AppLink>
            <AppLink to='/'><Facebook className={cls.socialIcon} /></AppLink>
            <AppLink to='/'><Twitter className={cls.socialIcon} /></AppLink>
        </div>
    );
};
