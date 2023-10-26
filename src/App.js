import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Commitees from "./components/Commitees";
import ContactUs from "./components/ContactUs";
import Keynotespeaker from "./components/Keynotespeaker";
import ProgramSchedule from "./components/ProgramSchedule";
import AuthorsInfo from "./components/AuthorsInfo";
import Callforpapers from "./components/Callforpapers";
import Specialsession from "./components/Specialsession";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Commitees" element={<Commitees />} />
          <Route exact path="/CallforPapers" element={<Callforpapers />} />
          <Route exact path="/AuthorsInfo" element={<AuthorsInfo />} />
          <Route exact path="/KeynoteSpeakers" element={<Keynotespeaker />} />
          <Route exact path="/ProgramSchedule" element={<ProgramSchedule />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/SpecialSession" element={<Specialsession />} />
          <Route exact path="/Contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
