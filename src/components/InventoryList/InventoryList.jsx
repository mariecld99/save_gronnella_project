import "./index.scss";
import itemsData from "/src/data/items.json";
import Items from "../items/items";

/**
 * Object's list of the player inventory.
 * @param {Object} InventoryListprops 
 * @param {Number} InventoryListprops.numberOfHealthPotion - excepts an integer of amount of Health potion
 * @param {Number} InventoryListprops.numberOfManaPotion - excepts an integerof amount of Magic potion
 * @returns 
 */
const InventoryList = ({numberOfHealthPotion, numberOfManaPotion}) => {
    return (
        <div className="items-from-inventory-container">
            <div className="items-list">
                {itemsData.map(({name, picture, price}) => {
                    let potionType;
                    name == "Potion de santé" ? potionType = false : potionType = true;
                    return (
                        <div className="item-show">
                            <Items name={name} picture={picture} price={price} onUse={potionType} />
                            <p className="small-item-name">
                                {name} x{potionType ? numberOfManaPotion : numberOfHealthPotion}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default InventoryList;