/* eslint-disable react/button-has-type */
import { HeaderDesktop } from 'widgets/Header/HeaderDesktop/ui/HeaderDesktop';
import { HeaderMobile } from 'widgets/Header/HeaderMobile/ui/HeaderMobile';
import { MainPage } from 'pages/MainPage/MainPage';
import { Footer } from 'widgets/Footer/ui/Footer';
import './styles/index.scss';

export const App = () => {
    return (
        <div className='app'>
            <div className='content-page'>
                <HeaderDesktop />
                <HeaderMobile />
                <MainPage />
                <Footer />
            </div>
        </div>
    );
};
