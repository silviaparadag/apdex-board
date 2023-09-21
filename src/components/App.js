import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
//import callToApi from '../services/api';
import data from '../js/hosts';

const App = () => {
  const [hostDataList, setHostDataList] = useState([{}]);
  const [dataList, setDataList] = useState([{}]);
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
  console.log(top5Hosts);
  const top25 = hostDataList.sort((a, b) => b.apdex - a.apdex).slice(0, 25);
  console.log(top25);

  const htmlHost = top5Hosts.map((eachHost) => (
    <h3 className="main__title">{eachHost}</h3>
  ));

  const htmlhostDataList = top25.map((object, hostIndex) => (
    <div className="mainTables__container--rows">
      <ul>
        <li className="columnLeft">{object.apdex}</li>
      </ul>
      <ul>
        <li className="columnRight">{object.name}</li>
      </ul>
    </div>

    // <li key={top25.id} className="hostList__li">
    //   <h2 className="hostList__li--apdex">{object.apdex}</h2>
    //   <ul>
    //     <li className="hostList__li--hostName" key={hostIndex}>
    //       Host: {object.name}
    //     </li>
    //   </ul>
    // </li>
  ));

  return (
    <div className="App">
      <Header handleToggleCheckbox={handleToggleCheckbox} />
      <Main toggleLayout={toggleLayout} />
      <main className="main">
        <div>{htmlHost}</div>
        <ul className="hostList">{htmlhostDataList}</ul>
      </main>
    </div>
  );
};

export default App;
