import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../store/auth";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);

  // Dispatch
  const dispatch = useDispatch();

  // Logout handler
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
