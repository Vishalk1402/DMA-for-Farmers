import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ImageSlider from "./components/slider";
import Product from "./components/Product";
import Footer from "./components/Footer";
import SignUp from "./pages/Sign in";  
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Overview from "./sub-pages/Overview";
import Orders from "./sub-pages/Orders";
import Analytics from "./sub-pages/Analytics";
import Settings from "./sub-pages/Settings";
import MainDashboardContent from "./sub-pages/Maindashcontent";
import PrivacyPolicy from "./pages/Privacy";
import "./App.css";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<><Home /><ImageSlider /> <Product/><Footer /></>} />
          <Route path="/product" element={<><Home /> <Product /> <Footer/></>} />
          <Route path="/About" element={<><Home /> <About /> <Footer/></>} />
          <Route path="/Contact" element={<><Home /> <Contact /> <Footer/></>} />
          <Route path="/Profile" element={<><Home /> <Profile /> <Footer/></>} />
          <Route path="/Privacy" element={<><Home /> <PrivacyPolicy /> <Footer/></>} />
          <Route path="/Sign in" element={<><Home /><ImageSlider /><SignUp /><Product /><Footer/></>} />
          <Route path="/Login" element={<><Home /><ImageSlider /><Login /><Product /><Footer/></>} />
          
          <Route path="/Dashboard" element={<><Home /> <Dashboard /> <Footer /></>} >
            <Route index element={<MainDashboardContent />} />
            <Route path="Overview" element={<Overview />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="Analytics" element={<Analytics />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
