import React, {useState} from 'react'

import { IoCreate } from "react-icons/io5";
import { IoMdCheckbox } from "react-icons/io";

const FormHeader = props2 => {

    const [titulo, setTitulo] = useState("");

    
    const {handleAddTitle} = props2;
    const handleSubmit = e => {
        e.preventDefault();
    
    //no se utiliza por el momento
        handleAddTitle({
            id: (+new Date()).toString(),
            titulo
        });

        setTitulo("");
    }

    //formulario que cambia el nombre de la tarjeta.
    return (
        <form onSubmit={handleSubmit}>
                <div className='flex flex-nowrap'>
                    <input 
                    type='text' 
                    className='form-imput'
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    />
                    <button className='form-btn' disabled={titulo ? "" : "disabled"}>
                        <IoMdCheckbox size="28"/>
                    </button>

                </div>
                
                <>{/*provicional, quizas en otro componente, muestra el titulo*/}</>
                <div className='hidden'>
                    <div className='flex'>
                        <label className='text-secondary mr-1'>{titulo}</label>
                        <button className='form-btn'>
                            <IoCreate size='29'/>
                        </button> 
                    </div>
                </div>
        </form>
    )
}

export default FormHeader;
