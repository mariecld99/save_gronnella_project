// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './index.scss';

import CharacterCard from "../../components/CharacterCard/CharacterCard.jsx";
import { Button } from "../../components/Button/Button.jsx";

// import { useGame } from '../contexts/GameContext';

import charactersData from "../../data/characters.json";
// import  questsData from '../data/quests.json';

export function HomePage() {
  // const navigate = useNavigate();
  // const { selectCharacter, setCurrentQuest, gameState } = useGame();
  // const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  // Sélection d'un personnage
  // const handleCharacterSelect = (characterId) => {
  //   setSelectedCharacterId(characterId);
  // };

  // Démarrer l'aventure
  // const handleStartAdventure = () => {
  //   if (selectedCharacterId === null) return;

  //   const character = charactersData.find(c => c.id === selectedCharacterId);
  //   if (character) {
  //     // selectCharacter(character);
  //     // setCurrentQuest(questsData[0]);
  //     navigate('/quete'); // Redirection vers la page de la quête
  //   }
  // };

  return (
    <div class="container">
      <div class="title">
        <h2 class="subtitle">IL FAUT SAUVER GRONNELLA</h2>
        <h1 class="main-title">Choisissez votre personnage</h1>
      </div>
      <div class="characters-grid">
        {charactersData.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            // onClick={() => handleCharacterSelect(character.id)}
            // selected={selectedCharacterId === character.id}
          />
        ))}
      </div>

      <div class="start-button">
        <Button
          link="/quete"
          text="Commencer l'aventure"
          // onClick={handleStartAdventure}
        />
      </div>
    </div>
  );
}
