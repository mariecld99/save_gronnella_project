
const Action_Panel =({ onAttack, onCastSpell })=> {
        return (
            <div className="action-panel">
                <div className="Action_panel-Buttons">
                    <button className="btn" onClick={onAttack}>Attaquer</button>
                    <button className="btn" onClick={onCastSpell}>Lancer un sort</button>
                    <button className="btn" onClick={onCastSpell}>Utiliser un objet</button>
                    <button className="btn" onClick={onCastSpell}>Fuir</button>
                </div>
            </div>
        );
    };
    
export default Action_Panel;
