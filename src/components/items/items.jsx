
/**
 * Items's properties
 * @param {object} ItemsProps
 * @param {string} ItemsProps.name - Nom de l'élément affiché.
 * @param {string} ItemsProps.picture - Chemin vers l'image de l'élément.
 * @param {number} ItemsProps.price - Prix de l'élément.
 * @param {boolean} [ItemsProps.onUse=false] - False indique une potion de santé, True indique une potion de magie.
 * @param {boolean} ItemsProps.isPriceDisplayed - True = affiche le prix
 * 
 * @returns {JSX.Element}
 */

function Items({ name, picture, price, onUse, isPriceDisplayed }) {
  return (
    <div className="item" onClick={onUse}>
      <img
        src={picture}
        alt={name.price} 
        title={name}
        className="item__image"
       />
    {
      isPriceDisplayed
      ? <span className="item__price">{price}</span>
      : <></>
    }
    </div>
  );
}

export default Items;