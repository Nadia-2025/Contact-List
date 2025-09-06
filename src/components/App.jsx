import "./App.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddContact></AddContact>}></Route>
          <Route
            path="/agendas/mi_agenda/contacts"
            element={<ContactList></ContactList>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
