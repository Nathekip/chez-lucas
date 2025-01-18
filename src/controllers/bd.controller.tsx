import React, { useState } from "react";
import { Bibliotheque, BandeDessinnee } from "../models/bd.model";
import { TableauBd } from "../views/bd.view";

export const BdController: React.FC = () => {
  const [bibliotheque] = useState(
    new Bibliotheque([
      new BandeDessinnee(
        "L'incroyable histoire d'Ulysse", 
        42, 
        "ulysse", 
        "Même Homère a honte de cette histoire...", 
        false, 
        "fa-horse-head"),
      new BandeDessinnee(
        "Une enquête à noël", 
        25, 
        "noel", 
        "Mais où est passé le père noël ?", 
        false, 
        "fa-sleigh"),
    ])
  );

  return (
    <div>
      <h2>Ma Bibliothèque</h2>
      <TableauBd liste_bd={bibliotheque.getListeBD()} />
    </div>
  );
};
