import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="fixed top-0 left-0 w-full bg-background-50/95 backdrop-blur-md border-b border-background-300 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary font-heading hover:text-accent transition-colors duration-300">
          Zuula
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-text-secondary hover:text-accent font-medium transition-all duration-300 hover:-translate-y-0.5">Home</Link>
          <Link to="/browse" className="text-text-secondary hover:text-accent font-medium transition-all duration-300 hover:-translate-y-0.5">Browse</Link>
          <Link to="/dashboard" className="text-text-secondary hover:text-accent font-medium transition-all duration-300 hover:-translate-y-0.5">Dashboard</Link>
          <Link to="/upload" className="text-text-secondary hover:text-accent font-medium transition-all duration-300 hover:-translate-y-0.5">Upload</Link>
          <Link to="/profile" className="text-text-secondary hover:text-accent font-medium transition-all duration-300 hover:-translate-y-0.5">Profile</Link>
          <Link to="/messages" className="text-text-secondary hover:text-accent font-medium transition-all duration-300 hover:-translate-y-0.5">Messages</Link>
        </div>

        {/* Auth Links */}
        <div className="flex gap-4 items-center">
          <Link to="/login" className="text-text-secondary hover:text-accent font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-background-200">Login</Link>
          <Link to="/signup" className="px-6 py-2 bg-gradient-to-r from-accent to-brass text-primary-900 font-semibold rounded-lg hover:from-accent-600 hover:to-accent-800 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}