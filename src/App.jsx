import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./comp/Counter";
import ContactForm from "./comp/ContactForm";
import Controlled from "./comp/Controlled";
import LoginForm from "./comp/LoginForm";
import Register from "./comp/Register";
import RegistrationReact from "./comp/RegistrationReact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/controlled" element={<Controlled />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration" element={<RegistrationReact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
