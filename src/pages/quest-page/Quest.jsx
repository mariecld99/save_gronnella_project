import {useLocalStorage} from '../hooks/useLocalStorage';
import questData from '../data/quests';
import Card from '../../components/card/card';
import Button from '../../components/Button/Button';

// je demande l'id de la quête courante à context
// la quête par son id à data access
// j'importe les components dont j'ai besoin (card et button) en leur passant les props dont j'ai besoin

export default function Quest() {

    const {currentQuest} = useLocalStorage();

    if(!currentQuest) {
        return (
            <div className="quest-page">
                <h1>Cette quête n'existe pas.</h1>
            </div>
        );
    }

    const {
        title, 
        description,
        objective,
        reward,
        clue,
        showClue
    } = currentQuest;

    return (
        <div className="quest-page">
            <Card
                title={title}
                description={description}
                objective={objective}
                reward={reward}
                clue={clue}
                showClue={showClue}
            />
            <Button
                link=
                text=
            />

            

        </div>
    )
}