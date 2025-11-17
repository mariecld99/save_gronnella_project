import './index.scss';
import {Coins} from "lucide-react";

/**
 * Money Component and his Propperties
 * 
 * @param {number} amount - Montant actuel de la bourse.
 * @param {MoneyProps} props
 * @returns {JSX.Element}
 */

function Money({amount}) {
    return(
        <div className="money">
            <div className='gold-icon'>
                <Coins/>
            </div>
            <div className="amount">
                <span className="money_amount">{amount}</span>
            </div>

        </div>
    )

}

export default Money;