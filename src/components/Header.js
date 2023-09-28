import '../styles/layout/Header.scss';

const Header = ({ handleToggleCheckbox }) => {
  const handleCheck = () => {
    handleToggleCheckbox();
  };
  return (
    <header className="header">
      <h1 className="header__title">Apps by Host</h1>
      <h3 className="header__subtitle">
        for user averylongemailadress@companyname.com
      </h3>
      <form className="header__form">
        <input
          className="header__form--input"
          type="checkbox"
          id="checkbox"
          value="Check"
          onClick={handleCheck}
        />
        <label className="header__form--label" htmlFor="checkbox">
          Show as a list
        </label>
      </form>
    </header>
  );
};

export default Header;
