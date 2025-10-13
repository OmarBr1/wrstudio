import "./App.css";
import Navbar from "./components/Navbar"; 
import Home from "./pages/home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
  

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
    
  );
}
export default App;







      {/* <div
        className="mar"
        style={{ height: "200px", width: "150", backgroundColor: "#F9FAFB" }}
      >
        <div className="cllr" style={{ color: "#1E2A38", fontSize: "80px" }}>
          Navy Blue
        </div>
        <div className="clr" style={{ color: "#00BFA6" }}>
          Teal{" "}
        </div>
      </div> */}
      {/* <div
        className="marr"
        style={{ height: "200px", width: "150", backgroundColor: "#FF6B6B" }}
      >
        <div className="cr" style={{ color: "#111111", fontSize: "80px" }}>
          Navy Blue
        </div>
        <div className="cl" style={{ color: "#FFFFFF" }}>
          Teal{" "}
        </div> */}
      {/* </div> */}