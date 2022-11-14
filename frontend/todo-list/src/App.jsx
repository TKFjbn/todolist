import ContentContainer from "./components/ContentContainer";
import SideBar from "./components/SideBar";

const App = () => {
  return (
      <>
      <div className='flex'>
        <SideBar/>
        <div className="fixed bg-gray-700 w-screen h-screen z-0"></div>
        <div className="ml-36"/>
        <ContentContainer/>
      </div>
      </>
  );
}

export default App;
