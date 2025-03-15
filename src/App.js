import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Modulos/Inicio";
import Directores from "./Modulos/Directores";
import NuevoDirector from "./Modulos/nuevodirector";
import Generos from "./Modulos/Generos";
import NuevoGenero from "./Modulos/nuevogenero";
import Productores from "./Modulos/Productores";
import NuevoProductor from "./Modulos/nuevoproductor";
import Types from "./Modulos/Types"; 
import NuevoTipo from "./Modulos/NuevoTipo";
import Medias from "./Modulos/Medias";
import NuevoMedia from "./Modulos/NuevoMedia";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/directores" element={<Directores />} />
        <Route path="/nuevo-director" element={<NuevoDirector />} />
        <Route path="/Generos" element={<Generos />} />    
        <Route path="/nuevo-genero" element={<NuevoGenero />} />         
        <Route path="/Productores" element={<Productores />} />    
        <Route path="/nuevo-productor" element={<NuevoProductor />} />
        <Route path="/types" element={<Types />} />
        <Route path="/nuevo-tipo" element={<NuevoTipo />} />
        <Route path="/medias" element={<Medias />} />
        <Route path="/nuevo-media" element={<NuevoMedia />} />
      </Routes>
    </Router>
  );
}

export default App;