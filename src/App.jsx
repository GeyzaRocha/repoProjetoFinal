import React from "react";
import Menu from "./componentes/Menu";
import { Route, Routes } from "react-router-dom"
import PageSobre from "./pages/PageSobre";
import Contato from "./pages/Contato"
import Comentario from "./pages/Comentario"
import Skill from "./pages/Skill"

function App() {
  return (
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<PageSobre />} />
          <Route path="/Contatos" element={<Contato />} />
          <Route path="/Comentarios" element={<Comentario />} />
          <Route path="/Skills" element={<Skill />} />
        </Routes>
      </div>
  );
}

export default App;