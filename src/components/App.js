import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import callToApi from '../services/api';

const App = () => {
  const [hostDataList, setHostDataList] = useState([{}]);

  useEffect(() => {
    callToApi().then((data) => {
      setHostDataList(data);
    });
  });

  // const getNewOrderedHostList = () => {
  //   const newHostList = [];
  //   hostDataList.map((data) => {
  //     return data.hosts.map((eachHost) => {
  //       if (!newHostList.includes(eachHost)) {
  //         newHostList.push(eachHost);
  //       }
  //       return newHostList;
  //     });
  //   });
  // };

  const top25 = hostDataList.sort((a, b) => b.apdex - a.apdex).slice(0, 25);

  const htmlhostDataList = top25.map((object, hostIndex) => (
    <li key={top25.id}>
      <h2 className="hostList__apdex">{object.apdex}</h2>
      <p className="hostList__app">{object.name}</p>
      <ul>
        <li className="hostList__hostName" key={hostIndex}>
          Host: {object.hosts}
        </li>
      </ul>
    </li>
  ));

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div>
          <h3 className="main__title">Listado grupo por Host</h3>
        </div>
        <ul>{htmlhostDataList}</ul>
      </main>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
