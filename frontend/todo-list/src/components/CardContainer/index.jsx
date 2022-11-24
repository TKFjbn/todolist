import React, {useState} from 'react'
import CardList from '../CardList';
import SideBar from "../SideBar";

const CardContainer = props => {

    const [cardList, setcardList] = useState([]);

    const handleAddCard = addCard => {
        setcardList([...cardList, addCard]);
    };


    return (
        <div>
            <SideBar handleAddCard={handleAddCard}/>
            <div className="fixed bg-gray-700 w-screen h-screen z-0"></div>
            <CardList cardList={cardList} setCardList={setcardList} />
        </div>
    )
}

export default CardContainer;