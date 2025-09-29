import React, { useState } from 'react';

// --- Inline SVG Icon Definitions (Replacing react-icons) ---

const IconLock = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18 10h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v3H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-7 0H9V7c0-1.66 1.34-3 3-3s3 1.34 3 3v3h-2v1.5a1 1 0 0 1-2 0V10zm5 10H8v-8h8v8z"/>
    <circle cx="12" cy="16" r="1"/>
  </svg>
);

const IconCreditCard = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
  </svg>
);

const IconCalendar = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
);

const IconToolbox = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.5 6c-2.61 0-5.18.57-7.66 1.7C6.36 8.57 5 10.6 5 13.5v7h14v-7c0-2.9-1.36-4.93-3.84-5.8C15.18 6.57 17.61 6 20.5 6h-4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

const IconChevronDown = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>
);

const IconChevronUp = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.59 15.41L12 10.83l-4.59 4.58L6 14l6-6 6 6-1.41 1.41z"/>
  </svg>
);

const IconCaretRight = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 4l-1.41 1.41L14.17 11H4v2h10.17l-3.58 3.59L12 20l8-8-8-8z"/>
    </svg>
);

// Component to render individual Q&A items, with simple accordion functionality
const FAQItem = ({ icon: Icon, title, content, isDefaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <div className="border-b border-[var(--color-background-300)] py-6">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-4">
          <Icon className={`w-6 h-6 transition-transform ${isOpen ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary-600)]'}`} />
          <h4 className="font-semibold text-xl text-[var(--color-text-primary)] font-serif">
            {title}
          </h4>
        </div>
        {isOpen ? (
          <IconChevronUp className="w-6 h-6 text-[var(--color-primary-500)]" />
        ) : (
          <IconChevronDown className="w-6 h-6 text-[var(--color-text-muted)]" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-4 pl-10 pr-4 text-[var(--color-text-secondary)] leading-relaxed animate-fade-in">
          {content}
        </div>
      )}
    </div>
  );
};

