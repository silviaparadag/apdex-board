import data from '../data/host-app-data.json';
/* 
//import callToApi from '../services/api';
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

/* 
console.log(hostsOfObject.slice(0, 10));
Hay que eliminar el anidamiento de arrays, por eso -> .flat()
console.log(newHostsObject.slice(0, 10));
*/

const flatHostsOfObject = hostsOfObject.flat();
const newHostsObject = [...new Set(flatHostsOfObject)];
//const top5Hosts = newHostsObject.slice(0, 4);
const top25Apps = getDataFromJson.sort((a, b) => b.apdex - a.apdex);
/* 
const top25Apps = getDataFromJson
  .sort((a, b) => b.apdex - a.apdex)
  .slice(0, 25); 
  console.log(top25Apps);
  */

const top5byHost = [];

const listOfTop5byHost = newHostsObject.forEach((eachHost) => {
  const appsByHost = top25Apps.filter((eachApp) =>
    eachApp.hosts.includes(eachHost)
  );

  const list = appsByHost
    .map((eachApp) => `${eachApp.apdex} -  ${eachApp.name}`)
    .slice(0, 5);
  console.log(list);

  top5byHost[eachHost] = list;
});

console.log(listOfTop5byHost);

const renderHostList = () => {
  let html = '';
  for (const eachHost in top5byHost) {
    html += `${eachHost}`;
    console.log(`Este es la lista desde JS para ${eachHost}`);
  }
  return html;
};
const objToExport = {
  getDataFromJson: getDataFromJson,
  newHostsObject: newHostsObject,
  listOfTop5byHost: listOfTop5byHost,
  renderHostList: renderHostList,
};

export default objToExport;
