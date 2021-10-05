// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title="Text Utils" about="About Us"></Navbar> */}
      <Navbar title="Text Utils" />
      <div className="container">
        <TextForm heading="Enter the text here" />
        {/* <div className="container my-3">
          <About />
        </div> */}
      </div>
    </>
  );
}

export default App;
