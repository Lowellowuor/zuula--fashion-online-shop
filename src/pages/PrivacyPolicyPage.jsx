// src/pages/PrivacyPolicyPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaShieldAlt, FaUserCheck, FaDatabase, FaCookie, FaEye, FaUserShield } from "react-icons/fa";

export default function PrivacyPolicyPage() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: <FaShieldAlt className="text-emerald" />,
      content: `Welcome to Zuula Fashion Rental Platform ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information.

This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully to understand our views and practices regarding your personal data.`
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      icon: <FaDatabase className="text-gold" />,
      content: `2.1 Personal Information
- Contact Information: Name, email address, phone number
- Account Information: Username, password, profile picture
- Identity Verification: Government-issued ID (for lenders)
- Payment Information: Mobile money numbers, bank details (processed securely)

2.2 Transaction Information
- Rental history and booking details
- Payment records and transaction history
- Communication with other users
- Reviews and ratings

2.3 Technical Information
- IP address, browser type, device information
- Usage data and platform interaction
- Cookies and similar tracking technologies
- Location data (with your consent)`
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      icon: <FaEye className="text-emerald" />,
      content: `We use your information for the following purposes:

3.1 Service Provision
- To create and manage your account
- To facilitate rentals and transactions
- To process payments and refunds
- To provide customer support

3.2 Communication
- To send transaction updates and notifications
- To respond to your inquiries
- To send service-related announcements
- Marketing communications (with your consent)

3.3 Platform Improvement
- To analyze usage patterns and improve our services
- To develop new features and functionality
- To ensure platform security and prevent fraud
- To personalize your experience

3.4 Legal Compliance
- To comply with legal obligations
- To enforce our terms and conditions
- To protect our rights and property`
    },
    {
      id: "information-sharing",
      title: "4. Information Sharing and Disclosure",
      icon: <FaUserShield className="text-gold" />,
      content: `4.1 With Other Users
- Renters and lenders see necessary information for transactions
- Profile information (name, rating, verification status)
- Communication through our secure messaging system

4.2 Service Providers
- Payment processors (mobile money, banks)
- Delivery and logistics partners
- Cloud storage and hosting providers
- Customer support services

4.3 Legal Requirements
- When required by law or legal process
- To protect our rights and safety
- In connection with business transfers
- To prevent fraud or illegal activities

4.4 We Do Not Sell Your Data
- We do not sell your personal information to third parties
- We do not share your data for marketing purposes without consent`
    },
    {
      id: "data-security",
      title: "5. Data Security",
      icon: <FaShieldAlt className="text-emerald" />,
      content: `5.1 Security Measures
- Encryption of sensitive data in transit and at rest
- Secure payment processing through certified providers
- Regular security assessments and updates
- Access controls and authentication measures

5.2 Data Retention
- We retain your data only as long as necessary
- Transaction records are kept for legal compliance
- You can request account deletion at any time
- Some data may be retained for legal purposes

5.3 Your Responsibilities
- Keep your account credentials secure
- Use strong, unique passwords
- Log out from shared devices
- Report suspicious activities immediately`
    },
    {
      id: "cookies-tracking",
      title: "6. Cookies and Tracking Technologies",
      icon: <FaCookie className="text-gold" />,
      content: `6.1 Types of Cookies We Use
- Essential Cookies: Required for platform functionality
- Preference Cookies: Remember your settings and preferences
- Analytics Cookies: Help us understand how you use our platform
- Marketing Cookies: Deliver relevant advertisements (with consent)

6.2 Your Cookie Choices
- You can control cookies through your browser settings
- You can opt-out of non-essential cookies
- Some features may not work properly without essential cookies
- We honor "Do Not Track" signals where applicable

6.3 Third-Party Analytics
- We use analytics services to improve our platform
- These services may collect anonymous usage data
- We ensure compliance with privacy regulations
- You can opt-out of analytics tracking`
    },
    {
      id: "your-rights",
      title: "7. Your Rights and Choices",
      icon: <FaUserCheck className="text-emerald" />,
      content: `7.1 Access and Correction
- Right to access your personal information
- Right to correct inaccurate or incomplete data
- Right to request a copy of your data
- Right to know how we use your information

7.2 Data Management
- Right to delete your account and personal data
- Right to restrict or object to data processing
- Right to data portability
- Right to withdraw consent at any time

7.3 Marketing Preferences
- Opt-out of marketing communications
- Control notification preferences
- Manage email subscription settings
- Choose what information is public

To exercise these rights, contact us at privacy@zuula.com`
    },
    {
      id: "international-transfers",
      title: "8. International Data Transfers",
      icon: <FaDatabase className="text-emerald" />,
      content: `8.1 Data Storage
- Your data is primarily stored in Uganda
- Some service providers may process data internationally
- We ensure adequate protection for international transfers
- We comply with applicable data protection laws

8.2 Cross-Border Services
- Our services are primarily focused in Uganda
- International users should be aware of local laws
- We may restrict services in certain jurisdictions
- Contact us for specific cross-border inquiries`
    },
    {
      id: "children-privacy",
      title: "9. Children's Privacy",
      icon: <FaUserShield className="text-gold" />,
      content: `9.1 Age Restrictions
- Our platform is not intended for children under 18
- We do not knowingly collect data from children
- Users must be 18+ to create an account
- Parents/guardians should monitor children's internet use

9.2 Verification
- We may request age verification when necessary
- Accounts of underage users will be terminated
- We encourage parents to report any concerns
- We comply with COPPA and similar regulations`
    },
    {
      id: "third-party-links",
      title: "10. Third-Party Links and Services",
      icon: <FaEye className="text-emerald" />,
      content: `10.1 External Links
- Our platform may contain links to third-party websites
- We are not responsible for their privacy practices
- We encourage you to review their privacy policies
- External links are provided for convenience only

10.2 Integrated Services
- We may integrate with payment processors
- Social media features may be available
- Delivery and logistics partners
- Analytics and customer support tools

10.3 Responsibility
- Your interactions with third parties are separate
- We are not liable for third-party actions
- Use third-party services at your own risk
- Report any concerns about third-party services`
    },
    {
      id: "policy-updates",
      title: "11. Policy Updates and Changes",
      icon: <FaShieldAlt className="text-gold" />,
      content: `11.1 Notification of Changes
- We may update this policy from time to time
- Significant changes will be notified via email
- The "Last Updated" date will reflect changes
- Continued use constitutes acceptance of changes

11.2 Review Period
- We encourage regular review of this policy
- Previous versions are archived for reference
- Major changes have a 30-day review period
- You can opt-out of changes by closing your account

11.3 Contact for Questions
- Contact us with any questions about changes
- We provide explanations for significant updates
- Your rights remain protected during transitions
- We consider user feedback for policy improvements`
    },
    {
      id: "contact-information",
      title: "12. Contact Information",
      icon: <FaUserCheck className="text-emerald" />,
      content: `For privacy-related questions, concerns, or to exercise your rights, please contact us:

Data Protection Officer
Zuula Fashion Rental Platform
Email: privacy@zuula.com
Phone: +256 700 123 457
Address: Kampala, Uganda

Office Hours: Monday - Friday, 9:00 AM - 5:00 PM EAT

We aim to respond to all privacy inquiries within 48 hours.

For urgent data protection matters, please mark your email as "URGENT - DATA PRIVACY".`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-background-300 p-8">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 p-4 rounded-full">
                <FaShieldAlt className="text-emerald text-3xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-forest mb-4 font-heading">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-grey mb-6 font-body max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information when you use Zuula Fashion Rental Platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-emerald-50 text-emerald-800 px-4 py-2 rounded-lg font-body text-sm">
                <strong>Last Updated:</strong> September 28, 2025
              </div>
              <div className="bg-gold-50 text-gold-800 px-4 py-2 rounded-lg font-body text-sm">
                <strong>Version:</strong> 1.2
              </div>
              <div className="bg-forest-50 text-forest-800 px-4 py-2 rounded-lg font-body text-sm">
                <strong>Compliance:</strong> GDPR Ready
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

        {/* Privacy Content */}
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

        {/* Data Rights Section */}
        <section className="mt-12 bg-gradient-to-r from-emerald to-forest rounded-2xl p-8 text-center text-white">
          <div className="flex justify-center mb-4">
            <FaUserCheck className="text-3xl text-gold" />
          </div>
          <h3 className="text-2xl font-bold mb-4 font-heading">Your Data Rights</h3>
          <p className="mb-6 text-lg font-body opacity-90 max-w-2xl mx-auto">
            You have the right to access, correct, or delete your personal information. 
            Contact our Data Protection Officer for any privacy-related requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:privacy@zuula.com"
              className="bg-gold text-forest px-8 py-3 rounded-xl font-semibold hover:bg-accent-300 transition-all shadow-lg hover:shadow-xl font-body"
            >
              Contact Privacy Team
            </a>
            <Link
              to="/terms"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-forest transition-all font-body"
            >
              View Terms & Conditions
            </Link>
          </div>
        </section>

        {/* Footer Note */}
        <section className="mt-8 text-center">
          <p className="text-sm text-slate-grey font-body">
            For privacy concerns or data protection requests, email{" "}
            <a href="mailto:privacy@zuula.com" className="text-emerald hover:underline">
              privacy@zuula.com
            </a>
            {" "}or call {" "}
            <a href="tel:+256700123457" className="text-emerald hover:underline">
              +256 700 123 457
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}