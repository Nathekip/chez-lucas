import React from "react";
import { BandeDessinnee } from "../models/bd.model";

type TableauBdProps = {
  liste_bd?: BandeDessinnee[];
};

export const TableauBd: React.FC<TableauBdProps> = ({ liste_bd }) => {
  if (!liste_bd || liste_bd.length === 0) {
    return <h4>Pas de BD !</h4>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Href</th>
          <th>Nombre de pages</th>
          <th>Résumé</th>
        </tr>
      </thead>
      <tbody>
        {liste_bd.map((bd, index) => (
          <tr key={index}>
            <td>{bd.nom}</td>
            <td>{bd.href}</td>
            <td>{bd.nbPages}</td>
            <td>{bd.resume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
