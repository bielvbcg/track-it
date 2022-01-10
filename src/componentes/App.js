import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login.js"
import Cadastro from "./Cadastro.js"
import Habitos from "./Habitos.js";
import Hoje from "./Hoje.js";
import Historico from "./Historico.js";
import AppContext from "../contexts/AppContext";

export default function App() {
  const [token, setToken] = useState(null)
  const [imagem, setImagem] = useState(null)
  const [porcentagem, setPorcentagem] = useState(0)

  const contexto = { token, setToken, imagem, setImagem, porcentagem, setPorcentagem }

  return (

    <AppContext.Provider value={contexto}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/habitos" element={<Habitos />}></Route>
          <Route path="/hoje" element={<Hoje />}></Route>
          <Route path="/historico" element={<Historico />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>

  )
}