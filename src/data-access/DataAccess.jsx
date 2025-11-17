import characters from '../data/characters.json';
import combats from '../data/combats.json';
import creatures from '../data/creatures.json';
import items from '../data/items.json';
import npcs from '../data/npcs.json';
import quests from '../data/quests.json';

// Récupérer toutes les données d'un type (fonction de base)
export const getAll = (type) => {
    const dataMap = {
        characters,
        combats,
        creatures,
        items,
        npcs,
        quests,
    };
    return dataMap[type] || [];
};

// Récupérer un élément par son ID pour un type donné
export const getById = (type, id) => {
    const data = getAll(type);
    return data.find(item => item.id === id);
};

