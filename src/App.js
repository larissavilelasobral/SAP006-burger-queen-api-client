import { Route, BrowserRouter, Switch } from "react-router-dom";

import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Home from "./pages/HomePage/Home";
import NovoPedido from "./pages/NovosPedidosPage/NovoPedido";
import Pedidos from "./pages/PedidosPage/Pedidos";
import Cozinha from "./pages/CozinhaPage/Cozinha";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route component = { Login }  path="/" exact />
          <Route component = { Register }  path="/register" />
          <Route component = { Home }  path="/home" />
          <Route component = { NovoPedido }  path="/novo" />
          <Route component = { Cozinha }  path="/cozinha" />
          <Route component = { Pedidos }  path="/pedidos" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
