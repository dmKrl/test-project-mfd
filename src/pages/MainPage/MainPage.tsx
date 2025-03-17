import classNames from 'classnames';
import { FC } from 'react';
import { SliderShow } from 'widgets/SliderShow';
import { Join } from 'widgets/Join';
import { Info } from 'widgets/Info/ui/Info';

interface MainPageProps {
}

export const MainPage: FC<MainPageProps> = () => {
    return (
        <div className={classNames('', {}, [])}>
            <Info />
            <SliderShow />
            <Join />
        </div>
    );
};
