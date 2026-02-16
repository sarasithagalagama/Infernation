import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Routers";
import Navbar from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import { ModalVideoProvider } from "./Components/Video/ModalVideoContext";
import { NavProvider } from "./Components/Context/NavContext";
import Preloader from "./Components/Loader/Preloader";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {loading && <Preloader />}
      <NavProvider>
        <ModalVideoProvider>
          <Navbar />
          <Sidebar />
          <AppRouter />
          <Footer />
        </ModalVideoProvider>
      </NavProvider>
    </Router>
  );
}

export default App;
