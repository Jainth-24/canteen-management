import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
import Home from "./screens/home.jsx";
import Login from "./screens/login.jsx";
import Signup from "./screens/signup.jsx";
import Juices from "./screens/juices.jsx";
import Snacks from "./screens/snacks.jsx";
import Lunch from "./screens/lunch.jsx";
import { CartProvider } from "./hooks/useCart.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
   
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setIsLoading(false); // Mark loading as false after checking token
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while checking token
  }

  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        ></Route>
        <Route
          exact
          path="/juices"
          element={isAuthenticated ? <Juices /> : <Navigate to="/login" />}
        ></Route>
         <Route
          exact
          path="/snacks"
          element={isAuthenticated ? <Snacks /> : <Navigate to="/login" />}
        ></Route>
           <Route
          exact
          path="/lunch"
          element={isAuthenticated ? <Lunch /> : <Navigate to="/login" />}
        ></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
    </CartProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