// Main FAQ Page Component
const FAQPage = () => {
  // SVG for list items uses IconCaretRight instead of FaAngleDoubleRight
  const CaretIcon = (props) => <IconCaretRight className="w-4 h-4 mt-1 mr-2 text-[var(--color-primary-500)] flex-shrink-0" {...props} />;
  const CaretIconAccent = (props) => <IconCaretRight className="w-4 h-4 mt-1 mr-2 text-[var(--color-accent-500)] flex-shrink-0" {...props} />;


  const trustSafetyContent = (
    <div className="space-y-4">
      <p>Trust and safety are paramount in our peer-to-peer community. We require all users—both Closet Owners and Borrowers—to upload a National ID or Passport during sign-up.</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li className="flex items-start">
          <CaretIcon />
          <span>Ensures **accountability** for all transactions.</span>
        </li>
        <li className="flex items-start">
          <CaretIcon />
          <span>Allows us to assign a **"Verified User" badge** to trusted members.</span>
        </li>
      </ul>
    </div>
  );

  const verifiedBadgeContent = (
    <p>This badge confirms that our admin team has successfully verified the user's identity documentation. When you see this badge on a profile, it indicates that the Closet Owner or Borrower is a **trusted, verified member** of the P2P Fashion UG community.</p>
  );

  const escrowContent = (
    <div className="space-y-4">
      <p>We use a secure **escrow system** to protect both the Closet Owner and the Borrower:</p>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>The Borrower pays the full cost (rental fee + deposit) at the time of booking.</li>
        <li>These funds are held securely in **escrow**.</li>
        <li>The funds are **only released** to the Closet Owner once the rental period is complete and the item has been returned and confirmed in good condition.</li>
      </ol>
    </div>
  );

  const depositPurposeContent = (
    <p>The **refundable deposit**, set by the Closet Owner, is required to secure the rental. It covers potential costs for **minor damage or additional cleaning** required upon return. The deposit is fully returned to the Borrower if the item is returned on time and in its original condition.</p>
  );

  const commissionContent = (
    <p>The platform operates on a **commission model**. We take a small, transparent percentage commission from every successful rental or sale transaction. This fee covers payment processing, security, and platform maintenance.</p>
  );

  const cancellationPolicyContent = (
    <div className="space-y-4">
      <p>**Free Cancellation:** You may cancel your booking for free up to **24 hours before** the rental period is scheduled to start.</p>
      <p>**Last-Minute Cancellation:** Cancellations made within 24 hours of the start time may incur a fee to compensate the Closet Owner for lost opportunity.</p>
    </div>
  );

  const returnDeadlineContent = (
    <p>All rented items must be returned to the Closet Owner by **1 PM on the final day of the rental period** unless otherwise agreed upon via in-app messaging.</p>
  );

  const lateReturnContent = (
    <div className="space-y-4">
      <p>Late returns disrupt the Closet Owner's schedule and the next Borrower's plans. Charges are applied as follows:</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li className="flex items-start">
          <CaretIconAccent />
          <span>**Late Fee:** Late returns will incur a daily late fee equal to **10% of the original rental fee**.</span>
        </li>
        <li className="flex items-start">
          <CaretIconAccent />
          <span>**Replacement Charge:** If the item is returned more than **48 hours late**, the Renter may be charged the full replacement value of the item in addition to forfeiting the deposit.</span>
        </li>
      </ul>
    </div>
  );

  const cleaningResponsibilityContent = (
    <p>All items are expected to be professionally cleaned before and after rentals. **Renters must not wash, alter, or modify the item themselves.** However, if an item is returned with significant stains or damage, additional cleaning or repair fees will be applied.</p>
  );

  const damageLiabilityContent = (
    <div className="space-y-4">
      <p>Renters are fully liable for any damage or loss beyond normal wear and tear. If the item is returned with damage:</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li className="flex items-start">
          <CaretIcon />
          <span>The Renter will be charged the **repair costs** (deducted from the deposit).</span>
        </li>
        <li className="flex items-start">
          <CaretIcon />
          <span>If the item is lost or damaged beyond repair, the Renter will be charged the **full replacement value** of the item.</span>
        </li>
      </ul>
    </div>
  );
  
  const qualityIssueContent = (
    <p>If you receive an item with major quality issues or if the wrong item was sent, you **must notify us within 24 hours** of receiving it. We will coordinate a resolution, including a refund if necessary, provided the item is returned immediately in the condition it was received.</p>
  );

  return (
    <div className="min-h-screen bg-[var(--color-background)] font-['Lato'] p-4 md:p-8">
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.3s ease-out;
        }
      `}</style>
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-10 p-6 bg-white rounded-xl shadow-lg border-b-4 border-[var(--color-primary)]">
          <h1 className="text-[var(--text-4xl)] font-bold text-[var(--color-primary-800)] font-serif mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg">
            This section covers the most common questions regarding account management, payments, policies, and community standards on the P2P Fashion Rental App.
          </p>
        </header>

        {/* FAQ Sections */}
        <div className="space-y-10">
          
          {/* Trust & Safety Section */}
          <section className="premium-card">
            <h2 className="text-[var(--text-3xl)] font-bold text-[var(--color-primary-700)] flex items-center mb-6">
              <IconLock className="w-8 h-8 mr-3 text-[var(--color-accent)]" />
              Trust & Safety Standards
            </h2>
            <div className="space-y-2">
              <FAQItem 
                icon={IconLock} 
                title="Why do I need to complete ID verification?" 
                content={trustSafetyContent} 
                isDefaultOpen 
              />
              <FAQItem 
                icon={IconCaretRight} 
                title="What does the 'Verified User' badge mean?" 
                content={verifiedBadgeContent} 
              />
            </div>
          </section>

          {/* Booking, Payments, and Fees Section */}
          <section className="premium-card">
            <h2 className="text-[var(--text-3xl)] font-bold text-[var(--color-primary-700)] flex items-center mb-6">
              <IconCreditCard className="w-8 h-8 mr-3 text-[var(--color-accent)]" />
              Booking, Payments, and Fees
            </h2>
            <div className="space-y-2">
              <FAQItem 
                icon={IconCreditCard} 
                title="How does the payment and escrow system work?" 
                content={escrowContent} 
              />
              <FAQItem 
                icon={IconCreditCard} 
                title="What is the purpose of the rental deposit?" 
                content={depositPurposeContent} 
              />
              <FAQItem 
                icon={IconCaretRight} 
                title="How much commission does the platform charge?" 
                content={commissionContent} 
              />
            </div>
          </section>

          {/* Cancellations and Returns Section */}
          <section className="premium-card">
            <h2 className="text-[var(--text-3xl)] font-bold text-[var(--color-primary-700)] flex items-center mb-6">
              <IconCalendar className="w-8 h-8 mr-3 text-[var(--color-accent)]" />
              Cancellations and Returns
            </h2>
            <div className="space-y-2">
              <FAQItem 
                icon={IconCalendar} 
                title="What is the cancellation policy?" 
                content={cancellationPolicyContent} 
              />
              <FAQItem 
                icon={IconCaretRight} 
                title="What is the return deadline?" 
                content={returnDeadlineContent} 
              />
              <FAQItem 
                icon={IconCalendar} 
                title="What happens if I return an item late?" 
                content={lateReturnContent} 
              />
            </div>
          </section>

          {/* Item Condition and Liability Section */}
          <section className="premium-card">
            <h2 className="text-[var(--text-3xl)] font-bold text-[var(--color-primary-700)] flex items-center mb-6">
              <IconToolbox className="w-8 h-8 mr-3 text-[var(--color-accent)]" />
              Item Condition and Liability
            </h2>
            <div className="space-y-2">
              <FAQItem 
                icon={IconToolbox} 
                title="Who is responsible for cleaning the item?" 
                content={cleaningResponsibilityContent} 
              />
              <FAQItem 
                icon={IconToolbox} 
                title="What is my liability if the item is damaged or lost?" 
                content={damageLiabilityContent} 
              />
              <FAQItem 
                icon={IconCaretRight} 
                title="What if I receive an item that has major quality issues?" 
                content={qualityIssueContent} 
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default FAQPage;
