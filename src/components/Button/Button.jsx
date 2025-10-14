import { Link } from "react-router";

/**
 * 
 * @typedef {object} ButtonProps
 * @param {Link} link Lien de redirection.
 * @param {HTMLElement} text Texte affiché par le bouton
 * @returns 
 */
function Button({link, text}) {
    function handleClick() {
        <Link to={link}></Link>
    }

    return (
        <button onClick={handleClick}>{text}</button>
    );
}

export default Button;