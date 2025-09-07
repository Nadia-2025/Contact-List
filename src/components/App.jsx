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
            path="/agendas/agenda_nadia/contacts"
            element={<ContactList></ContactList>}
          ></Route>
          <Route path="/edit/:id" element={<AddContact></AddContact>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
