import {
    FC,
    ReactNode,
    useMemo,
    useState,
} from 'react';
import { BurgerContext } from '../useBurger/BurgerContext';

interface BurgerProviderProps {
    children: ReactNode;
}

export const BurgerProvider: FC<BurgerProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const defaultProps = useMemo(() => ({
        isOpen,
        setIsOpen,
    }), [isOpen]);

    return (
        <BurgerContext.Provider value={defaultProps}>
            {children}
        </BurgerContext.Provider>
    );
};
