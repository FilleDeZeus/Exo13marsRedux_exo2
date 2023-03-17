import React from 'react';
// importation de appContext
import { AppContext } from './appContext';
// importation du store
import {store} from '../store.jsx'; 

// creation et exportation du appContextProvider 
export const AppContextProvider = ({ children }) => {
    return (
        
        <AppContext.Provider value={{ store }}>
            {children}
        </AppContext.Provider>
    );
};