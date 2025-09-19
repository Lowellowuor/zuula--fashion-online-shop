import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <p className="text-gray-600 mb-6">Create your account to start renting and listing outfits.</p>

      <Link to="/login" className="text-emerald-600 hover:underline block mb-2">
        Already have an account? Login
      </Link>
      <Link to="/browse" className="text-blue-600 hover:underline">
        Continue to Browse
      </Link>
    </div>
  );
}

export default SignUpPage;
