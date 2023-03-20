import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactList from "./components/ContactList";
import Loginformik from "./components/forms/LoginFormik";
import Registerformik from "./components/forms/RegisterFormik";
import Home from "./components/Home";

function App() {
  const loggedIn = true;
  return (
    <div className="App">
      {/* <ContactList add={addContact} /> */}
      {/* <Info /> */}
      {/* <RenderizadoCond /> */}
      {/* <TaskFormik /> */}
      {/* <Registerformik /> */}
      {/* <Loginformik /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} />} />
          <Route path="/login" element={<Loginformik />} />
          <Route path="/register" element={<Registerformik />} />
          {loggedIn && <Route path="/contacts" element={<ContactList />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
