import React from "react";
import { useNavigate } from "react-router-dom";
import "../Estilos/Inicio.css";

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="inicio-container">
      {/* Imagen en la parte superior */}
      <div className="imagen-superior">
        <img src="/cartelera.jpg" alt="Cartelera de Películas" />
      </div>

      {}
      <div className="inicio-overlay">
        <div className="contenido">
          <h1 className="titulo">Administrador de Películas IUD de Antioquia</h1>
          <p className="descripcion">
            Esta aplicación web esta diseñada para administrar el catalogo de productos de una aplicación tipo cuevana, la aplicación contara con todos los permisos por parte de la universidad, selecciona que quieres administrar:.
          </p>
          <button onClick={() => navigate("/directores")} className="boton-explorar">
            Directores
          </button>
          <button onClick={() => navigate("/Generos")} className="boton-explorar">
            Generos
          </button>
          <button onClick={() => navigate("/Productores")} className="boton-explorar">
            Productoras
          </button>    
          <button onClick={() => navigate("/Types")} className="boton-explorar">
            Tipos
          </button>
          <button onClick={() => navigate("/Medias")} className="boton-explorar">
            Media
          </button>                                                   
        </div>
      </div>

      {/* Pie de página con tus datos */}
      <footer className="footer">
        <p>© 2025 Películas IUD ADM. Todos los derechos reservados.</p>
        <p>Desarrollado por <strong>Salomón Forero</strong></p>
        <p>Estudiante Desarrollo de Software - Data Expert Lead</p>
      </footer>
    </div>
  );
}