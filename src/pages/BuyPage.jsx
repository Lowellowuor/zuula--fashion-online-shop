// src/pages/BuyPage.jsx
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
  CreditCard, 
  Shield, 
  Truck, 
  CheckCircle, 
  ArrowLeft,
  MapPin,
  User,
  Clock,
  AlertCircle,
  Heart
} from "lucide-react";

export default function BuyPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  // State for purchase details
  const [purchaseDetails, setPurchaseDetails] = useState({
    quantity: 1,
    size: item?.size || 'M',
    color: item?.color || 'Default',
    deliveryOption: 'standard', // 'standard', 'express', 'pickup'
    deliveryAddress: '',
    giftWrap: false,
    giftMessage: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('mobile_money');
  const [billingAddress, setBillingAddress] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Uganda'
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [saveAddress, setSaveAddress] = useState(false);

  // Calculate costs
  const calculateCosts = () => {
    const basePrice = item.price * purchaseDetails.quantity;
    let deliveryFee = 0;
    
    switch (purchaseDetails.deliveryOption) {
      case 'standard':
        deliveryFee = 15000;
        break;
      case 'express':
        deliveryFee = 25000;
        break;
      case 'pickup':
        deliveryFee = 0;
        break;
    }

    const serviceFee = basePrice * 0.05; // 5% service fee
    const giftWrapFee = purchaseDetails.giftWrap ? 5000 : 0;
    const totalAmount = basePrice + deliveryFee + serviceFee + giftWrapFee;

    return {
      basePrice,
      deliveryFee,
      serviceFee,
      giftWrapFee,
      totalAmount
    };
  };

  const costs = calculateCosts();

  const handlePurchaseSubmit = async (e) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    if (!billingAddress.fullName || !billingAddress.email || !billingAddress.phone) {
      alert('Please fill in all required billing information');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Success - redirect to confirmation page
      navigate('/purchase-confirmation', { 
        state: { 
          item, 
          purchaseDetails, 
          billingAddress,
          costs,
          transactionId: 'PUR' + Date.now()
        }
      });
    } catch (error) {
      alert('Purchase failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-forest mb-4">Item Not Found</h2>
          <button 
            onClick={() => navigate('/browse')}
            className="btn-primary"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-background-200 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-bold text-forest">Complete Your Purchase</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Item Summary */}
            <div className="premium-card">
              <h2 className="text-xl font-semibold text-forest mb-4">Item Details</h2>
              <div className="flex gap-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-forest">{item.title}</h3>
                  <p className="text-slate-grey mb-2">{item.category} • Condition: {item.condition}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {item.seller}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald">UGX {item.price.toLocaleString()}</p>
                  <p className="text-sm text-slate-grey">One-time purchase</p>
                </div>
              </div>
            </div>

            {/* Purchase Options */}
            <div className="premium-card">
              <h2 className="text-xl font-semibold text-forest mb-4">Purchase Options</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Quantity
                  </label>
                  <select
                    value={purchaseDetails.quantity}
                    onChange={(e) => setPurchaseDetails(prev => ({
                      ...prev,
                      quantity: parseInt(e.target.value)
                    }))}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Size
                  </label>
                  <select
                    value={purchaseDetails.size}
                    onChange={(e) => setPurchaseDetails(prev => ({
                      ...prev,
                      size: e.target.value
                    }))}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Color
                  </label>
                  <select
                    value={purchaseDetails.color}
                    onChange={(e) => setPurchaseDetails(prev => ({
                      ...prev,
                      color: e.target.value
                    }))}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                  >
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Green">Green</option>
                  </select>
                </div>
              </div>

              {/* Gift Wrap Option */}
              <label className="flex items-center gap-3 p-4 border-2 border-background-300 rounded-xl cursor-pointer hover:border-emerald transition-colors">
                <input
                  type="checkbox"
                  checked={purchaseDetails.giftWrap}
                  onChange={(e) => setPurchaseDetails(prev => ({
                    ...prev,
                    giftWrap: e.target.checked
                  }))}
                  className="text-emerald focus:ring-emerald"
                />
                <div className="flex-1">
                  <p className="font-semibold text-forest">Add Gift Wrap</p>
                  <p className="text-sm text-slate-grey">Beautiful gift packaging with a personalized message</p>
                </div>
                <span className="font-semibold text-emerald">UGX 5,000</span>
              </label>

              {purchaseDetails.giftWrap && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Gift Message (Optional)
                  </label>
                  <textarea
                    value={purchaseDetails.giftMessage}
                    onChange={(e) => setPurchaseDetails(prev => ({
                      ...prev,
                      giftMessage: e.target.value
                    }))}
                    placeholder="Enter your gift message..."
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                  />
                </div>
              )}
            </div>

            {/* Delivery Options */}
            <div className="premium-card">
              <h2 className="text-xl font-semibold text-forest mb-4 flex items-center gap-2">
                <Truck className="text-emerald" />
                Delivery Options
              </h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 border-2 border-background-300 rounded-xl cursor-pointer hover:border-emerald transition-colors">
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="standard"
                    checked={purchaseDetails.deliveryOption === 'standard'}
                    onChange={(e) => setPurchaseDetails(prev => ({
                      ...prev,
                      deliveryOption: e.target.value
                    }))}
                    className="text-emerald focus:ring-emerald"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-forest">Standard Delivery</p>
                    <p className="text-sm text-slate-grey">UGX 15,000 • 3-5 business days</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-background-300 rounded-xl cursor-pointer hover:border-emerald transition-colors">
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="express"
                    checked={purchaseDetails.deliveryOption === 'express'}
                    onChange={(e) => setPurchaseDetails(prev => ({
                      ...prev,
                      deliveryOption: e.target.value
                    }))}
                    className="text-emerald focus:ring-emerald"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-forest">Express Delivery</p>
                    <p className="text-sm text-slate-grey">UGX 25,000 • 1-2 business days</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-background-300 rounded-xl cursor-pointer hover:border-emerald transition-colors">
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="pickup"
                    checked={purchaseDetails.deliveryOption === 'pickup'}
                    onChange={(e) => setPurchaseDetails(prev => ({
                      ...prev,
                      deliveryOption: e.target.value
                    }))}
                    className="text-emerald focus:ring-emerald"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-forest">Pickup from Seller</p>
                    <p className="text-sm text-slate-grey">Free • {item.location}</p>
                  </div>
                </label>
              </div>

              {/* Delivery Address */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-grey mb-2">
                  Delivery Address
                </label>
                <textarea
                  value={purchaseDetails.deliveryAddress}
                  onChange={(e) => setPurchaseDetails(prev => ({
                    ...prev,
                    deliveryAddress: e.target.value
                  }))}
                  placeholder="Enter your complete delivery address..."
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                />
              </div>
            </div>

            {/* Billing Information */}
            <div className="premium-card">
              <h2 className="text-xl font-semibold text-forest mb-4">Billing Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={billingAddress.fullName}
                    onChange={(e) => setBillingAddress(prev => ({
                      ...prev,
                      fullName: e.target.value
                    }))}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={billingAddress.email}
                    onChange={(e) => setBillingAddress(prev => ({
                      ...prev,
                      email: e.target.value
                    }))}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={billingAddress.phone}
                    onChange={(e) => setBillingAddress(prev => ({
                      ...prev,
                      phone: e.target.value
                    }))}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={billingAddress.city}
                    onChange={(e) => setBillingAddress(prev => ({
                      ...prev,
                      city: e.target.value
                    }))}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                  />
                </div>
              </div>
              
              <label className="flex items-center gap-3 mt-4">
                <input
                  type="checkbox"
                  checked={saveAddress}
                  onChange={(e) => setSaveAddress(e.target.checked)}
                  className="text-emerald focus:ring-emerald"
                />
                <span className="text-sm text-slate-grey">Save this address for future purchases</span>
              </label>
            </div>

            {/* Payment Method */}
            <div className="premium-card">
              <h2 className="text-xl font-semibold text-forest mb-4 flex items-center gap-2">
                <CreditCard className="text-emerald" />
                Payment Method
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border-2 border-background-300 rounded-xl cursor-pointer hover:border-emerald transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mobile_money"
                    checked={paymentMethod === 'mobile_money'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-emerald focus:ring-emerald"
                  />
                  <div>
                    <p className="font-semibold text-forest">Mobile Money</p>
                    <p className="text-sm text-slate-grey">MTN Mobile Money, Airtel Money</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-background-300 rounded-xl cursor-pointer hover:border-emerald transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-emerald focus:ring-emerald"
                  />
                  <div>
                    <p className="font-semibold text-forest">Credit/Debit Card</p>
                    <p className="text-sm text-slate-grey">Visa, Mastercard, American Express</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-background-300 rounded-xl cursor-pointer hover:border-emerald transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank_transfer"
                    checked={paymentMethod === 'bank_transfer'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-emerald focus:ring-emerald"
                  />
                  <div>
                    <p className="font-semibold text-forest">Bank Transfer</p>
                    <p className="text-sm text-slate-grey">Direct bank transfer</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="premium-card">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 text-emerald focus:ring-emerald"
                />
                <div>
                  <p className="font-semibold text-forest">
                    I agree to the Terms & Conditions and Purchase Agreement
                  </p>
                  <p className="text-sm text-slate-grey">
                    By proceeding, you agree to our purchase terms, return policy, and understand that this is a final sale. Returns are accepted within 7 days for defective items only.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Sidebar - Order Summary - 1/3 width */}
          <div className="space-y-6">
            <div className="premium-card sticky top-24">
              <h2 className="text-xl font-semibold text-forest mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-grey">Item Price</span>
                  <span className="font-semibold">UGX {costs.basePrice.toLocaleString()}</span>
                </div>
                
                {purchaseDetails.quantity > 1 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-ggrey">{item.price.toLocaleString()} × {purchaseDetails.quantity}</span>
                    <span></span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-slate-grey">Service Fee</span>
                  <span className="font-semibold">UGX {costs.serviceFee.toLocaleString()}</span>
                </div>

                {costs.deliveryFee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-grey">Delivery Fee</span>
                    <span className="font-semibold">UGX {costs.deliveryFee.toLocaleString()}</span>
                  </div>
                )}

                {costs.giftWrapFee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-grey">Gift Wrap</span>
                    <span className="font-semibold">UGX {costs.giftWrapFee.toLocaleString()}</span>
                  </div>
                )}

                <div className="border-t border-background-300 pt-3">
                  <div className="flex justify-between text-lg font-bold text-forest">
                    <span>Total Amount</span>
                    <span>UGX {costs.totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Purchase Benefits */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-emerald">
                  <CheckCircle size={16} />
                  <span>Own it forever</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald">
                  <Shield size={16} />
                  <span>7-day return policy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald">
                  <Heart size={16} />
                  <span>Quality guaranteed</span>
                </div>
              </div>

              <button
                onClick={handlePurchaseSubmit}
                disabled={!agreedToTerms || isProcessing}
                className={`w-full mt-6 py-4 rounded-xl font-semibold text-lg transition-all ${
                  agreedToTerms && !isProcessing
                    ? 'bg-emerald text-white hover:bg-forest shadow-lg hover:shadow-xl'
                    : 'bg-background-300 text-slate-grey cursor-not-allowed'
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="animate-spin" size={20} />
                    Processing...
                  </div>
                ) : (
                  `Complete Purchase - UGX ${costs.totalAmount.toLocaleString()}`
                )}
              </button>

              {/* Security Features */}
              <div className="mt-4 space-y-2 text-xs text-slate-grey">
                <div className="flex items-center gap-2">
                  <Shield size={12} className="text-emerald" />
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle size={12} className="text-emerald" />
                  <span>Buyer protection included</span>
                </div>
              </div>
            </div>

            {/* Seller Information */}
            <div className="premium-card">
              <h3 className="font-semibold text-forest mb-3">Seller Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-grey">Seller:</span>
                  <span className="font-semibold">{item.seller}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-grey">Location:</span>
                  <span>{item.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-grey">Rating:</span>
                  <span className="text-accent">★ {item.rating} ({item.reviews} reviews)</span>
                </div>
                {item.verified && (
                  <div className="flex justify-between">
                    <span className="text-slate-grey">Status:</span>
                    <span className="text-emerald font-semibold">Verified Seller</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}