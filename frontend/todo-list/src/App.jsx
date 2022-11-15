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


import ContentContainer from "./components/ContentContainer";
import SideBar from "./components/SideBar";

const App = () => {
  return (
      <>
      <div className='flex'>
        <SideBar/> 
        <div className="fixed bg-gray-700 w-screen h-screen z-0"></div>
        <div className="ml-36"/>
        <ContentContainer/><>{/*cambiar por Cardlist junto con lo de arriba ya que tendra el fondo y las tarjetas*/}</>
      </div>
      </>
  );
}

export default App;
