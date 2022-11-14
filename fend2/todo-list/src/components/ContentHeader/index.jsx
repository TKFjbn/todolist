import React from 'react'

import { IoCreate } from "react-icons/io5";
import { IoMdCheckbox } from "react-icons/io";

const ContentHeader = () => {
    return (
        <div className='content-header'>
            <div className=''>

                <div className='flex flex-nowrap'>
                    <input 
                    type='text' 
                    className='form-imput'
                    value=''
                    />
                    <button className='form-btn'>
                        <IoMdCheckbox size="28"/>
                    </button>

                </div>
                
                <div className='hidden'>
                    <div className='flex'>
                        <label className='text-secondary mr-1'>Compras</label>
                        <button className='form-btn'>
                            <IoCreate size='29'/>
                        </button>
                        
                    </div>
                </div>
                
                
            </div>
        </div>
    )
};

export default ContentHeader;
