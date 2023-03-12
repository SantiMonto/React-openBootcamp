import './App.css';
// import Info from './components/Info';
import ContactList from './components/ContactList';

function App() {
  const addContact = () =>{
  }

  return (
    <div className="App">
      <ContactList add={addContact} />
      {/* <Info /> */}
    </div>
  );
}

export default App;
