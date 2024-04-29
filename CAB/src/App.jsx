import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { About } from "./pages/About";
import {Contact} from "./pages/Contact";
import {Book} from "./pages/Book";





const App = () => {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/book" element={<Book/>}/>
          <Route path="/contact" element={<Contact/>}/>
         
          
          
          
          </Routes>
      </Router>
    </div>
  );
};

export default App;