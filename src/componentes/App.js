import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login.js"
import Cadastro from "./Cadastro.js"
import Habitos from "./Habitos.js";
import Hoje from "./Hoje.js";
import Historico from "./Historico.js";

export default function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/habitos" element={<Habitos />}></Route>
        <Route path="/hoje" element={<Hoje />}></Route>
        <Route path="/historico" element={<Historico />}></Route>
      </Routes>
    </BrowserRouter>

  )
}