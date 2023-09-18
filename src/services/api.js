// Fichero src/services/api.js
const callToApi = () => {
  // Llamamos a la API
  return fetch(
    'https://silviaparadag.github.io/api-sp/apdex-board/host-app-data.json'
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data.map((eachObject) => {
        return {
          name: eachObject.name,
          hostName: eachObject.host,
          apdex: eachObject.apdex,
        };
      });
      return result;
    });
};

export default callToApi;
