import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Candidates from "./pages/Candidates";
import Home from './pages/Home';
import JobDetails from "./pages/JobDetails";
import JobsGrid from "./pages/JobsGrid";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';


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
            <Route path="job-details" element={<JobDetails />} />
            <Route path="candidates" element={<Candidates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
