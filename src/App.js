import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CardDesign from './components/CardDesign/CardDesign';
import ToDo from './components/ToDo/ToDo';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/card-design">
              <CardDesign></CardDesign>
            </Route>
            <Route path="/toDo">
              <ToDo></ToDo>
            </Route>
            <Route path="/multi-step-form">
              <MultiStepForm></MultiStepForm>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
