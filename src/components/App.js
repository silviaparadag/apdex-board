import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import callToApi from '../services/api';

const App = () => {
  const [hostList, setHostList] = useState([{}]);

  useEffect(() => {
    callToApi().then((data) => {
      setHostList(data);
    });
  });

  const orderedList = hostList.sort((a, b) => b.apdex - a.apdex);

  const top25 = orderedList.slice(0, 25);

  // const hostsOfHost = top25.map((eachHost, eachHostIndex) => {
  //   return {
  //     id: eachHostIndex,
  //     hostName: eachHost.hostName,
  //     apdex: eachHost.apdex,
  //     numOfHost: eachHost.numOfHost,
  //   };
  // });

  const renderHostsOfEachHost = () => {
    return top25.map((eachHost, eachHostIndex) => (
      <li key={eachHostIndex}>
        Host: {eachHost.hostName} Apdex:{eachHost.apdex}
      </li>
    ));
  };

  const htmlHostList = top25.map((host, index) => {
    return (
      <li key={index}>
        <h2>{host.apdex}</h2>
        {/* <p>{host.hostName}</p> */}
        <p>{host.numOfHost}</p>
        <ul>{renderHostsOfEachHost()}</ul>
      </li>
    );
  });

  return (
    <div className="App">
      <Header />
      <main className="main">
        <ul>{htmlHostList}</ul>
      </main>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
