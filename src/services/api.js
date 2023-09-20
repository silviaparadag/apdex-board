const callToApi = () => {
  return fetch(
    'https://silviaparadag.github.io/api-sp/apdex-board/host-app-data.json'
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data.map((newObject, index) => {
        return {
          id: index,
          name: newObject.name,
          hosts: newObject.host,
          version: newObject.version,
          // `hosts` is an array
          // hostOfHost: [newObject.host],
          apdex: newObject.apdex,
          numOfHost: newObject.host.length,
        };
      });
      return result;
    });
};

export default callToApi;
