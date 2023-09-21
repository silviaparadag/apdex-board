import data from '../data/host-app-data.json';
//import callToApi from '../services/api';

/* 
const orderedData = callToApi().then((cleanData) => {
  return cleanData;
});
console.log(orderedData);
*/

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

console.log(hostsOfObject.slice(0, 10));

/* 
Hay que eliminar el anidamiento de arrays, por eso -> .flat()
*/

const flatHostsOfObject = hostsOfObject.flat();

const newHostsObject = [...new Set(flatHostsOfObject)];
console.log(newHostsObject.slice(0, 10));

const objToExport = {
  getDataFromJson: getDataFromJson,
  newHostsObject: newHostsObject,
};

export default objToExport;
