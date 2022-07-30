import { useSelector } from "react-redux";
import { Fragment } from "react";

import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";

import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
