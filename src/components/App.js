import '../styles/App.scss';
import '../styles/layout/Main.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import AlertDialog from './Main';
import data from '../js/hosts';

const App = () => {
  const [hostDataList, setHostDataList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [toggleLayout, setToggleLayout] = useState('mainTablesList');
  const [layoutModeText, setLayoutModeText] = useState(
    'Show as an awesome grid'
  );
  const [alertMessage, setAlertMessage] = useState('false');

  /*  con API externa
  //import callToApi from '../services/api';
  useEffect(() => {
    callToApi().then((data) => {
      setHostDataList(data);
    });
  }); */

  useEffect(() => {
    setHostDataList(data.getDataFromJson);
    setDataList(data.newHostsObject);
  }, []);

  const handleAlert = () => {
    setAlertMessage(!alertMessage);
  };

  const handleToggleCheckbox = () => {
    const newLayout =
      toggleLayout === 'mainTablesList' ? 'mainTablesGrid' : 'mainTablesList';
    const newLayoutModeText =
      layoutModeText === 'Show as an awesome grid'
        ? 'Show as a list'
        : 'Show as an awesome grid';
    setToggleLayout(newLayout);
    setLayoutModeText(newLayoutModeText);
  };

  const top5Hosts = dataList.slice(0, 5);
  const top25Apps = hostDataList.sort((a, b) => b.apdex - a.apdex).slice(0, 25);

  // Por ahora lo estoy haciendo con datos troceados L32 y L34. Luego habría que hacerlo con TODOOOOOS los datos del JSON y donde haya más de 5, no mostrarlos! y ver qué hacer, OJOOOOOO, cuando uno host tiene menos de 4 apps...

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
  // ojo, revisar slice pq en el primer host, solo pinta 4 apps

  console.log(`Esta es la lista con React:  ${findListOfTop5byHost}`);

  return (
    <div className="App">
      <Header
        handleToggleCheckbox={handleToggleCheckbox}
        layoutModeText={layoutModeText}
      />
      <main className={`mainTables ${toggleLayout}`}>
        {findListOfTop5byHost}
        <AlertDialog handleAlert={handleAlert} />
      </main>
    </div>
  );
};

export default App;
