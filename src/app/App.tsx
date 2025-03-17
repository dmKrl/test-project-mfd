/* eslint-disable react/button-has-type */
import { Header } from 'widgets/Header/ui/Header';
import { MainPage } from 'pages/MainPage/MainPage';
import { Footer } from 'widgets/Footer/ui/Footer';
import './styles/index.scss';

export const App = () => {
    return (
        <div className='app'>
            <div className='content-page'>
                <Header />
                <MainPage />
                <Footer />
            </div>
        </div>
    );
};
