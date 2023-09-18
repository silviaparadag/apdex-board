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

  const htmlHostList = top25.map((host, index) => {
    return (
      <li key={index}>
        <h2>{host.apdex}</h2>
        <ul>
          {host.hostName.map((eachHost, eachHostIndex) => (
            <li key={eachHostIndex}>Host: {eachHost}</li>
          ))}
        </ul>
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
