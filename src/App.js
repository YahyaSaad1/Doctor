import './App.css';
import Navbar from "./components/Navbar";
import Mainsec from "./components/Mainsec";
import AboutUs from "./components/AboutUs";
import OurSpecialty from "./components/OurSpecialty";
import Integrity from "./components/Integrity";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Mainsec/>
      <AboutUs/>
      <OurSpecialty/>
      <Integrity/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
