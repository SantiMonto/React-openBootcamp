import './App.css';
// import Info from './components/Info';
import ContactList from './components/ContactList';
import TaskFormik from './components/forms/TaskFormik';
import RenderizadoCond from './components/RenderizadoCond';

function App() {
  const addContact = () =>{
  }

  return (
    <div className="App">
      {/* <ContactList add={addContact} /> */}
      {/* <Info /> */}
      {/* <RenderizadoCond /> */}
      <TaskFormik />
    </div>
  );
}

export default App;
