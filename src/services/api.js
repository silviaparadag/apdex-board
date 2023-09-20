const callToApi = () => {
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
          numOfHost: eachObject.host.length,
        };
      });
      return result;
    });
};

export default callToApi;
