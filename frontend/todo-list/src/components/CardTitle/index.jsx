import React from 'react'
import { IoCreate } from "react-icons/io5";

const CardTitle = props => {
    

    return (
        <div className=''>
            <div className='flex'>
            <label  className='text-secondary mr-1'>{props.titulo}</label>
            <button className='form-btn'>
                <IoCreate size='29'/>
            </button> 
            </div>
        </div>

    )
}

export default CardTitle;