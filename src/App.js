import { StrictMode, useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
//import Pet from "./Pet";

const App = () => {
  const theme = useState("red");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1 id="logo">Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
