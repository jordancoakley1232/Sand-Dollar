import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom"

// Components
import Home from './Pages/index';
import SigninPage from './Pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
