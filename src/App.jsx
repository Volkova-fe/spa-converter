import React from "react";
import { HashRouter } from 'react-router-dom';
import AppRouter from "./components/app-router/app-router";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

function App() {

  return (
    <HashRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </HashRouter>
  )
}

export default App;