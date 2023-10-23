import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Commitees from './components/Commitees';
import ContactUs from './components/ContactUs';
import Keynotespeaker from './components/Keynotespeaker';
import ProgramSchedule from './components/ProgramSchedule';
import AuthorsInfo from './components/AuthorsInfo';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Commitees" element={<Commitees />} />
          <Route exact path="/Contact" element={<ContactUs />} />
          <Route exact path="/Keynote Speakers" element={<Keynotespeaker />} />
          <Route exact path="/Program Schedule" element={<ProgramSchedule />} />
          <Route exact path="/Authors Info" element={<AuthorsInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
