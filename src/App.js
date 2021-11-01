import {Provider} from 'react-redux';
import {store} from "./redux";
import {CMain, CPersonCart} from "./components";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {createBrowserHistory} from "history";
import './App.css';

function App() {
  return (
    <Provider store = {store}>
      <Router history = {createBrowserHistory}>
        <Switch>
          <Route exact path = "/characters" component = {CMain}/>
          <Route exact path = "/characters/:id" component= {CPersonCart}/>
          <Route render={() => <Redirect to="/characters" />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
