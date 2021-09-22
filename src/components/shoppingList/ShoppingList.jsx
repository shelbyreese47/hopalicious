import React from 'react';
import { useHistory } from 'react-router-dom'

function ShoppingList({shoppingList, setShoppingList}) {
    const history = useHistory();
    function handleSubmit() {
        history.goBack();
    }
    return (
        <div className="home shoppingL">
            <h2>Shopping List:</h2>
            <ul>
                {shoppingList.map((item,index)=><li key={`${index}-${item}`}>{item}</li>)}
            </ul>
            <button className="anotherRandomButton" onClick={handleSubmit}>Go Back</button>
        </div>
    );
}

export default ShoppingList;