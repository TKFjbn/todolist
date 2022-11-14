
import { IoIosAddCircle } from 'react-icons/io';

//sidebar, donde se encuentran los botones
const  SideBar = () => {
    return(
        <div className='sidebar'>
        <SideBarIcon icon={<IoIosAddCircle size="28"/>} />
        </div>
    );
};

//iconos del sidebar
const SideBarIcon = ({ icon, text = 'nuevo' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;
