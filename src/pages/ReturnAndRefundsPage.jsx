import React, { useState } from 'react';

const ReturnsAndRefunds = () => {
  const [activeTab, setActiveTab] = useState('returns');

  // Quick navigation tabs
  const tabs = [
    { id: 'returns', label: 'Return Policy', icon: '↻' },
    { id: 'late-returns', label: 'Late Returns', icon: '⏰' },
    { id: 'damage', label: 'Damage & Loss', icon: '⚠️' },
    { id: 'hygiene', label: 'Hygiene Standards', icon: '✨' },
    { id: 'cancellations', label: 'Cancellations', icon: '❌' },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Return & Refunds Policy
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to transparency and fairness in every rental transaction
          </p>
        </div>

        {/* Quick Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-primary-50 border border-background-300'
              }`}
            >
              <span className="mr-2 text-lg">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Return Policy Section */}
        <section id="returns" className="premium-card mb-12 scroll-mt-20">
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-3 rounded-full mr-4">
              <span className="text-2xl">↻</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-700">Return Policy</h2>
              <p className="text-text-secondary mt-1">Fair and straightforward return process</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-background-100 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Standard Return Guidelines</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong>Return Deadline:</strong> Items must be returned by 1pm on the final day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong>Condition:</strong> Return in same condition — clean, undamaged, properly packed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong>Notification:</strong> Report issues within 24 hours of receipt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong>Accepted Returns:</strong> Only for major quality issues or incorrect items</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Return Process</h3>
                <p className="text-blue-800 mb-4">
                  When returning items, please follow these simple steps:
                </p>
                <ol className="space-y-2 text-blue-800">
                  <li>1. Notify us through your account dashboard</li>
                  <li>2. Package item securely in original packaging</li>
                  <li>3. Return by 1pm on the due date</li>
                  <li>4. Await confirmation from our team</li>
                </ol>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-700 mb-3">What We Accept</h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Major manufacturing defects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Incorrect item received</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Significant quality issues</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-700 mb-3">What We Don't Accept</h3>
                <ul className="space-y-3 text-red-800">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Minor wear and tear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Change of mind</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Items damaged by renter</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Late Returns Section */}
        <section id="late-returns" className="premium-card mb-12 scroll-mt-20">
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-3 rounded-full mr-4">
              <span className="text-2xl">⏰</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-700">Late Returns</h2>
              <p className="text-text-secondary mt-1">Understanding our late return policy</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-700 mb-3">Late Return Fees</h3>
                <ul className="space-y-4 text-red-800">
                  <li className="flex justify-between items-center pb-2 border-b border-red-200">
                    <span>Daily Late Fee</span>
                    <span className="font-bold">10% of rental fee</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-red-200">
                    <span>Grace Period</span>
                    <span className="font-bold">5 days</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-red-200">
                    <span>After 48 hours</span>
                    <span className="font-bold">Full replacement + deposit</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>After grace period</span>
                    <span className="font-bold">Full fee forfeited</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-yellow-700 mb-3">Important Notes</h3>
                <p className="text-yellow-800 mb-4">
                  We understand unexpected circumstances can occur. Communication is key to finding solutions.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-yellow-700 text-sm font-medium">
                    💡 <strong>Pro Tip:</strong> Contact us immediately if you anticipate a late return. Early communication often leads to better outcomes for both parties.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Communication Protocol</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Notify us at least 24 hours before due date if possible</li>
                  <li>• Provide reason for delay</li>
                  <li>• Discuss potential solutions</li>
                  <li>• Confirm new return timeline</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Damage & Loss Section */}
        <section id="damage" className="premium-card mb-12 scroll-mt-20">
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-3 rounded-full mr-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-700">Damage & Loss</h2>
              <p className="text-text-secondary mt-1">Protecting your rental experience</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-700 mb-3">Renter Liability</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Damage Coverage</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• Repair costs for fixable damage</li>
                      <li>• Full replacement if not repairable</li>
                      <li>• Professional assessment required</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Loss Coverage</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• Full replacement value charged</li>
                      <li>• Deposit may be applied</li>
                      <li>• Insurance claims supported</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-background-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Damage Assessment Process</h3>
                <ol className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                    <span>Item inspected upon return by our quality team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                    <span>Professional assessment of damage extent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                    <span>Repair estimate obtained if applicable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                    <span>Transparent communication with renter</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Optional Insurance</h3>
                <p className="text-green-800 mb-4">
                  Protect your rental with our insurance options:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-green-600 mb-2">Basic Coverage</h4>
                    <p className="text-sm text-green-700 mb-2">$5 per rental</p>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• Minor repairs coverage</li>
                      <li>• Accidental damage up to 50% value</li>
                      <li>• Basic protection</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gold">
                    <h4 className="font-semibold text-accent mb-2">Premium Coverage</h4>
                    <p className="text-sm text-accent mb-2">$12 per rental</p>
                    <ul className="text-xs text-accent space-y-1">
                      <li>• Comprehensive protection</li>
                      <li>• Loss and major damage coverage</li>
                      <li>• Priority support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hygiene Standards Section */}
        <section id="hygiene" className="premium-card mb-12 scroll-mt-20">
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-3 rounded-full mr-4">
              <span className="text-2xl">✨</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-700">Hygiene Standards</h2>
              <p className="text-text-secondary mt-1">Our commitment to cleanliness and quality</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Our Commitment</h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Professional Cleaning:</strong> All items cleaned before and after each rental</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Quality Assurance:</strong> Rigorous quality checks after each cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Sanitization:</strong> Industry-standard sanitization methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Fresh Packaging:</strong> Clean, hygienic packaging for every delivery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Cleaning & Maintenance</h3>
                <p className="text-text-secondary mb-4">
                  Items do not need to be cleaned before return — we handle all professional cleaning.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> If returned with stains, damage, or strong odors, additional cleaning or repair fees will be applied ($15-50 depending on severity).
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Renter Responsibilities</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>No Alterations:</strong> Do not alter, wash, or modify items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Proper Use:</strong> Use items as intended to maintain standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Report Issues:</strong> Immediately report any hygiene concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Storage:</strong> Store items appropriately during rental period</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">Our Cleaning Process</h3>
                <div className="space-y-2 text-purple-800">
                  <div className="flex justify-between">
                    <span>Inspection</span>
                    <span className="font-semibold">Quality Check</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Specialized Cleaning</span>
                    <span className="font-semibold">Fabric-specific</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sanitization</span>
                    <span className="font-semibold">UV Treatment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Final Inspection</span>
                    <span className="font-semibold">Ready for Rental</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cancellations Section */}
        <section id="cancellations" className="premium-card mb-12 scroll-mt-20">
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-3 rounded-full mr-4">
              <span className="text-2xl">❌</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-700">Cancellations</h2>
              <p className="text-text-secondary mt-1">Flexible cancellation options</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Free Cancellation</h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Timeframe:</strong> Up to 24 hours before rental starts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Refund:</strong> 100% refund guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Processing:</strong> 5-7 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Method:</strong> Original payment method</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-yellow-700 mb-3">Last-Minute Cancellations</h3>
                <ul className="space-y-3 text-yellow-800">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span><strong>Timeframe:</strong> Within 24 hours of rental start</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span><strong>Fee:</strong> 25-50% of rental cost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span><strong>Exceptions:</strong> Case-by-case for emergencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span><strong>Documentation:</strong> May be required for exceptions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">How to Cancel</h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <span className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                    <span className="text-blue-800">Online through your account</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <span className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                    <span className="text-blue-800">Email support team</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <span className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                    <span className="text-blue-800">Call our support line</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="premium-card bg-gradient-to-r from-primary-50 to-accent-50 text-center">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Need Help With a Return?</h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Our dedicated customer support team is here to assist you with any questions or concerns about returns, refunds, or our policies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-6 py-3">
              Contact Support Team
            </button>
            <button className="btn-gold px-6 py-3">
              Start Return Process
            </button>
          </div>
          <div className="mt-6 text-sm text-text-muted">
            Average response time: Under 2 hours during business hours
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary hover:text-primary-600 font-medium flex items-center justify-center mx-auto"
          >
            <span>Back to Top</span>
            <span className="ml-2">↑</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnsAndRefunds;