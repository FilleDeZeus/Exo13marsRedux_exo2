import React from 'react';
import { Provider } from 'react-redux';
// importation de appContext
import { AppContext } from './appContext';
// importation du store
import {store} from '../store.jsx'; 

// creation et exportation du appContextProvider 
export const AppContextProvider = ({ children }) => {
    return (
    <Provider store={store}>
        <AppContext.Provider value={{ store }}>
            {children}
        </AppContext.Provider>
    </Provider>

    );
};