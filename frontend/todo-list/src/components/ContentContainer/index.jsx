//Content Container, aqui se encuentra todo el contenido del tasklist, como crear o eliminar listas y agregar un nombre a la tarjeta. 
//crear card container que seria similar a contentcontainer

import React, {useState} from 'react'

import ContentHeader from '../ContentHeader';
import FormTodo from '../FormTodo';
import TaskList from '../TaskList';

const ContentContainer = props => {

    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };

    const {
        data: {id}
    } = props;

    return (
        <>
        <div className='content-container'>
            {/*contenedor tasklist*/}
            <div className='task-conteiner' name={id}>
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