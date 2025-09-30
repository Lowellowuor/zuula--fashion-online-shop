// src/pages/TermsAndConditionsPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaShieldAlt, FaUserCheck, FaMoneyBillWave, FaExclamationTriangle, FaFileContract } from "react-icons/fa";

export default function TermsAndConditionsPage() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <FaUserCheck className="text-emerald" />,
      content: `By accessing and using Zuula ("the Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.

These terms constitute a legally binding agreement between you and Zuula Fashion Rental Platform.`
    },
    {
      id: "definitions",
      title: "2. Definitions",
      icon: <FaFileContract className="text-gold" />,
      content: `- "Platform" refers to Zuula fashion rental website and mobile application
- "Renter" refers to individuals renting outfits through the Platform
- "Lender" refers to individuals listing outfits for rent on the Platform
- "Item" refers to any fashion outfit, accessory, or related product listed on the Platform
- "Rental Period" refers to the duration for which an item is rented
- "Security Deposit" refers to the refundable amount held during the rental period`
    },
    {
      id: "user-accounts",
      title: "3. User Accounts and Registration",
      icon: <FaUserCheck className="text-emerald" />,
      content: `3.1 To use certain features of the Platform, you must register for an account and provide accurate, complete registration information.

3.2 You must be at least 18 years old to create an account and use our services.

3.3 You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.

3.4 You agree to immediately notify Zuula of any unauthorized use of your account or any other security breaches.

3.5 We reserve the right to suspend or terminate accounts that provide false information or violate these terms.`
    },
    {
      id: "rental-process",
      title: "4. Rental Process and Terms",
      icon: <FaMoneyBillWave className="text-emerald" />,
      content: `4.1 Rental Agreement
- Each rental constitutes a separate agreement between Renter and Lender
- Zuula acts as an intermediary platform and is not a party to the rental agreement

4.2 Rental Period
- The rental period begins from the date of item pickup/delivery
- Extensions must be requested and approved at least 24 hours before the return date
- Late returns may incur additional charges

4.3 Pricing and Payments
- All prices are listed in UGX (Ugandan Shillings)
- Payment includes rental fee and security deposit
- Security deposits are refundable upon satisfactory return of items
- Additional cleaning or repair fees may be deducted from the security deposit

4.4 Cancellation Policy
- Renters may cancel bookings up to 48 hours before the rental period for a full refund
- Cancellations within 48 hours may incur a 50% cancellation fee
- Lenders may cancel only in exceptional circumstances with Platform approval`
    },
    {
      id: "lender-responsibilities",
      title: "5. Lender Responsibilities",
      icon: <FaShieldAlt className="text-gold" />,
      content: `5.1 Item Condition
- Lenders must ensure items are clean, in good condition, and accurately described
- Items must be free from stains, damages, or defects not disclosed in the listing
- Professional cleaning is recommended between rentals

5.2 Availability
- Lenders must honor confirmed bookings and ensure item availability
- Last-minute cancellations may result in account penalties

5.3 Pricing
- Lenders set their own rental prices and security deposits
- Zuula charges a 15% service fee on completed transactions
- Payments to lenders are processed within 3-5 business days after successful return

5.4 Insurance
- Lenders are encouraged to maintain insurance for high-value items
- Zuula provides limited protection up to UGX 500,000 per item`
    },
    {
      id: "renter-responsibilities",
      title: "6. Renter Responsibilities",
      icon: <FaShieldAlt className="text-emerald" />,
      content: `6.1 Care of Items
- Renters must treat rented items with care and respect
- Items should be protected from damage, stains, and excessive wear
- No alterations or modifications to items are permitted

6.2 Return Condition
- Items must be returned in the same condition as received
- Renters are responsible for minor cleaning (spot cleaning)
- Major stains or damages requiring professional cleaning will incur fees

6.3 Timely Return
- Renters must return items by the agreed-upon date and time
- Late returns may result in additional rental charges
- Failure to return items may lead to full replacement cost charges

6.4 Usage Restrictions
- Items are for personal use only
- Commercial use, resale, or subletting is prohibited
- Items must not be used for illegal or inappropriate activities`
    },
    {
      id: "payments-fees",
      title: "7. Payments and Fees",
      icon: <FaMoneyBillWave className="text-gold" />,
      content: `7.1 Payment Methods
- We accept mobile money, credit/debit cards, and bank transfers
- All payments are processed through secure payment gateways

7.2 Fee Structure
- Rental Fee: Set by the lender
- Security Deposit: Refundable amount held during rental period
- Service Fee: 15% of rental fee (charged to lender)
- Delivery Fee: Varies based on location (if applicable)

7.3 Refund Policy
- Security deposits are refunded within 24-48 hours after item inspection
- Rental fees are non-refundable except as per cancellation policy
- Disputed transactions will be investigated case by case

7.4 Damage and Loss
- Renters are liable for damaged, lost, or stolen items
- Replacement costs will be deducted from security deposit
- Additional charges may apply if damages exceed security deposit amount`
    },
    {
      id: "disputes",
      title: "8. Dispute Resolution",
      icon: <FaExclamationTriangle className="text-emerald" />,
      content: `8.1 Communication
- Parties must attempt to resolve disputes directly through communication
- Zuula provides a messaging system for all communications

8.2 Platform Intervention
- If direct resolution fails, either party may request Platform intervention
- Zuula will mediate and make a fair determination based on evidence
- Our decision is final and binding for Platform-related issues

8.3 Evidence Requirements
- Photos/videos of item condition before and after rental
- Timestamped documentation of any issues
- Communication records between parties

8.4 Legal Recourse
- Users maintain the right to pursue legal action independently
- Ugandan law governs these terms and any disputes`
    },
    {
      id: "liability",
      title: "9. Liability and Limitations",
      icon: <FaExclamationTriangle className="text-gold" />,
      content: `9.1 Platform Liability
- Zuula is not liable for personal injuries or damages resulting from item use
- We are not responsible for items damaged during rental period
- Maximum liability is limited to the total fees paid for the transaction

9.2 User Liability
- Renters assume all risks associated with item use
- Lenders are responsible for accurate item descriptions and condition
- Both parties are responsible for their actions and communications

9.3 Force Majeure
- Neither party is liable for failures due to circumstances beyond reasonable control
- This includes natural disasters, government actions, or platform technical issues`
    },
    {
      id: "prohibited",
      title: "10. Prohibited Activities",
      icon: <FaFileContract className="text-emerald" />,
      content: `Users are prohibited from:
- Listing counterfeit or stolen items
- Providing false information or misrepresenting items
- Harassing or threatening other users
- Circumventing the Platform's payment system
- Using the Platform for illegal activities
- Sharing inappropriate or offensive content
- Creating multiple accounts for fraudulent purposes
- Attempting to gain unauthorized access to the Platform

Violations may result in immediate account termination and legal action.`
    },
    {
      id: "intellectual-property",
      title: "11. Intellectual Property",
      icon: <FaFileContract className="text-gold" />,
      content: `11.1 Platform Content
- All Platform design, text, graphics, and software are owned by Zuula
- Users may not copy, modify, or distribute Platform content without permission

11.2 User Content
- Users retain ownership of their uploaded photos and descriptions
- By uploading content, users grant Zuula license to display and use it on the Platform

11.3 Trademarks
- "Zuula" and the Platform logo are registered trademarks
- Unauthorized use of trademarks is prohibited`
    },
    {
      id: "privacy",
      title: "12. Privacy and Data Protection",
      icon: <FaShieldAlt className="text-emerald" />,
      content: `12.1 Data Collection
- We collect personal information necessary for providing our services
- This includes contact details, payment information, and usage data

12.2 Data Usage
- Personal data is used to facilitate transactions and improve services
- We do not sell user data to third parties
- Data may be shared with service providers under confidentiality agreements

12.3 Data Security
- We implement industry-standard security measures
- Users are responsible for maintaining account security

12.4 Compliance
- We comply with Ugandan data protection laws
- Users have the right to access and correct their personal information`
    },
    {
      id: "modifications",
      title: "13. Modifications to Terms",
      icon: <FaFileContract className="text-emerald" />,
      content: `13.1 Changes to Terms
- Zuula reserves the right to modify these terms at any time
- Users will be notified of significant changes via email or Platform notification

13.2 Continued Use
- Continued use of the Platform after changes constitutes acceptance
- Users should regularly review the terms for updates

13.3 Effective Date
- Changes become effective upon posting on the Platform
- The "Last Updated" date will reflect the most recent changes`
    },
    {
      id: "termination",
      title: "14. Termination",
      icon: <FaExclamationTriangle className="text-gold" />,
      content: `14.1 User Termination
- Users may terminate their accounts at any time
- Outstanding transactions must be completed before termination

14.2 Platform Termination
- Zuula may suspend or terminate accounts for violations of these terms
- We reserve the right to refuse service to anyone

14.3 Effect of Termination
- Active rentals must be completed according to existing agreements
- Outstanding payments and fees remain due
- User content may be retained for legal and operational purposes`
    },
    {
      id: "governing-law",
      title: "15. Governing Law and Jurisdiction",
      icon: <FaFileContract className="text-emerald" />,
      content: `15.1 Applicable Law
- These terms are governed by the laws of the Republic of Uganda
- Any disputes shall be resolved in Ugandan courts

15.2 Jurisdiction
- Users agree to the exclusive jurisdiction of Ugandan courts
- This does not prevent users from seeking protection under consumer laws

15.3 Severability
- If any provision is found invalid, the remaining terms remain in effect
- The invalid provision shall be replaced by a valid one that matches the intent`
    },
    {
      id: "contact",
      title: "16. Contact Information",
      icon: <FaUserCheck className="text-gold" />,
      content: `For questions about these Terms and Conditions, please contact us:

Zuula Fashion Rental Platform
Email: legal@zuula.com
Phone: +256 700 123 456
Address: Kampala, Uganda

Office Hours: Monday - Friday, 9:00 AM - 5:00 PM EAT

We aim to respond to all inquiries within 24-48 hours.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-background-300 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-forest mb-4 font-heading">
              Terms and Conditions
            </h1>
            <p className="text-lg text-slate-grey mb-6 font-body max-w-2xl mx-auto">
              Please read these terms carefully before using Zuula Fashion Rental Platform. 
              These terms govern your use of our services and outline your rights and responsibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-emerald-50 text-emerald-800 px-4 py-2 rounded-lg font-body text-sm">
                <strong>Last Updated:</strong> September 28, 2025
              </div>
              <div className="bg-gold-50 text-gold-800 px-4 py-2 rounded-lg font-body text-sm">
                <strong>Version:</strong> 2.1
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="mb-8">
          <div className="bg-background-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-forest mb-4 font-heading">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {sections.slice(0, 8).map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                    toggleSection(section.id);
                  }}
                  className="text-sm bg-white text-forest px-3 py-2 rounded-lg hover:bg-emerald hover:text-white transition-all text-left font-body"
                >
                  {section.title.split(' ')[0]} {section.title.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="bg-white rounded-2xl shadow-lg border border-background-300 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-background-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {section.icon}
                  <h2 className="text-xl font-semibold text-forest font-heading">
                    {section.title}
                  </h2>
                </div>
                {openSections[section.id] ? (
                  <FaChevronUp className="text-slate-grey" />
                ) : (
                  <FaChevronDown className="text-slate-grey" />
                )}
              </button>
              
              <div className={`border-t border-background-300 transition-all duration-300 ${
                openSections[section.id] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="p-6">
                  <div className="prose prose-lg max-w-none font-body text-slate-grey leading-relaxed">
                    {section.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Acceptance Section */}
        <section className="mt-12 bg-gradient-to-r from-emerald to-forest rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4 font-heading">Acceptance of Terms</h3>
          <p className="mb-6 text-lg font-body opacity-90 max-w-2xl mx-auto">
            By using Zuula Fashion Rental Platform, you acknowledge that you have read, 
            understood, and agree to be bound by these Terms and Conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/signup"
              className="bg-gold text-forest px-8 py-3 rounded-xl font-semibold hover:bg-accent-300 transition-all shadow-lg hover:shadow-xl font-body"
            >
              I Accept - Continue to Sign Up
            </Link>
            <Link
              to="/"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-forest transition-all font-body"
            >
              Back to Home
            </Link>
          </div>
        </section>

        {/* Footer Note */}
        <section className="mt-8 text-center">
          <p className="text-sm text-slate-grey font-body">
            For any questions regarding these terms, please contact our legal team at{" "}
            <a href="mailto:legal@zuula.com" className="text-emerald hover:underline">
              legal@zuula.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}