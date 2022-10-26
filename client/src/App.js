
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Messenger from "./pages/messenger/Messenger";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route >
          
          <Messenger />
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
