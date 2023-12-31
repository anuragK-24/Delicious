import Header from "./components/Header";
import Dish from "./pages/Dish/Dish";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditDish from "./pages/EditDish/EditDish";
import AddDish from "./pages/AddDish/AddDish";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}

        {/* <Route path="/register" element={user ? <Home/> :<Register/>}/> */}
        <Route path="/" element={<Dish />} />

        <Route path="/edit/:dishId" element={<EditDish />} />

        <Route path="/dish/add" element={<AddDish />} />

        {/* <Route path="/write" element={user ? <Write/> : <Register/> }/>

      <Route path="/markdown" element={<MarkDown/>}/>

      <Route path="/contact" element={<Contact/>  }/>

      <Route path="/post/:postID" element={<Single/>}/> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
