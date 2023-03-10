import './App.css';
import Info from './components/Info';
// import ComponenteB from "./components/ComponenteB"
// import { Contacto } from './components/Contacto.class';

function App() {

  // const contacto = new Contacto("Santiago","Montoya","smonto@prueba.com",false);

  return (
    <div className="App">
      {/* <ComponenteB contacto={contacto}/> */}
      <Info />
    </div>
  );
}

export default App;
