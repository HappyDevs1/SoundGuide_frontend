import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Job from "./pages/Jobs";
import voiceRecognition from "./components/voiceRecognition";

function App () {
  return (
    <div>
      <nav className="flex h-20 items-center border-b-2">
        <div className="items-start ml-20">
          <a href="/" className="">SoundGuide</a>
        </div>
        <div className="ml-auto">
          <ul className="flex gap-10 mr-20">
            <li className="hover:text-sky-500">
              <a href="/home">Home</a>
            </li>
            <li className="hover:text-sky-500">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-sky-500">
              <a href="/job">Jobs</a>
            </li>
          </ul>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/job" element={<Job />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;