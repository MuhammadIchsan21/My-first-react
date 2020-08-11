import React from "react";
import HelloWorld from "./components/helloWorld";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Ichsan" />
      <Footer />
    </div>
  );
}

export default App;
