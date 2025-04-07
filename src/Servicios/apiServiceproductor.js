const API_URL = "https://api-rest-iud.onrender.com/api/producers";

/**
 * Obtener todos los productores desde la API.
 */
export async function obtenerProducers() {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
}

/**
 * Agregar un nuevo productor.
 * @param {Object} nuevoProductor - Datos del nuevo productor.
 */
export async function agregarProducer(nuevoProductor) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoProductor),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al agregar Productor:", error);
    return null;
  }
}

/**
 * Actualizar un Productor existente.
 * @param {string} id - ID del Productor a actualizar.
 * @param {Object} datosActualizados - Nuevos datos del Productor.
 */
export async function actualizarProducer(id, datosActualizados) {
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
    console.error("Error al actualizar Productor:", error);
    return null;
  }
}

/**
 * Eliminar un Productor por su ID.
 * @param {string} id - ID del Productor a eliminar.
 */
export async function eliminarProducer(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("Error al eliminar Productor:", error);
    return null;
  }
}
