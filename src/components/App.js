import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
//import callToApi from '../services/api';
import data from '../js/hosts';

const App = () => {
  const [hostDataList, setHostDataList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [toggleLayout, setToggleLayout] = useState('mainTablesList');

  /*  
  useEffect(() => {
    callToApi().then((data) => {
      setHostDataList(data);
    });
  }); */

  useEffect(() => {
    setHostDataList(data.getDataFromJson);
    setDataList(data.newHostsObject);
  }, []);

  /* */

  const handleToggleCheckbox = () => {
    const newLayout =
      toggleLayout === 'mainTablesList' ? 'mainTablesGrid' : 'mainTablesList';
    setToggleLayout(newLayout);
  };

  const top5Hosts = dataList.slice(0, 5);
  //console.log(top5Hosts);
  const top25Apps = hostDataList.slice(0, 25);
  //console.log(top25Apps);

  /* esto lo usaba si lo traía desde JS
   */
  const eachtop5Hosts = data.renderHostList();
  /* */

  // Por ahora lo estoy haciendo con datos troceados L32 y L34. Luego habría que hacerlo con TODOOOOOS los datos del JSON y donde haya más de 5, no mostrarlos! y ver qué hacer, OJOOOOOO, cuando uno host tiene menos de 4 apps...

  /*   
   `<li key={eachAppIndex} className="columnLeft">${eachApp.apdex} -  ${eachApp.name}</li> `
   <li key={eachAppIndex} className="columnLeft"></li>
   */

  /* */
  const findListOfTop5byHost = top5Hosts.map((eachHost) => {
    const appsByHost = top25Apps.filter((eachApp) =>
      eachApp.hosts.includes(eachHost)
    );
    console.log(appsByHost);
    console.log(eachHost);
    const list = appsByHost
      .map((eachApp) => (
        <li className="columnLeft">
          {eachApp.apdex} -{eachApp.name}
        </li>
      ))
      .slice(0, 5);
    return (
      <div className={`mainTables__container ${toggleLayout}__container`}>
        <p className="mainTables__container--title">{eachHost}</p>
        <div className="mainTables__container--rows">
          <ul> {list}</ul>
        </div>
      </div>
    );
  });

  /*
  const appsByHost = top25Apps.reduce((acc, eachApp) => {
    eachApp.hosts.map((host) => {
      if (!acc[host]) {
        acc[host] = [];
      }
      acc[host].push(eachApp);
    });
    return acc;
  }, []);

  const findListOfTop5byHost = appsByHost.map(([eachHost, apps]) => (
    <div key={eachHost}>
      <p className="mainTables__container--title">{eachHost}</p>
      <div className="mainTables__container--rows">
        <ul>
          {apps.slice(0, 5).map((eachApp) => (
            <li className="columnLeft" key={eachApp.id}>
              {eachApp.apdex} - {eachApp.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
*/
  // ojo, revisar slice pq en el primer host, solo pinta 4 apps

  console.log(`Esta es la lista con React:  ${findListOfTop5byHost}`);
  // findListOfTop5byHost();

  //como si la la respuesta, lo que necesito fuese la propiedad, la clave, no el valor.

  const renderHtmlHost = () => {
    return top5Hosts.map((eachHost) => {
      console.log(eachHost);
      return (
        <div>
          <h3 className="main__title">{eachHost}</h3>
        </div>
      );
    });
  };
  /* */

  /* HTML PREVIO  
  
  const renderHtmlApps = () => {
    return data.listOfTop5byHost.map((eachApp) => {
      console.log(eachApp);
      return (
        <div>
          <h3 className="main__title">{eachApp}</h3>
        </div>
      );
    });
  };

  const htmlhostDataList = top25Apps.map((object, hostIndex) => (
    <div className="mainTables__container--rows">
      <ul>
        <li key={hostIndex} className="columnLeft">
          {object.apdex}
        </li>
      </ul>
      <ul>
        <li key={object.name} className="columnRight">
          {object.name}
        </li>
      </ul>
    </div>
  ));*/

  return (
    <div className="App">
      <Header handleToggleCheckbox={handleToggleCheckbox} />
      <Main
        toggleLayout={toggleLayout}
        findListOfTop5byHost={findListOfTop5byHost}
        eachtop5Hosts={eachtop5Hosts}
        top5Hosts={top5Hosts}
      />
      {/* <main className="main">
        {renderHtmlHost()} 

        <ul>
          <li key={eachtop5Hosts} className="main__title">
            {eachtop5Hosts}
          </li>
        </ul>
      </main>
      {/* {htmlhostDataList} */}
    </div>
  );
};

export default App;
