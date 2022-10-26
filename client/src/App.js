import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {
  
  return (
    <Router>
      <Switch>
      <Route  exact path={"/"}>
          
          <Login/>
        </Route>
        <Route path="/login"> <Login /></Route>
        <Route  path="/register">
          
          <Register/>
        </Route>
        <Route path="/messenger">
          
          <Messenger/>
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
