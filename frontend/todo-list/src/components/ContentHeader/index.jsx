//contiene el FormHeader y quizas otro componente, donde se cambiara y mostrara el titulo de la tarjeta.

import React from 'react'

import FormHeader from '../FormHeader';

const ContentHeader = () => {
    

    return (
        <div className='content-header'>
            <FormHeader/><>{/*formulario para cambiar el nombre de la tarjeta*/}</>
        </div>
    )
};

export default ContentHeader;
