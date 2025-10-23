import parse from 'html-react-parser';
import './index.scss'

/**
 * Card Component and properties
 * @param {object} CardProps
 * @param {string} CardProps.title - Titre de la quête.
 * @param {string} CardProps.description - Description de la quête.
 * @param {string} CardProps.objective - Objectif de la quête.
 * @param {number} CardProps.reward - Récompense de la quête.
 * @param {string} CardProps.clue - Indice pour la prochaine quête.
 * @param {boolean} CardProps.showClue - Avant la quête : false, après la quête : true.
 * @returns {JSX.Element}
 */

function Card({title, description, objective, reward, clue, showClue=false}){
    return (
        <div className="card">
            {showClue ? (
                <>
                    <p>{parse(clue)}</p>
                     <p className="reward">
                        <span className="reward__label">Vous avez récupéré</span> 
                        <span className="reward__value">{reward}</span>
                        <span className="reward__gold">golds.</span>
                    </p>
                </>
            ) : (
            <>
                <h3>{title}</h3>
                <div className="card__text">
                    <p>{parse(description)}</p>
                    <p>{objective}</p>
                </div>
            </>
            )}
        </div>
    );
}

export default Card;