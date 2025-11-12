import "./CharacterCard.scss";
import {
  User,
  Zap,
  Sword,
  Shield,
  Coins,
  Flame,
  Sparkles,
  Heart,
} from "lucide-react";

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img
        className="character-avatar"
        src={character.picture}
        alt={character.name}
      />
      <h3 className="character-name">{character.name}</h3>
      <p className="character-class">{character.class}</p>
      <div className="character-stats">
        <div className="stat-row health">
          <div className="stat-icon health">
            <User size={14} />
          </div>
          <span className="stat-value">{character.healthMax}</span>
        </div>
        <div className="stat-row mana">
          <div className="stat-icon mana">
            <Zap size={14} />
          </div>
          <span className="stat-value">{character.manaMax}</span>
        </div>
        <div className="stat-row attack">
          <div className="stat-icon attack">
            <Sword size={14} />
          </div>
          <span className="stat-value">{character.damage}</span>
        </div>
        <div className="stat-row defense">
          <div className="stat-icon defense">
            <Shield size={14} />
          </div>
          <span className="stat-value">{character.defense}</span>
        </div>
        <div className="stat-row gold">
          <div className="stat-icon gold">
            <Coins size={14} />
          </div>
          <span className="stat-value">{character.fortune}</span>
        </div>
      </div>
      {character.spell && (
          <div className="spells-section">
            <div className="spells-title">
              <Flame
                size={16}
                style={{ marginRight: "0.5rem", color: "#ff6b6b" }}
              />
              {character.spell.name}
            </div>
            <div className="spell-item">
              <Sparkles
                size={14}
                style={{ marginRight: "0.5rem", color: "#a78bfa" }}
              />
              <span className="spell-cost">{character.spell.amount}</span>
            </div>
            <div className="spell-item">
              <Heart
                size={14}
                style={{ marginRight: "0.5rem", color: "#4dabf7" }}
              />
              <span className="spell-cost">{character.spell.manaCost}</span>
            </div>
          </div>
        )}
    </div>
  );
}

export default CharacterCard;
