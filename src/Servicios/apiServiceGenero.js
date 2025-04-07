const API_URL = "https://api-rest-iud.onrender.com/api/genres";

/**
 * Obtener todos los generos desde la API.
 */
export async function obtenerDatos() {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
}

/**
 * Agregar un nuevo generos.
 * @param {Object} nuevoGenero - Datos del nuevo generos.
 */
export async function agregarGenero(nuevoGenero) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoGenero),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al agregar Genero:", error);
    return null;
  }
}

/**
 * Actualizar un Genero existente.
 * @param {string} id - ID del Genero a actualizar.
 * @param {Object} datosActualizados - Nuevos datos del Genero.
 */
export async function actualizarGenero(id, datosActualizados) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar genero:", error);
    return null;
  }
}

/**
 * Eliminar un Genero por su ID.
 * @param {string} id - ID del Genero a eliminar.
 */
export async function eliminarGenero(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("Error al eliminar Genero:", error);
    return null;
  }
}
