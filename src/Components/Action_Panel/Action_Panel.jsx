import React from "react";
import "./Action_Panel.scss";

/**
 * 
 * @param {object} ButtonProps
 * @param {string} ButtonProps.text   - Texte affiché par le bouton
 * @param {function} ButtonProps.Action - Fonction exécutée lors du clic sur le bouton
 * @returns {JSX.Element}
 */


const Action_Panel = ({ Action , text }) => {
  return (
    <button className="btn" onClick={Action}>
        {text}
    </button>
  );
};

export default Action_Panel;

