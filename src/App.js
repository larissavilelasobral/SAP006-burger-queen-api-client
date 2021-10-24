import { Route, BrowserRouter, Switch } from "react-router-dom";

import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Hall from "./pages/HallPage/Home";
import NovoPedido from "./pages/NovosPedidosPage/NovoPedido";
import Cozinha from "./pages/CozinhaPage/Cozinha";
import Prontos from "./pages/PedidosProntos/Prontos";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route component = { Login }  path="/" exact />
          <Route component = { Register }  path="/register" />
          <Route component = { Hall }  path="/hall" />
          <Route component = { NovoPedido }  path="/novo" />
          <Route component = { Cozinha }  path="/cozinha" />
          <Route component = { Prontos }  path="/prontos" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
