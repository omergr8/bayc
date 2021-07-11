import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Pages/Common/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <div className="main">
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
