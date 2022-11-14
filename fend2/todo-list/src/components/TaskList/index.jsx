//componente tasklist

import React from 'react'

import Checkbox from '../CheckBox';

const TaskList = props => {
    const {list, setList} = props;

    //eliminar items del tasklist
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };

    
    const onChangeStatus = e => {
        const { name, checked } = e.target;
        const updateList = list.map(item => ({
        ...item,
        done: item.id === name ? checked : item.done
        }));

        setList(updateList);
    };

    const chkbox = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus}/>
    ));


    return (
        <div className='flex flex-col mt-5 mb-4'>

            <>{/* si no hay tareas mostrar mensaje */}</>
            {list.length ? chkbox : (<>
                <p className='flex items-center justify-center mb-4 text-secondary'>
                    No hay tareas
                </p>
            </>)}
            
            <>{/*eliminar las tareas listas al hacer click al boton*/}</>
            {list.length ? (
                <p className='flex items-center justify-center mt-4 mb-4'>
                    <button className='bg-green-400' onClick={onClickRemoveItem}>
                        Listo
                    </button>
                </p>
            ) : null }
        </div>
    )
}

export default TaskList