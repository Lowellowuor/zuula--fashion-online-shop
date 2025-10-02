import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  Upload, 
  Image, 
  User,
  CheckCircle,
  X,
} from "lucide-react";

function EditPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the user data passed from ProfilePage
  const { user: passedUser } = location.state || {};

  // State for form data
  const [formData, setFormData] = useState({
    images: [],
    name: "",
    username: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
  });

  const [loading, setLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);

  // Load existing data when editing
  useEffect(() => {
    // Load profile data (in real app, this would be an API call)
    const sampleProfile = passedUser || {
      name: "Sarah Johnson",
      username: "sarah_fashion",
      email: "sarah@example.com",
      phone: "+256 712 345 678",
      location: "Kampala",
      bio: "Fashion enthusiast with a passion for traditional Ugandan outfits.",
      images: ["https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop"]
    };
    
    setFormData(prev => ({ ...prev, ...sampleProfile }));
    setPreviewImages(sampleProfile.images || []);
  }, [passedUser]);

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      // For profile, only allow one image - replace existing
      const file = files[0];
      const newPreview = URL.createObjectURL(file);
      setPreviewImages([newPreview]);
      setFormData(prev => ({
        ...prev,
        images: [file]
      }));
    }
  };

  // Remove image
  const removeImage = () => {
    setPreviewImages([]);
    setFormData(prev => ({
      ...prev,
      images: []
    }));
  };

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, you would:
      // 1. Upload profile picture to cloud storage
      // 2. Send updated profile data to backend
      // 3. Handle response

      console.log('Profile updated:', formData);
      
      // Show success message and redirect
      alert('Profile picture updated successfully!');
      navigate('/profile');
      
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Profile
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-full bg-accent-100 text-accent">
              <User size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold text-text-primary">
                Edit Profile Picture
              </h1>
              <p className="text-text-secondary">
                Update your profile photo and basic information
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile Picture Upload Section */}
          <div className="premium-card">
            <h2 className="text-xl font-heading font-semibold text-text-primary mb-6 flex items-center gap-2">
              <Image size={20} />
              Profile Picture
            </h2>
            
            <div className="flex flex-col items-center space-y-6">
              {/* Current Profile Picture Preview */}
              {previewImages.length > 0 ? (
                <div className="relative">
                  <img
                    src={previewImages[0]}
                    alt="Profile Preview"
                    className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-lg"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors shadow-lg"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="w-48 h-48 rounded-full bg-background-300 border-4 border-background-400 flex items-center justify-center">
                  <User size={48} className="text-text-muted" />
                </div>
              )}
              
              {/* Upload Button */}
              <label className="border-2 border-dashed border-background-300 rounded-2xl p-8 cursor-pointer hover:border-primary transition-colors w-full max-w-md text-center">
                <div className="flex flex-col items-center gap-4">
                  <Upload size={32} className="text-text-muted" />
                  <div>
                    <p className="font-semibold text-text-primary mb-1">
                      {previewImages.length > 0 ? 'Change Profile Picture' : 'Upload Profile Picture'}
                    </p>
                    <p className="text-sm text-text-muted">
                      Click to browse or drag and drop
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      JPG, PNG, WEBP (Max 5MB)
                    </p>
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            
            <p className="text-sm text-text-muted mt-6 text-center">
              Upload a clear, recent photo that shows your face clearly. This helps build trust with other community members.
            </p>
          </div>

          {/* Basic Information (Read-only) */}
          <div className="premium-card">
            <h2 className="text-xl font-heading font-semibold text-text-primary mb-6 flex items-center gap-2">
              <User size={20} />
              Profile Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Full Name
                </label>
                <div className="w-full px-4 py-3 border border-background-300 rounded-lg bg-background-100 text-text-primary">
                  {formData.name}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Username
                </label>
                <div className="w-full px-4 py-3 border border-background-300 rounded-lg bg-background-100 text-text-primary">
                  {formData.username}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Email Address
                </label>
                <div className="w-full px-4 py-3 border border-background-300 rounded-lg bg-background-100 text-text-primary">
                  {formData.email}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Phone Number
                </label>
                <div className="w-full px-4 py-3 border border-background-300 rounded-lg bg-background-100 text-text-primary">
                  {formData.phone || "Not provided"}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Location
                </label>
                <div className="w-full px-4 py-3 border border-background-300 rounded-lg bg-background-100 text-text-primary">
                  {formData.location || "Not provided"}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Bio
                </label>
                <div className="w-full px-4 py-3 border border-background-300 rounded-lg bg-background-100 text-text-primary min-h-[80px]">
                  {formData.bio || "No bio yet"}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <p className="text-sm text-primary-700 text-center">
                To edit other profile information, please visit the full profile settings page.
              </p>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-background-300 text-text-primary rounded-lg hover:bg-background-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || previewImages.length === 0}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Updating...
                </>
              ) : (
                <>
                  <CheckCircle size={16} />
                  Update Profile Picture
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPage;