import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <a href="/" className="navbar__brand">
            <h1>Store Locator</h1>
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          {/* <div className="navbar__menu"> */}
            {/* <ul className="navbar__list"> */}
              {/* <li className="navbar__item">
                <NavLink className="navbar__link" aria-current="page" to="/">
                  Store Locator
                </NavLink>
              </li> */}
              {/* <li className="navbar__item">
                <NavLink className="navbar__link" to="/detail/:id">
                  Dettaglio Store
                </NavLink>
              </li> */}
            {/* </ul> */}
          {/* </div> */}
        </div>
      </nav>
    </>
  );
}
