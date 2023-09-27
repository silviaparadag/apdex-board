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
      <div className={`mainTables__container ${toggleLayout}__container`}>
        <p className="mainTables__container--title">{renderHtmlHost()}</p>
        <div className="mainTables__container--rows">
          <ul>
            {findListOfTop5byHost}
            {/* <li className="columnLeft">99</li>
            <li className="columnLeft">98</li>
            <li className="columnLeft">98</li>
            <li className="columnLeft">97</li> */}
          </ul>
          {/* <ul>
            <li className="columnRight">
              Awesome Wooden Sausages - Schaefer - Hegmann, Inc
            </li>
            {/* <li className="columnRight">
              Practical Metal Computer - Auer LLC, Inc
            </li>
            <li className="columnRight">
              Awesome Wooden Sausages - Schaefer - Hegmann, Inc
            </li>
            <li className="columnRight">
              Practical Metal Computer - Auer LLC, Inc
            </li>
            <li className="columnRight">
              Practical Metal Computer - Auer LLC, Inc
            </li> 
          </ul> */}
        </div>
      </div>
      {/*
      <div className="mainTables__container">
        <p className="mainTables__container--title">
          92116865-5462.conor.com NO VALE
        </p>
        <div className="mainTables__container--rows">
          <ul>
            <li className="spanColumnLeft">
              100
              <span className="spanColumnRight">
                Awesome Wooden Sausages - Schaefer - Hegmann, Inc
              </span>
            </li>
          </ul>
        </div>
      </div> */}
    </main>
  );
};

export default Main;
