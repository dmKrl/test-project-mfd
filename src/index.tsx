import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BurgerProvider } from 'widgets/lib/context/BurgerProvider/BurgerProvider';
import { App } from './app/App';

render(
    <BrowserRouter>
        <BurgerProvider>
            <App />
        </BurgerProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
// The application was developed based on an exclusive course by the author of the YouTube channel UlbiTV
