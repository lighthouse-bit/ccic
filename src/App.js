import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Pages/About_Us/AboutUs';
import VisionMission from './Components/Navbar/About_us/VisionMission';
import Message from './Components/Navbar/About_us/Message';
import Team from './Components/Navbar/About_us/Team';
import Objectives from './Components/Navbar/About_us/Objectives';
import Programs from './Pages/Programs/Programs';
import AdvanceWomen from './Pages/Programs/AdvanceWomen';
import Leadership from './Pages/Programs/Leadership';
import LocalConference from './Pages/Programs/LocalConference';
import YouthConsult from './Pages/Programs/YouthConsult';
import Afforestation from './Pages/Programs/Afforestation';
import Hygiene from './Pages/Programs/Hygiene';
import YouthLeadership from './Pages/Programs/YouthLeadership';
import Blog from './Pages/Blog/Blog';
import Donations from './Pages/More/Donations';
import ContactUs from './Pages/More/ContactUs';
import Gallery from './Pages/More/Gallery';
import Admin from './Pages/Admin/Admin';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* Public Pages with Navbar and Footer */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us/vision-mission"
            element={
              <>
                <Navbar />
                <VisionMission />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us/message-founder"
            element={
              <>
                <Navbar />
                <Message />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us/our-team"
            element={
              <>
                <Navbar />
                <Team />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us/objectives"
            element={
              <>
                <Navbar />
                <Objectives />
                <Footer />
              </>
            }
          />
          <Route
            path="/programs"
            element={
              <>
                <Navbar />
                <Programs />
                <Footer />
              </>
            }
          />
          <Route
            path="/programs/women-climate"
            element={
              <>
                <Navbar />
                <AdvanceWomen />
                <Footer />
              </>
            }
          />
          <Route
            path="/programs/youth-leadership"
            element={
              <>
                <Navbar />
                <Leadership />
                <Footer />
              </>
            }
          />
          <Route
            path="/programs/lcoy"
            element={
              <>
                <Navbar />
                <LocalConference />
                <Footer />
              </>
            }
          />
          <Route
            path="/programs/virtual-consultations"
            element={
              <>
                <Navbar />
                <YouthConsult />
                <Footer />
              </>
            }
          />
          <Route
            path="/programs/afforestation"
            element={
              <>
                <Navbar />
                <Afforestation />
                <Footer />
              </>
            }
          />
          <Route
            path="/programs/hygiene"
            element={
              <>
                <Navbar />
                <Hygiene />
                <Footer />
              </>
            }
          />
          <Route
            path="/programs/leadership"
            element={
              <>
                <Navbar />
                <YouthLeadership />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Navbar />
                <Blog />
                <Footer />
              </>
            }
          />
          <Route
            path="/donation"
            element={
              <>
                <Navbar />
                <Donations />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Navbar />
                <Gallery />
                <Footer />
              </>
            }
          />
        {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
