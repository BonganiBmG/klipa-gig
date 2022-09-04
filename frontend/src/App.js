import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import Candidates from "./pages/Candidates";
import Companies from "./pages/Companies";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import JobDetails from "./pages/JobDetails";
import JobsGrid from "./pages/JobsGrid";
import CreateJob from "./pages/CreateJob";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import Government from "./pages/Government";
import Profile from "./pages/Profile";
import CandidateDetail from "./pages/CandidateDetail";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="jobs-grid" element={<JobsGrid />} />
            <Route path="/job/:id/detail" element={<JobDetails />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="/candidate/detail" element={<CandidateDetail />} />
            <Route path="companies" element={<Companies />} />
            <Route path="government" element={<Government />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/job/:id/edit" element={<CreateJob />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
