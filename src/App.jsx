import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import BrowsePage from "./pages/BrowsePage";
import ItemDetailPage from "./pages/ItemDetailPage";
import DashboardPage from "./pages/DashboardPage";
import UploadItemPage from "./pages/UploadItemPage";
import ProfilePage from "./pages/ProfilePage";
import ItemPage from "./pages/ItemPage"; 
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import RentPage from "./pages/RentPage";
import WishlistPage from "./pages/WishlistPage";
import BlogPage from "./pages/BlogPage";
import PopularCategoriesPage from "./pages/PopularCategoriesPage";
import NewArrivalsSection from "./pages/NewArrivalsSection";
import ClosetPage from "./pages/ClosetPage";
import MessagesPage from "./pages/MessagesPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ReturnsAndRefunds from "./pages/ReturnAndRefundsPage";


// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      {/* Show header on all pages */}
      <Header />

      {/* Main content */}
      <Routes>
        {/* Landing / Home */}
        <Route path="/" element={<HomePage />} />

        {/* Browse & Items */}
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/item/:id" element={<ItemDetailPage />} />
        <Route path="/itempage/:id" element={<ItemPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />

        {/* Dashboard + User */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/upload" element={<UploadItemPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/rent/:id" element={<RentPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/popular-categories" element={<PopularCategoriesPage />} />
        <Route path="/new-arrivals" element={<NewArrivalsSection />} />
        <Route path="/closet" element={<ClosetPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/returns" element={<ReturnsAndRefunds />} />
        

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
