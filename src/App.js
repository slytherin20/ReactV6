import { render } from "react-dom";
import SearchParams from "./SearchParams";
//import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="logo">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
