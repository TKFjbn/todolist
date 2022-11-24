
import React from "react";
import { IoIosAddCircle } from 'react-icons/io';

//sidebar, donde se encuentran los botones
const  SideBar = props => {

    const { handleAddCard } = props;
    const handleSubmitCard = e => {
        e.preventDefault();

        handleAddCard({
            id: (+new Date()).toString(),
        });

        
        
    }

    return(
        <div className='sidebar' >
            <SideBarIcon icon={<IoIosAddCircle size="28" onClick={handleSubmitCard} />}/>
        </div>
    );
};

//iconos del sidebar
const SideBarIcon = ({ icon, text = 'nuevo' }) => (
    <div className="sidebar-icon group" >
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;
