// Fichero src/services/api.js
const callToApi = () => {
  // Llamamos a la API
  return fetch('') // Este 5 es el id de Leia Skywalker
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const result = {
        
      };
      return result;
    });
};

export default callToApi;