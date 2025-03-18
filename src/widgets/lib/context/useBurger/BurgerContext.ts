import { createContext } from 'react';

export interface BurgerContextProps {
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
}

export const BurgerContext = createContext<BurgerContextProps>({

});
