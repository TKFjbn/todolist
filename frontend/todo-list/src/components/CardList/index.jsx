/*

el cardlist es el que contiene el contentContainer. 
aqui se mostraran todas las tarjetas.

si no hay tarjetas mostrar un mensaje en el fondo "No hay tarjetas, agregar una nueva tarjeta con (+)"

*/
import React from 'react'
import ContentContainer from '../ContentContainer';

import { IoIosAddCircle } from 'react-icons/io';

//agregar tarjetas en un map
const CardList = props => {
    const {cardList} = props;

    const crds = cardList.map(post =>(
        <ContentContainer key={post.id} data={post} />
    ))

    return (
        <div className='flex ml-16 '>
            {cardList?.length ? crds : (<>
                <p className='card-alert'>
                    No hay tarjetas. Agregar una nueva con
                    <IoIosAddCircle size="22" />
                </p>
            </>)}
        </div>
    )
}

export default CardList;