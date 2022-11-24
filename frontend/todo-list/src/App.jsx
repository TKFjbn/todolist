/* mutiples fallas ortograficas.

  -SideBar: unica funcion por el momento, agregar nuevas tarjetas (planeado).
  -ContentContainer (provicional, cambiar por CardList): muetra, agrega, elimina las tareas de la tarjeta, tambien se podra cambiar el titulo de la tarjeta.
  -CardList (planeado) : aqui se renderizaran las tarjetas creadas en el sidebar, podra mostrar una o mas tarjetas.

  Jerarquía:

    SideBar
    CardList
      └ContentContainer (++)
        ├ContentHeader
        │  └FormHeader
        ├FormTodo
        └TaskList (++)
          └CheckBox

*/

//import useFetch from "react-fetch-hook";
import React, {useState} from "react";
import CardContainer from "./components/CardContainer";


const App = () => {
  
  const [Cardlist, setCardList] = useState([]);

  return (
    <>
    <div className='flex'>
      <CardContainer Cardlist={Cardlist} setCardList={setCardList}/>
    </div>
    </>
  );
  //<CardList/>
}

export default App;
