import { FC } from 'react';
import { Info } from 'widgets/Info/ui/Info';

interface MainPageProps {
}

export const MainPage: FC<MainPageProps> = (props) => {
    return (
        <div>
            <Info />
        </div>
    );
};
