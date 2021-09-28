import { Route, BrowserRouter, Switch } from "react-router-dom";

import Login from "./pages/LoginPage/Login";
import Register from "./pages/registerPage/Register";
import Home from "./pages/HomePage/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route component = { Login }  path="/" exact />
          <Route component = { Register }  path="/register" />
          <Route component = { Home }  path="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
