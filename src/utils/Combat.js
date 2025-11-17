// On importe les types depuis le contexte du jeu
// (en JS pur, pas besoin de 'type', juste import normal)
import { Character, Enemy } from '../contexts/GameContext';

/**
 * Structure qui stocke ce qui se passe pendant une attaque
 * @typedef {Object} CombatResult
 * @property {number} damage - Combien de dégâts on a fait
 * @property {string} message - Un texte pour décrire ce qui s'est passé
 * @property {number} [attackerMana] - Le mana qu'il reste après (optionnel)
 */

/**
 * Cette fonction calcule les dégâts quand quelqu'un attaque
 * @param {Character | Enemy} attacker - Celui qui attaque
 * @param {Character | Enemy} defender - Celui qui se défend
 * @param {boolean} useSpell - Est-ce qu'on utilise un sort ? Par défaut non
 * @returns {CombatResult}
 */
export function calculateDamage(attacker, defender, useSpell = false) {
  
  let damage = 0;
  let message = '';
  let attackerMana = attacker.mana; // On garde le mana actuel en mémoire
  
  // Si on veut lancer un sort et qu'on en a un
  if (useSpell && attacker.spell) {
    
    // On vérifie qu'il y a assez de mana
    if (attacker.mana >= attacker.spell.cost) {
      const rawDamage = attacker.spell.damage;
      
      // Les dégâts = puissance du sort - défense de l'adversaire
      // Mais ça peut pas descendre en dessous de 0
      damage = Math.max(0, rawDamage - defender.defense);
      
      // On déduit le coût du sort
      attackerMana = attacker.mana - attacker.spell.cost;
      
      message = `${attacker.name} lance ${attacker.spell.name} et inflige ${damage} dégâts !`;
    } else {
      // Pas assez de mana, le sort rate
      message = `${attacker.name} n'a pas assez de mana pour lancer ${attacker.spell.name} !`;
      damage = 0;
    }
  } else {
    // Attaque physique classique
    const rawDamage = attacker.damage;
    
    // Même calcul : dégâts - défense, minimum 0
    damage = Math.max(0, rawDamage - defender.defense);
    
    message = `${attacker.name} attaque ${defender.name} et inflige ${damage} dégâts !`;
  }
  
  return { damage, message, attackerMana };
}

/**
 * L'IA qui décide ce que fait l'ennemi
 * @param {Enemy} enemy - L'ennemi
 * @param {Character} player - Le joueur
 * @returns {'attack' | 'spell'}
 */
export function enemyAI(enemy, player) {
  
  // Si l'ennemi a un sort et assez de mana
  if (enemy.spell && enemy.mana >= enemy.spell.cost) {
    // 60% de chance d'utiliser le sort, 40% d'attaquer normalement
    return Math.random() > 0.4 ? 'spell' : 'attack';
  }
  
  // Sinon, attaque normale
  return 'attack';
}

/**
 * On a gagné si tous les ennemis sont morts
 * @param {Enemy[]} enemies - Liste des ennemis
 * @returns {boolean}
 */
export function checkVictory(enemies) {
  // Vérifie que tous les ennemis ont 0 HP ou moins
  return enemies.every(e => e.health <= 0);
}

/**
 * On a perdu si le joueur est mort
 * @param {Character} player - Le joueur
 * @returns {boolean}
 */
export function checkDefeat(player) {
  return player.health <= 0;
}

/**
 * Tentative de fuite du combat
 * @returns {boolean} - true si la fuite réussit, false sinon
 */
export function attemptFlee() {
  // 50/50 de réussir à s'enfuir
  return Math.random() > 0.5;
}