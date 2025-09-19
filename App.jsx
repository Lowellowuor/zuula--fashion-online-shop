import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListingManagement from "./pages/ListingManagement";
import Analytics from "./src/components/Admin/Analytics";
import Transactions from "./src/components/Admin/TransactionManagement";
import UserManagement from "./src/components/Admin/UserManagement";
import VerificationCenter from "./src/components/Admin/VerificationCenter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listings" element={<ListingManagement />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/verifications" element={<VerificationCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
