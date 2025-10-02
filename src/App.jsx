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
import EditListingPage from "./pages/EditListingPage";
import BookingsPage from "./pages/BookingsPage";
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
import FAQsPage from "./pages/FAQsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ShippingInfoPge from "./pages/ShippingInfoPage"; 
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import BuyPage from "./pages/BuyPage";
import EditPage from "./pages/EditProfilePage";
import EarningsPage from "./pages/EarningsPage";
import ListingPage from "./pages/ListingPage .JSX";

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
        
        <Route path="/wishlist" element={<WishlistPage />} />

        {/* Dashboard + User */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/upload" element={<UploadItemPage />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard/listings" element={<DashboardPage />} />
        <Route path="/dashboard/bookings" element={<BookingsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/rent/:id" element={<RentPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/popular-categories" element={<PopularCategoriesPage />} />
        <Route path="/new-arrivals" element={<NewArrivalsSection />} />
        <Route path="/closet" element={<ClosetPage />} />
        <Route path="/dashboard/messages" element={<MessagesPage />} />
        <Route path="/profile/messages" element={<MessagesPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/returns" element={<ReturnsAndRefunds />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/shipping-info" element={<ShippingInfoPge />} />
       <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/buy/:id" element={<BuyPage />} />
        <Route path="/edit-listing/:id" element={<EditListingPage />} />
        <Route path="/edit/:id/:type" element={<EditPage />} />
        <Route path="/dashboard/earnings" element={<EarningsPage />} />
        <Route path="/dashboard/listings/:id" element={<ListingPage />} />

        {/* Terms and Conditions - Added both paths for flexibility */}
        <Route path="/terms" element={<TermsAndConditionsPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />

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