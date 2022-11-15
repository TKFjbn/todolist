//Content Container, aqui se encuentra todo el contenido del tasklist, como crear o eliminar listas y agregar un nombre a la tarjeta. 

import React, {useState} from 'react'
import ContentHeader from '../ContentHeader';

import FormTodo from '../FormTodo';
import TaskList from '../TaskList';

const ContentContainer = () => {

    
    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };

    
    return (
        <>
        <div className='h-screen border-2 border-red-700 flex items-start justify-center'>
            {/*contenedor tasklist*/}
            <div className='task-conteiner'>
                <ContentHeader/>
                <Divider/>
                <FormTodo handleAddItem={handleAddItem}/>
                <Divider/>
                <TaskList list={list} setList={setList}/>
            </div>
        </div>   
        </>
    );
}

const Divider = () => <hr className='sidebar-hr'/>;

export default ContentContainer;