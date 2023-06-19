import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error10 from "./pages/Error10 ";
import Home from "./pages/Home";

import RequiredAuth from "./components/RequiredAuth";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contactus from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";
import DonarProfile from "./pages/DonarProfile";
import Checkout from './pages/Checkout'

import EditProfile from "./components/EditProfile";
import Students from "./pages/Students";
import { useEffect, useState } from "react";
import ProgramDetails from "./pages/ProgramDetails";
import Programs from "./pages/Programs";



function App() {
  const [currentPath, setCurrentPath] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [window.location.pathname]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    // testing
    <BrowserRouter>
      {currentPath !== "/DonarProfile" && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sginup" element={<SignUp />} />

        <Route path="Studants" element={<Students />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="ourPrograms" element={<Programs />} /> 
    
        <Route path="programDetails/:id" element={<ProgramDetails/>} />

        <Route path="Checkout" element={<Checkout />} />
        <Route path="Checkout/:id" element={<Checkout />} />

        <Route element={<RequiredAuth />}>
        <Route path="/DonarProfile" element={<DonarProfile />} /> 
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="*" element={<Error10 />} />
        </Route>

      </Routes >
      <Footer />
    </BrowserRouter >
  );
}

export default App;
