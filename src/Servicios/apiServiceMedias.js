const API_URL = "https://api-rest-iud.onrender.com/api/medias";

/**
 * Obtener todos los medios desde la API.
 */
export async function obtenerMedias() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al obtener medios:", error.message);
    return null;
  }
}

/**
 * Agregar un nuevo medio.
 * @param {Object} nuevoMedia - Datos del nuevo medio.
 */
export async function agregarMedia(nuevoMedia) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoMedia),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al agregar media:", error.message);
    return null;
  }
}

/**
 * Actualizar un medio existente.
 * @param {string} id - ID del medio a actualizar.
 * @param {Object} datosActualizados - Nuevos datos del medio.
 */
export async function actualizarMedia(id, datosActualizados) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al actualizar media:", error.message);
    return null;
  }
}

/**
 * Eliminar un medio por su ID.
 * @param {string} id - ID del medio a eliminar.
 */
export async function eliminarMedia(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al eliminar media:", error.message);
    return null;
  }
}
