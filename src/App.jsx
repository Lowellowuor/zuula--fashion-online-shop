// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages
import HomePage from "./pages/HomePage"; // Added HomePage
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import BrowsePage from "./pages/BrowsePage";
import ItemDetailPage from "./pages/ItemDetailPage";
import DashboardPage from "./pages/DashboardPage";
import UploadItemPage from "./pages/UploadItemPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes wrapped with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />  {/* Updated to HomePage */}
          <Route path="/landing" element={<LandingPage />} /> {/* optional landing page */}
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/upload" element={<UploadItemPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Auth pages (no Layout) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
