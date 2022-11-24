import React, { useState } from 'react'
import { IoMdCheckbox } from "react-icons/io";

const FormTodo = props => {
    const [description, setDescription] = useState("");

    const { handleAddItem } = props;
    const handleSubmit = e => {
        e.preventDefault();

        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });
        
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                <div className='flex flex-nowrap'>
                    <input
                    text="text"
                    className='form-imput'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    >
                    </input>
                    <button 
                    className='form-btn'
                    disabled={description ? "" : "disabled"}
                    >
                    <IoMdCheckbox size="28"/>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormTodo