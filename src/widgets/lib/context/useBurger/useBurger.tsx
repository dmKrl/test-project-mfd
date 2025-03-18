import { useContext } from 'react';
import { BurgerContext } from './BurgerContext';

interface UseBurgerResult {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const useBurger = (): UseBurgerResult => {
    const { isOpen, setIsOpen } = useContext(BurgerContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, toggleMenu };
};
