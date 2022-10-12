import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home"
import Navbar from './component/Navbar';
import Footer from './component/Footer'
import Social from './component/Social'
import Main from './component/Main'
import Academic from './pages/Academic/Academic'
import Infrastructure from './pages/Infrastructure/Infrastructure'
import Newsletter from './pages/Newsletter/Newsletter'
import Contactus from './pages/Contact/Contactus'
import RulesRegulation from "./pages/RulesRegulation/RulesRegulation";
import Club from "./pages/Club/Club";
import Beyondacademices from "./pages/Beyondacademices/Beyondacademices";
import Ourvision from "./pages/Ourvision/Ourvision";
import Ourmission from "./pages/Ourmission/Ourmission";
import RecognixeAffliated from "./pages/RecongnixeAffliated/RecognixeAffliated";
import Msg from "./pages/Msg/Msg";
import Ourmotto from "./pages/Ourmotto/Ourmotto";
import Schoolcircular from "./pages/Schoolcircular/Schoolcircular";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Main />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/academic" element={<Academic />} />
          <Route exact path="/club" element={<Club />} />
          <Route exact path="/school-circular" element={<Schoolcircular />} />
          <Route exact path="/our-vision" element={<Ourvision />} />
          <Route exact path="/our-motto" element={<Ourmotto />} />
          <Route exact path="/our-mission" element={<Ourmission />} />
          <Route exact path="/recognized-affiliated" element={<RecognixeAffliated />} />
          <Route exact path="/message" element={<Msg />} />
          <Route exact path="/beyond-academic" element={<Beyondacademices />} />
          <Route exact path="/infrastructure" element={<Infrastructure />} />
          <Route exact path="/contact-us" element={<Contactus />} />
          <Route exact path="/emagazine" element={<Newsletter />} />
          <Route exact path="/rules-regulation" element={<RulesRegulation />} />
        </Routes>
        <div style={{ padding: "3vh 0 5vh 0", backgroundColor: "rgb(7 167 128 / 20%)" }}>
          <h3 className='text-center display-6' style={{ fontWeight: "600" }}>Let's Connect On Social</h3>
          <Social />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
