import classNames from 'classnames';
import { FC } from 'react';
import { SliderShow } from 'widgets/SliderShow';
import { Info } from 'widgets/Info/ui/Info';
import cls from './MainPage.module.scss';

interface MainPageProps {
}

export const MainPage: FC<MainPageProps> = () => {
    return (
        <div className={classNames('', {}, [cls.mainPage])}>
            <Info />
            <SliderShow />
        </div>
    );
};
