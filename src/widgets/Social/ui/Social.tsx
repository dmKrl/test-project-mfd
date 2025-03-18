import { FC } from 'react';
import { AppLink, LinkOptions } from 'shared/AppLink/ui/AppLink';
import Instagram from 'widgets/assets/instagram.svg';
import Linkedin from 'widgets/assets/linkedin.svg';
import Facebook from 'widgets/assets/facebook.svg';
import Twitter from 'widgets/assets/twitter.svg';
import cls from './Social.module.scss';

export const Social: FC = () => {
    return (
        <div className={cls.social}>
            <AppLink to='/' theme={LinkOptions.SOCIAL_LINK}>
                <Instagram className={cls.socialIcon} />
            </AppLink>
            <AppLink to='/' theme={LinkOptions.SOCIAL_LINK}>
                <Linkedin className={cls.socialIcon} />
            </AppLink>
            <AppLink to='/' theme={LinkOptions.SOCIAL_LINK}>
                <Facebook className={cls.socialIcon} />
            </AppLink>
            <AppLink to='/' theme={LinkOptions.SOCIAL_LINK}>
                <Twitter className={cls.socialIcon} />
            </AppLink>
        </div>
    );
};
