import data from '../data/host-app-data.json';

const getDataFromJson = data.map((newObject, index) => {
  return {
    id: index,
    name: newObject.name,
    hosts: newObject.host,
    version: newObject.version,
    apdex: newObject.apdex,
    numOfHosts: newObject.host.length,
  };
});

const hostsOfObject = data.map((eachHost) => {
  return eachHost.host;
});

const flatHostsOfObject = hostsOfObject.flat();
const newHostsObject = [...new Set(flatHostsOfObject)];

const objToExport = {
  getDataFromJson: getDataFromJson,
  newHostsObject: newHostsObject,
};

export default objToExport;
