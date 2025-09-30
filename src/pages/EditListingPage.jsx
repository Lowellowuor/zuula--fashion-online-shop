// src/pages/EditListingPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  Upload, 
  Image, 
  Tag, 
  DollarSign, 
  Calendar,
  MapPin,
  Shield,
  CheckCircle,
  AlertCircle,
  Trash2
} from "lucide-react";

export default function EditListingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {};

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    size: '',
    color: '',
    condition: '',
    location: '',
    rentPrice: '',
    buyPrice: '',
    deposit: '',
    tags: [],
    available: true,
    rentalPeriod: 'daily', // daily, weekly, monthly
    minRentalDays: 1,
    maxRentalDays: 7
  });

  const [images, setImages] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Categories and options
  const categories = ['Wedding', 'Party', 'Graduation', 'Cultural', 'Formal', 'Casual', 'Traditional', 'Business'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const conditions = ['Brand New', 'Excellent', 'Very Good', 'Good', 'Fair'];
  const colors = ['Red', 'Blue', 'Green', 'Black', 'White', 'Brown', 'Pink', 'Purple', 'Yellow', 'Orange', 'Multi-color', 'Floral'];
  const locations = ['Kampala', 'Entebbe', 'Jinja', 'Mbarara', 'Gulu', 'Mbale', 'Fort Portal', 'Other'];

  useEffect(() => {
    if (item) {
      // Pre-populate form with existing item data
      setFormData({
        title: item.title || '',
        description: item.description || '',
        category: item.category || '',
        size: item.size || '',
        color: item.color || '',
        condition: item.condition || '',
        location: item.location || '',
        rentPrice: item.price || '',
        buyPrice: item.buyPrice || '',
        deposit: item.deposit || '',
        tags: item.tags || [],
        available: item.available !== undefined ? item.available : true,
        rentalPeriod: 'daily',
        minRentalDays: 1,
        maxRentalDays: 7
      });
      setImages(item.images || [item.image].filter(Boolean));
    }
  }, [item]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      isNew: true
    }));
    setImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const moveImage = (fromIndex, toIndex) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    setImages(newImages);
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.size) newErrors.size = 'Size is required';
    if (!formData.color) newErrors.color = 'Color is required';
    if (!formData.condition) newErrors.condition = 'Condition is required';
    if (!formData.location) newErrors.location = 'Location is required';
    
    // At least one price should be provided
    if (!formData.rentPrice && !formData.buyPrice) {
      newErrors.rentPrice = 'At least one price (rent or buy) is required';
    }

    if (formData.rentPrice && formData.rentPrice <= 0) {
      newErrors.rentPrice = 'Rent price must be greater than 0';
    }

    if (formData.buyPrice && formData.buyPrice <= 0) {
      newErrors.buyPrice = 'Buy price must be greater than 0';
    }

    if (formData.rentPrice && !formData.deposit) {
      newErrors.deposit = 'Deposit is required for rental items';
    }

    if (images.length === 0) {
      newErrors.images = 'At least one image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Updating listing:', { id, ...formData, images });
      
      // Success - redirect to listing or dashboard
      alert('Listing updated successfully!');
      navigate('/dashboard?tab=listings');
    } catch (error) {
      alert('Failed to update listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this listing? This action cannot be undone.')) {
      try {
        // Simulate delete API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Listing deleted successfully!');
        navigate('/dashboard?tab=listings');
      } catch (error) {
        alert('Failed to delete listing. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-background-200 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-forest">Edit Listing</h1>
              <p className="text-slate-grey">Update your outfit details and pricing</p>
            </div>
          </div>
          
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
            Delete Listing
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="premium-card">
            <h2 className="text-xl font-semibold text-forest mb-6 flex items-center gap-2">
              <CheckCircle className="text-emerald" />
              Basic Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-grey mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., Elegant Red Gomesi"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body ${
                    errors.title ? 'border-red-300' : 'border-background-300'
                  }`}
                />
                {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-grey mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body ${
                    errors.category ? 'border-red-300' : 'border-background-300'
                  }`}
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-grey mb-2">
                  Size *
                </label>
                <select
                  value={formData.size}
                  onChange={(e) => handleInputChange('size', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body ${
                    errors.size ? 'border-red-300' : 'border-background-300'
                  }`}
                >
                  <option value="">Select Size</option>
                  {sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                {errors.size && <p className="text-red-600 text-sm mt-1">{errors.size}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-grey mb-2">
                  Color *
                </label>
                <select
                  value={formData.color}
                  onChange={(e) => handleInputChange('color', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body ${
                    errors.color ? 'border-red-300' : 'border-background-300'
                  }`}
                >
                  <option value="">Select Color</option>
                  {colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
                {errors.color && <p className="text-red-600 text-sm mt-1">{errors.color}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-grey mb-2">
                  Condition *
                </label>
                <select
                  value={formData.condition}
                  onChange={(e) => handleInputChange('condition', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body ${
                    errors.condition ? 'border-red-300' : 'border-background-300'
                  }`}
                >
                  <option value="">Select Condition</option>
                  {conditions.map(condition => (
                    <option key={condition} value={condition}>{condition}</option>
                  ))}
                </select>
                {errors.condition && <p className="text-red-600 text-sm mt-1">{errors.condition}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-grey mb-2">
                  Location *
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body ${
                    errors.location ? 'border-red-300' : 'border-background-300'
                  }`}
                >
                  <option value="">Select Location</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-grey mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows="4"
                placeholder="Describe your outfit in detail. Include features, material, special care instructions, etc."
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body ${
                  errors.description ? 'border-red-300' : 'border-background-300'
                }`}
              />
              {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
            </div>
          </div>

          {/* Pricing */}
          <div className="premium-card">
            <h2 className="text-xl font-semibold text-forest mb-6 flex items-center gap-2">
              <DollarSign className="text-emerald" />
              Pricing & Availability
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Rental Pricing */}
              <div className="space-y-4">
                <h3 className="font-semibold text-forest">Rental Options</h3>
                
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Rent Price (UGX per day)
                  </label>
                  <input
                    type="number"
                    value={formData.rentPrice}
                    onChange={(e) => handleInputChange('rentPrice', e.target.value)}
                    placeholder="50000"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body ${
                      errors.rentPrice ? 'border-red-300' : 'border-background-300'
                    }`}
                  />
                  {errors.rentPrice && <p className="text-red-600 text-sm mt-1">{errors.rentPrice}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Security Deposit (UGX)
                  </label>
                  <input
                    type="number"
                    value={formData.deposit}
                    onChange={(e) => handleInputChange('deposit', e.target.value)}
                    placeholder="10000"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body ${
                      errors.deposit ? 'border-red-300' : 'border-background-300'
                    }`}
                  />
                  {errors.deposit && <p className="text-red-600 text-sm mt-1">{errors.deposit}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-grey mb-2">
                      Min Rental Days
                    </label>
                    <input
                      type="number"
                      value={formData.minRentalDays}
                      onChange={(e) => handleInputChange('minRentalDays', parseInt(e.target.value))}
                      min="1"
                      className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-grey mb-2">
                      Max Rental Days
                    </label>
                    <input
                      type="number"
                      value={formData.maxRentalDays}
                      onChange={(e) => handleInputChange('maxRentalDays', parseInt(e.target.value))}
                      min="1"
                      className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                    />
                  </div>
                </div>
              </div>

              {/* Purchase Pricing */}
              <div className="space-y-4">
                <h3 className="font-semibold text-forest">Purchase Options</h3>
                
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Buy Price (UGX)
                  </label>
                  <input
                    type="number"
                    value={formData.buyPrice}
                    onChange={(e) => handleInputChange('buyPrice', e.target.value)}
                    placeholder="250000"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body ${
                      errors.buyPrice ? 'border-red-300' : 'border-background-300'
                    }`}
                  />
                  {errors.buyPrice && <p className="text-red-600 text-sm mt-1">{errors.buyPrice}</p>}
                </div>

                <div className="mt-6">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.available}
                      onChange={(e) => handleInputChange('available', e.target.checked)}
                      className="rounded text-emerald focus:ring-emerald h-5 w-5"
                    />
                    <span className="font-medium text-forest">Available for rent/purchase</span>
                  </label>
                  <p className="text-sm text-slate-grey mt-1 ml-8">
                    Uncheck to temporarily hide this listing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="premium-card">
            <h2 className="text-xl font-semibold text-forest mb-6 flex items-center gap-2">
              <Image className="text-emerald" />
              Photos
            </h2>

            {errors.images && <p className="text-red-600 text-sm mb-4">{errors.images}</p>}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image.preview || image}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="opacity-0 group-hover:opacity-100 bg-red-500 text-white p-1 rounded transition-opacity"
                    >
                      <Trash2 size={14} />
                    </button>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => moveImage(index, index - 1)}
                        className="opacity-0 group-hover:opacity-100 bg-emerald text-white p-1 rounded transition-opacity"
                      >
                        ↑
                      </button>
                    )}
                    {index < images.length - 1 && (
                      <button
                        type="button"
                        onClick={() => moveImage(index, index + 1)}
                        className="opacity-0 group-hover:opacity-100 bg-emerald text-white p-1 rounded transition-opacity"
                      >
                        ↓
                      </button>
                    )}
                  </div>
                  {index === 0 && (
                    <div className="absolute top-2 left-2 bg-emerald text-white text-xs px-2 py-1 rounded">
                      Main
                    </div>
                  )}
                </div>
              ))}
              
              {/* Upload Button */}
              <label className="border-2 border-dashed border-background-300 rounded-lg h-32 flex flex-col items-center justify-center cursor-pointer hover:border-emerald transition-colors">
                <Upload size={24} className="text-slate-grey mb-2" />
                <span className="text-sm text-slate-grey text-center">Add Photos</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            <p className="text-sm text-slate-grey">
              Upload clear photos from different angles. First image will be the main photo.
              Recommended: 4-8 photos, JPEG/PNG format, max 5MB each.
            </p>
          </div>

          {/* Tags */}
          <div className="premium-card">
            <h2 className="text-xl font-semibold text-forest mb-6 flex items-center gap-2">
              <Tag className="text-emerald" />
              Tags & Keywords
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-emerald-600"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                placeholder="Add a tag (e.g., traditional, wedding, luxury)"
                className="flex-1 px-4 py-2 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-background-200 text-forest rounded-xl hover:bg-background-300 transition-colors"
              >
                Add Tag
              </button>
            </div>
            <p className="text-sm text-slate-grey mt-2">
              Add relevant tags to help customers find your item. Press Enter or click Add Tag.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-8 py-3 border-2 border-background-300 text-slate-grey rounded-xl hover:bg-background-100 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                isSubmitting
                  ? 'bg-background-300 text-slate-grey cursor-not-allowed'
                  : 'bg-emerald text-white hover:bg-forest shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? 'Updating...' : 'Update Listing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}