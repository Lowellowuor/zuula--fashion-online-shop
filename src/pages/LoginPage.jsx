import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <p className="text-gray-600 mb-6">Welcome back! Please log in to continue.</p>

      <Link to="/signup" className="text-emerald-600 hover:underline block mb-2">
        Don’t have an account? Sign Up
      </Link>
      <Link to="/browse" className="text-blue-600 hover:underline">
        Continue to Browse
      </Link>
    </div>
  );
}

export default LoginPage;
