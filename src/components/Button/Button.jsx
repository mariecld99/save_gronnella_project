import { useNavigate } from "react-router";

/**
 * 
 * @param {object} ButtonProps
 * @param {string} ButtonProps.link - Lien de redirection.
 * @param {string} ButtonProps.text - Texte affiché par le bouton
 * @returns {JSX.Element}
 */
export function Button({link, text}) {
    const navigate = useNavigate();

    return (
        <button className="btn" onClick={() => navigate(link)}>{text}</button>
    );
}