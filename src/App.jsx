import React from "react";
import Banner from "./componentes/Banner";
import { Route, Routes } from "react-router-dom"
import PageSobre from "./pages/PageSobre";

function App() {
  return (
      <div>
        <Banner />
        <PageSobre />
        <Routes>
          <Route path="/sobremim" element={<PageSobre />} />
        </Routes>
      </div>
  );
}

export default App;