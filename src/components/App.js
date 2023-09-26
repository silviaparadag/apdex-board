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

  // useEffect(() => {
  //   callToApi().then((data) => {
  //     setHostDataList(data);
  //   });
  // });

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
  const top25Apps = hostDataList.sort((a, b) => b.apdex - a.apdex).slice(0, 25);
  //console.log(top25Apps);

  /* esto lo usaba si lo traía desde JS
   */
  const prueba = data.renderHostList();
  // const prueba2 = data.renderHostListApps();
  /*  const pruebaDos = data.renderApdexApps();
   */

  // Por ahora lo estoy haciendo con datos troceados L32 y L34. Luego habría que hacerlo con TODOOOOOS los datos del JSON y donde haya más de 5, no mostrarlos!

  const top5byHost = [];

  const findListOfTop5byHost = () => {
    return top5Hosts.map((eachHost) => {
      const appsByHost = top25Apps.filter((eachApp) =>
        eachApp.hosts.includes(eachHost)
      );
      const list = appsByHost.map(
        (eachApp) => `${eachApp.apdex} -  ${eachApp.name}`
      );
      console.log(list);
      top5byHost[eachHost] = list;
      return top5byHost;
    });
  };

  console.log(findListOfTop5byHost());
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
  /*
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

 */

  /* HTML PREVIO*/
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
  ));

  return (
    <div className="App">
      <Header handleToggleCheckbox={handleToggleCheckbox} />
      <Main toggleLayout={toggleLayout} />
      <main className="main">
        {renderHtmlHost()}

        {/* {renderHtmlApps()} */}
        <ul>
          <li key={prueba} className="main__title">
            {prueba}
          </li>
        </ul>
        {/* <ul>
          <li key={prueba2} className="main__title">
            {prueba2}
          </li>
        </ul> */}
      </main>
      {htmlhostDataList}
    </div>
  );
};

export default App;
