import '../styles/layout/Main.scss';

const Main = ({
  toggleLayout,
  findListOfTop5byHost,
  eachTop4Hosts,
  top4Hosts,
}) => {
  const renderHtmlHost = () => {
    return top4Hosts.map((eachHost) => {
      console.log(eachHost);
      return (
        <div>
          <h3 className="main__title">{eachHost}</h3>
        </div>
      );
    });
  };

  // const appsList = () => {
  //   findListOfTop5byHost.map;
  // };
  return (
    <main className={`mainTables ${toggleLayout}`}>
      {findListOfTop5byHost}
      {/*
       */}
    </main>
  );
};

export default Main;
