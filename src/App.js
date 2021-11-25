import './App.css';
import Radio from "./components/Radio";
import { Switch, Route } from "react-router-dom";
import FavoriteArtist from './components/FavoriteArtist';
import SupportMusic from './components/SupportMusic';


function App() {
  return (
    <div className="App">
      <h1>seed&groove</h1>
      <Switch>
        <Route exact path="/">
          <Radio />
        </Route>  
        <Route path="/favorites">
          <FavoriteArtist />
        </Route>
        <Route path="/support-music">
          <SupportMusic />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
