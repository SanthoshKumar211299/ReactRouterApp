import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("/");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <div class="container"><a class="navbar-brand" href="https://www.guvi.in/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAA1CAMAAABSvrRsAAAAclBMVEX///8AAAAhISEgICAgICAgICAXeTQhISEMt0ghISELuEkhISEMt0wMt0ghISENuUohISEhISEMukohISEMukohISEMukohISENukshISEMukshISEMukshISENukshISENukshISENukshISENukshISFbxhFUAAAAJHRSTlMAAAEBBQkQECAgMDBAQEBQUGBkcICAkJCfoK+wv8DP0N/g7/A51K8TAAAD3UlEQVR42r2Z2ZKjMAxF8fQMe2gWk2ZzYhb9/y9OWSYsxhCgSOslBQQOsmXpWhhEZ/Z3TCml8c0lJ8zYZ4v7zLhousGaIrZ/h3yruoUVt8+TdVxh/PuzZHuFKyyzP0iOm27DePwx8r17Y/RD5Kx7a9lHyDvAu9GHyOpQN/fY9+OMK6fvl5OpOqVmH+3qhfhisq04PMmZbrN66QqyMqizp/vza49LyVS3em6U3nQhEF9IthWXRbYyMZ1lYrpNZSrM68iKy8VkkWEsV0cTym4yXz55CDlzORnNGugwOdYsnO/XgS/yufIHX+uo1f/+/fe1c0BIoSG7W2TMZEEN0liKDwygtQ6mGdLp8hTfIONwpzDY05HHwUHybVEOp6tYR8aTgiQsYgDsHJl2ugcTW4oxLTmWJPkYqwWwTpGLpQboV6x5XyFnUzLJkXmC/Ngoho2e/BjIfwyDsDnZSlgLz7QPt0gchIRhLJCE1cBypydzTR2u7E0yf5G/DMPwAOrJPHt9zD8RXcqDFCAhxGJ9SIaSrBddmStTiJbcSFIqjAG03oRcA5RhUkt0AtCmQfgUcEIigDxwQrZJFo9/8LUI6+ar6oeM5AQgF4c5etnKt7JqJJc4OOM8r3CFJvF9rJdrZPS5FE6O5BIAZ9QSa83rX0O8T0rID0A4JWulLp0WpGx1njETMYBoID+hlTfVwEiAjmOCE2QHAOoy9Yz1CJsLD7tbj21BjtCznizTChEDjeQQD0IkEyeX+XZ1Pc81ib18tWpGdpA2+FyTfrRLQcYYwKmRp4O0HmL7vqLobxRNt+G5z8jpy+dERlYwzmwfYV77IotbWigleRk/oyZZse8pOWxxnkMA5uCMiqThtdA6uI7aBN3ECEtE8DnwIi+msZhFVZVx7atNVhUGsEjfUHsCBqxHDf+Soy2u5GzMJKokmWuSghDzoQkwJEir5UBGAh32v9CGQ/Zsy1DGNmYUgDZ61Wd6VJNI9ekE0gY94ERp1EdR6M2rRNgHuRckSTAqA/udJqGawR4rz1ZdclKZVp59flE0iaotp5qEazJJRnaTUyGWUhFhuU4NqbuIiSaRKYWvu0zIJtkbxJqlJatOvzQJL2xN2s6OdExIkOaM/YR6BbjIj3y2izA3XZ6r60Ny29BsYqdumcXbHcZppa/ZwFSDY/ZjmbK14urszl0tCw1qEnKjSg3l9uXdCndRphvOF+f2gQ92aNzmfYOmcT/RG9LV4XMeH+/EvUNXu/uPx/ue9JIO4Kle73rLtTrS5D7V3/a17Mr/jZ6+rYoQTo9+Ujj7NYEQN75Xj0Ys6eJ+/FvCXvJ/ZOdL94dRFkwAAAAASUVORK5CYII=" alt="Bootstrap" width="80" height="30"/></a></div>
        <Link
          to={"/"}
          className={`navbar-brand ps-4 ${activeTab === "/" ? "active" : ""}`}
          onClick={() => handleTabClick("/")}
        ></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-center pe-lg-5 me-lg-5"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              to={"/"}
              className={`nav-link ${activeTab === "/" ? "active" : ""}`}
              onClick={() => handleTabClick("/")}
            >
              All
            </Link>
            <Link
              to={"/fullstack"}
              className={`nav-link ${activeTab === "/fsd" ? "active" : ""}`}
              onClick={() => handleTabClick("/fsd")}
            >
            FullStackDevelopment
            </Link>
            <Link
              to={"/datascience"}
              className={`nav-link ${
                activeTab === "/datascience" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/datascience")}
            >
              DataScience
            </Link>
            <Link
              to={"/cybersecurity"}
              className={`nav-link ${
                activeTab === "/cybersecurity" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/cybersecurity")}
            >
              CyberSecurity
            </Link>
            <Link
              to={"/career"}
              className={`nav-link ${activeTab === "/career" ? "active" : ""}`}
              onClick={() => handleTabClick("/career")}
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
