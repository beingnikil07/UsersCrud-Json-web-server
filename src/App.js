import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route exact path="users/adduser" element={<AddUser />}></Route>
          <Route exact path="users/edituser" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
