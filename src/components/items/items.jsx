import "../../index.scss";

/**
 * Items's properties
 * @typedef {object} ItemsProps
 * @property {string} name - Nom de l'élément affiché.
 * @property {string} picture - Chemin vers l'image de l'élément.
 * @property {number} price - Prix de l'élément.
 * @property {boolean} [onUse=false] - False indique une potion de santé, True indique une potion de magie.
 * 
 * Items component
 * @param {ItemsProps} props
 * @returns {JSX.Element}
 */

function Items({ name, picture, price, onUse }) {
  return (
    <div className="item" onClick={onUse}>
      <img
         src={picture}
        alt={name.price} 
        title={name}
        className="item__image"
       />
     <span className="item__price">{price}</span>
    </div>
  );
}

export default Items;