import React from 'react';
import { useSelector } from 'react-redux';
import './public/sass/tableau.scss'

export const Tableau = () => {
    const users = useSelector(state => state.formulaire.users);

    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Âge</th>
                </tr>
            </thead>
        <tbody>
            {users.map(info => (
            <tr key={info.id}>
                <td>{info.nom}</td>
                <td>{info.prenom}</td>
                <td>{info.age}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
};