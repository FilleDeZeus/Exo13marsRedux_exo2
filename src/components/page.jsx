import React from 'react';
import { AppContextProvider } from '../appContext/appContextProvider';
import { Formulaire } from './public/components/formulaire/formulaire';
import { Tableau } from './public/components/tableau/tableau';
import './public/sass/page.scss'

export const Page = () => {
    return (
        <div className="page">
            <AppContextProvider>
                <p>Ceci est ma page d'exercice avec @reduxjs/toolkit Exercice 2</p>
                <Formulaire />
                <Tableau />
            </AppContextProvider>
        </div>
    );
};





