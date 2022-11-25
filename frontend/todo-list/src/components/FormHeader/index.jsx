import React, {useState} from 'react'

import { IoMdCheckbox } from "react-icons/io";


import Cardtitle from "../CardTitle";


const FormHeader = props => {

    const [titulo, setTitulo] = useState("");

    const {handleAddTitle} = props;
    const handleSubmit = e => {
        e.preventDefault();
    
        handleAddTitle({
            id: (+new Date()).toString(),
            titulo
        });

        setTitulo("");
    }

    const editMode = () => {
        console.log("modo editar");
    }

    //formulario que cambia el nombre de la tarjeta.
    return (
        <form onSubmit={handleSubmit} onDoubleClick={editMode}>

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
            <Cardtitle titulo={titulo} id={"T"+(+new Date()).toString()}/>
        </form>
    )
}

export default FormHeader;
