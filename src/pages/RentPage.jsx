// src/pages/RentPage.jsx
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Shield, 
  CreditCard, 
  Clock, 
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  User,
  Phone,
  Mail
} from "lucide-react";

export default function RentPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  // State for rental details
  const [rentalDetails, setRentalDetails] = useState({
    startDate: '',
    endDate: '',
    rentalDays: 1,
    pickupOption: 'delivery', // 'delivery' or 'pickup'
    deliveryAddress: '',
    specialRequests: '',
    insurance: true
  });

  const [paymentMethod, setPaymentMethod] = useState('mobile_money');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate rental period and costs
  const calculateRentalDetails = () => {
    if (!rentalDetails.startDate || !rentalDetails.endDate) return null;
    
    const start = new Date(rentalDetails.startDate);
    const end = new Date(rentalDetails.endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    const rentalCost = item.price * days;
    const serviceFee = rentalCost * 0.10; // 10% service fee
    const deliveryFee = rentalDetails.pickupOption === 'delivery' ? 15000 : 0;
    const totalAmount = rentalCost + serviceFee + deliveryFee + item.deposit;

    return {
      days,
      rentalCost,
      serviceFee,
      deliveryFee,
      totalAmount
    };
  };

  const costs = calculateRentalDetails();

  const handleRentalSubmit = async (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      // Here you would integrate with your payment gateway
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success - redirect to confirmation page
      navigate('/booking-confirmation', { 
        state: { 
          item, 
          rentalDetails, 
          costs,
          transactionId: 'TX' + Date.now()
        }
      });
    } catch (error) {
      alert('Payment failed. Please try again.');
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
      <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-background-200 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-bold text-forest">Complete Your Rental</h1>
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
                  <p className="text-slate-grey mb-2">{item.category} • Size: {item.size}</p>
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
                  <p className="text-2xl font-bold text-emerald">UGX {item.price.toLocaleString()}/day</p>
                  <p className="text-sm text-slate-grey">Deposit: UGX {item.deposit.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Rental Period */}
            <div className="premium-card">
              <h2 className="text-xl font-semibold text-forest mb-4 flex items-center gap-2">
                <Calendar className="text-emerald" />
                Rental Period
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={rentalDetails.startDate}
                    onChange={(e) => setRentalDetails(prev => ({
                      ...prev,
                      startDate: e.target.value
                    }))}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={rentalDetails.endDate}
                    onChange={(e) => setRentalDetails(prev => ({
                      ...prev,
                      endDate: e.target.value
                    }))}
                    min={rentalDetails.startDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                  />
                </div>
              </div>
              {costs && (
                <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-800 font-semibold">
                    Rental Period: {costs.days} day{costs.days !== 1 ? 's' : ''}
                  </p>
                </div>
              )}
            </div>

            {/* Delivery/Pickup Options */}
            <div className="premium-card">
              <h2 className="text-xl font-semibold text-forest mb-4">Delivery Options</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 border-2 border-background-300 rounded-xl cursor-pointer hover:border-emerald transition-colors">
                  <input
                    type="radio"
                    name="pickupOption"
                    value="delivery"
                    checked={rentalDetails.pickupOption === 'delivery'}
                    onChange={(e) => setRentalDetails(prev => ({
                      ...prev,
                      pickupOption: e.target.value
                    }))}
                    className="text-emerald focus:ring-emerald"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-forest">Home Delivery</p>
                    <p className="text-sm text-slate-grey">UGX 15,000 • 1-2 business days</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-background-300 rounded-xl cursor-pointer hover:border-emerald transition-colors">
                  <input
                    type="radio"
                    name="pickupOption"
                    value="pickup"
                    checked={rentalDetails.pickupOption === 'pickup'}
                    onChange={(e) => setRentalDetails(prev => ({
                      ...prev,
                      pickupOption: e.target.value
                    }))}
                    className="text-emerald focus:ring-emerald"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-forest">Pickup from Seller</p>
                    <p className="text-sm text-slate-grey">Free • {item.location}</p>
                  </div>
                </label>
              </div>

              {rentalDetails.pickupOption === 'delivery' && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-grey mb-2">
                    Delivery Address
                  </label>
                  <textarea
                    value={rentalDetails.deliveryAddress}
                    onChange={(e) => setRentalDetails(prev => ({
                      ...prev,
                      deliveryAddress: e.target.value
                    }))}
                    placeholder="Enter your complete delivery address"
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
                  />
                </div>
              )}
            </div>

            {/* Insurance & Protection */}
            <div className="premium-card">
              <h2 className="text-xl font-semibold text-forest mb-4 flex items-center gap-2">
                <Shield className="text-emerald" />
                Protection & Insurance
              </h2>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={rentalDetails.insurance}
                  onChange={(e) => setRentalDetails(prev => ({
                    ...prev,
                    insurance: e.target.checked
                  }))}
                  className="mt-1 text-emerald focus:ring-emerald"
                />
                <div>
                  <p className="font-semibold text-forest">Add Damage Protection</p>
                  <p className="text-sm text-slate-grey">
                    Covers accidental damages up to UGX 200,000. Recommended for expensive items.
                  </p>
                  <p className="text-emerald font-semibold text-sm mt-1">Included • Free</p>
                </div>
              </label>
            </div>

            {/* Special Requests */}
            <div className="premium-card">
              <h2 className="text-xl font-semibold text-forest mb-4">Special Requests</h2>
              <textarea
                value={rentalDetails.specialRequests}
                onChange={(e) => setRentalDetails(prev => ({
                  ...prev,
                  specialRequests: e.target.value
                }))}
                placeholder="Any special instructions or requests for the seller..."
                rows="3"
                className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald"
              />
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
                    <p className="text-sm text-slate-grey">MTN, Airtel Money</p>
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
                    <p className="text-sm text-slate-grey">Visa, Mastercard</p>
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
                    I agree to the Terms & Conditions and Rental Agreement
                  </p>
                  <p className="text-sm text-slate-grey">
                    By proceeding, you agree to our rental terms, cancellation policy, and understand that the security deposit will be held until the item is returned in good condition.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Sidebar - Order Summary - 1/3 width */}
          <div className="space-y-6">
            <div className="premium-card sticky top-24">
              <h2 className="text-xl font-semibold text-forest mb-4">Order Summary</h2>
              
              {costs ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-grey">Rental ({costs.days} days)</span>
                    <span className="font-semibold">UGX {costs.rentalCost.toLocaleString()}</span>
                  </div>
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
                  <div className="flex justify-between">
                    <span className="text-slate-grey">Security Deposit</span>
                    <span className="font-semibold">UGX {item.deposit.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-background-300 pt-3">
                    <div className="flex justify-between text-lg font-bold text-forest">
                      <span>Total Amount</span>
                      <span>UGX {costs.totalAmount.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-slate-grey mt-1">
                      * Deposit will be refunded after return
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-slate-grey text-center py-4">
                  Select rental dates to see pricing
                </p>
              )}

              <button
                onClick={handleRentalSubmit}
                disabled={!costs || !agreedToTerms || isProcessing}
                className={`w-full mt-6 py-4 rounded-xl font-semibold text-lg transition-all ${
                  costs && agreedToTerms && !isProcessing
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
                  `Complete Rental - UGX ${costs ? costs.totalAmount.toLocaleString() : '0'}`
                )}
              </button>

              {/* Security Features */}
              <div className="mt-4 space-y-2 text-xs text-slate-grey">
                <div className="flex items-center gap-2">
                  <Shield size={12} className="text-emerald" />
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={12} className="text-emerald" />
                  <span>Deposit protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle size={12} className="text-emerald" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}