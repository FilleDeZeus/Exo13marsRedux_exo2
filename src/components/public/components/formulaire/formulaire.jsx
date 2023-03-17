import React, { useState, useContext } from 'react';
//importation appContext
import { AppContext } from '../../../../appContext/appContext.jsx';
// importation du slice du fromulaire
import { formulaireSlice } from '../../../../slices/formulaireSlice.jsx';
//importation du style sass
import './public/sass/formulaire.scss'

// creation et exportation du composant Formulaire
export const Formulaire = () => {
    // recuperation du store de l'appContext
    const { store } = useContext(AppContext);
    // etat du user correspond un objet 
    const [user, setUser] = useState({ nom: '', prenom: '', age: '' });

    // fct qui valider le formulaire
    const valider = (e) => {
        // annule le rechargement de la page
        e.preventDefault();
        // elle cree à new user
        const newUser = {
            id: Date.now(), // avec un id unique
            ...user //et les valeur du formulaire voir plus haut (etat)
        };
        //ajout de l'user dans le tab du slice
        store.dispatch(formulaireSlice.actions.ajouter(newUser));
        // mis a jour de l'etat User
        setUser({ nom: '', prenom: '', age: '' });
};
    // fct qd les input form change
    const changer = (e) => {
        // recupere 
        const { name, value } = e.target;
        // met à jour l'etat User en ajoutant le new user au ancien
        setUser((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <form onSubmit={valider}>
            <label htmlFor="nom">Nom:</label>
            <input type="text" id="nom" name="nom" value={user.nom} onChange={changer} />
            <label htmlFor="prenom">Prénom:</label>
            <input type="text" id="prenom" name="prenom" value={user.prenom} onChange={changer} />
            <label htmlFor="age">Âge:</label>
            <input type="number" id="age" name="age" value={user.age} onChange={changer} />
            <button type="submit">Ajouter</button>
        </form>
    );
};
