import data from '../data/host-app-data.json';

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
          numOfHosts: newObject.host.length,
        };
      });
      return result;
    });
};

const getDataFromJson = () => {
  const result = data.map((newObject, index) => {
    return {
      id: index,
      name: newObject.name,
      hosts: newObject.host,
      version: newObject.version,
      apdex: newObject.apdex,
      numOfHosts: newObject.host.length,
    };
  });
  return result;
};

const objToExport = {
  callToApi: callToApi,
  getDataFromJson: getDataFromJson,
};

export default objToExport;
