import '../styles/layout/Main.scss';

const Main = ({ toggleLayout, findListOfTop5byHost }) => {
  return (
    <main className={`mainTables ${toggleLayout}`}>{findListOfTop5byHost}</main>
  );
};

export default Main;
