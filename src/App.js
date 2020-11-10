import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import Cursos from "./components/Cursos";
import Trayectoria from "./components/Trayectoria";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/trayectoria" exact component={Trayectoria} />
        <Route path="/contacto" exact component={Contacto} />
        <Route path="/cursos" exact component={Cursos} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
