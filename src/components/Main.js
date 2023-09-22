import '../styles/layout/Main.scss';

const Main = ({ toggleLayout }) => {
  return (
    <main className={`mainTables ${toggleLayout}`}>
      <div className={`mainTables__container ${toggleLayout}__container`}>
        <p className="mainTables__container--title">
          92116865-5462.conor.comSP
        </p>
        <div className="mainTables__container--rows">
          <ul>
            <li className="columnLeft">100</li>
            <li className="columnLeft">99</li>
            <li className="columnLeft">98</li>
            <li className="columnLeft">98</li>
            <li className="columnLeft">97</li>
          </ul>
          <ul>
            <li className="columnRight">
              Awesome Wooden Sausages - Schaefer - Hegmann, Inc
            </li>
            <li className="columnRight">
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
          </ul>
        </div>
      </div>
      {/* <div className="mainTables__container">
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
            <li className="spanColumnLeft">
              99
              <span className="spanColumnRight">
                Practical Metal Computer - Auer LLC, Inc
              </span>
            </li>
            <li className="spanColumnLeft">
              98
              <span className="spanColumnRight">
                Awesome Wooden Sausages - Schaefer - Hegmann, Inc
              </span>
            </li>
            <li className="spanColumnLeft">
              98
              <span className="spanColumnRight">
                Awesome Wooden Sausages - Schaefer - Hegmann, Inc
              </span>
            </li>
            <li className="spanColumnLeft">
              97
              <span className="spanColumnRight">
                Practical Metal Computer - Auer LLC, Inc
              </span>
            </li>
          </ul>
        </div>
      </div> */}
    </main>
  );
};

export default Main;
