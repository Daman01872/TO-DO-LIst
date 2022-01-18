import "./css/main.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import Header from "./components/Header";
import ProtectedRoutes from './ProtectedRoutes'
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  
  return (
    <div className="App">
       <Router>
      <div>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          {/* <Route exact path="/todo">
          <DisplayTodos />
          <Todos />
          </Route> */}
          <ProtectedRoutes path="/todo" component={Todos} />
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
