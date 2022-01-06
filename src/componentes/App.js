import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login.js"
import Cadastro from "./Cadastro.js"
import Habitos from "./Habitos.js";

export default function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/habitos" element={<Habitos />}></Route>
      </Routes>
    </BrowserRouter>

  )
}