import React from 'react';

// --- Inline SVG Icon Definitions ---
const IconHandshake = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7 16H3V5h4v11zM21 5h-4v11h4V5zm-8 0h-4v11h4V5z"/>
  </svg>
);

const IconCourier = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l14-.01L17.5 7h-11L5 11z"/>
  </svg>
);

const IconTime = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.9 14.2l-4.5-4.5 1.4-1.4 3.1 3.1V7h2v6.2l-1.9 1.9z"/>
  </svg>
);

const IconCamera = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3.88 9c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5zM19 5l-2.5-1.5L14 5h-1v-2H6v2H5c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-1z"/>
  </svg>
);

const IconShield = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 17.5c-3.14-.94-5.49-3.92-5.91-7.16L12 12l5.91-.42c-.42 3.24-2.77 6.22-5.91 7.16z"/>
    </svg>
);

// Helper component for structured info blocks
const PolicyCard = ({ icon: Icon, title, children }) => (
  <div className="p-6 rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg border-l-4 border-[var(--color-primary)]">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 mr-3 text-[var(--color-accent)] flex-shrink-0" />
      <h3 className="text-[var(--text-xl)] font-semibold text-[var(--color-primary-700)] font-serif">
        {title}
      </h3>
    </div>
    <div className="text-[var(--color-text-secondary)] space-y-3">
      {children}
    </div>
  </div>
);

const ShippingDeliveryInfoPage = () => {
  
  const ListItem = ({ children, isAccent = false }) => (
    <li className="flex items-start">
      <span className={`w-2 h-2 rounded-full mt-2.5 mr-3 flex-shrink-0 ${isAccent ? 'bg-[var(--color-accent-500)]' : 'bg-[var(--color-primary-500)]'}`}></span>
      <span className={`${isAccent ? 'font-semibold text-[var(--color-primary-700)]' : ''}`}>{children}</span>
    </li>
  );

  return (
    <div className="min-h-screen bg-[var(--color-background)] font-['Lato'] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-12 p-6 bg-ivory rounded-xl shadow-lg border-b-8 border-[var(--color-primary-600)]">
          <h1 className="text-[var(--text-4xl)] font-bold text-[var(--color-primary-800)] font-serif mb-3">
            Delivery & Pickup Information
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Choose the logistics option that works best for you: our free Self-Managed P2P exchange or our convenient Managed Courier service.
          </p>
        </header>
        
        {/* Logistics Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <PolicyCard icon={IconHandshake} title="Option 1: Self-Managed P2P Exchange (Free)">
                <h4 className="font-bold text-[var(--color-primary-600)] mt-2">How It Works:</h4>
                <ul className="list-none space-y-3 pl-0 text-base">
                    <ListItem>**Coordination:** Use the secure **In-App Messaging** to agree on a mutually convenient public time and place for both pickup and drop-off.</ListItem>
                    <ListItem>**Cost:** Free of charge.</ListItem>
                    <ListItem>**Accountability:** Both parties must digitally confirm the exchange in the app to proceed with the escrow release.</ListItem>
                </ul>
                <div className="p-3 mt-4 bg-[var(--color-primary-100)] rounded-lg text-[var(--color-primary-700)] flex items-center">
                    <IconTime className="w-5 h-5 mr-3 flex-shrink-0"/>
                    <span className="text-sm font-medium">Items must be returned by **1 PM on the final rental day**.</span>
                </div>
            </PolicyCard>

            <PolicyCard icon={IconCourier} title="Option 2: Managed Courier Service (Optional Fee)">
                <h4 className="font-bold text-[var(--color-primary-600)] mt-2">How It Works:</h4>
                <ul className="list-none space-y-3 pl-0 text-base">
                    <ListItem>**Scheduling:** Select the Courier option at checkout. We will prompt both the Closet Owner and Borrower to enter their specific pickup/drop-off times and addresses.</ListItem>
                    <ListItem>**Cost:** A nominal fee is added to the rental cost, calculated based on distance and urgency. (Fees displayed at checkout).</ListItem>
                    <ListItem>**Partnership:** Logistics are handled by our trusted third-party courier partners, ensuring reliability and security.</ListItem>
                </ul>
                 <button className="w-full mt-4 btn-primary hover:bg-forest text-white py-2 px-4 rounded-lg text-sm">
                    Learn More About Our Courier Partners
                </button>
            </PolicyCard>
        </div>

        {/* Accountability & Protection */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            <Card icon={IconCamera} title="Digital Photo Confirmation" isPrimary={false}>
                <p>To prevent disputes, we require both parties to digitally confirm the condition of the item at handover.</p>
                <ul className="list-disc ml-5 space-y-2 text-sm">
                    <ListItem isAccent={true}>**On Receipt:** Borrower must take a quick photo of the item immediately upon receiving it to document the starting condition.</ListItem>
                    <ListItem isAccent={true}>**On Return:** Closet Owner must verify the returned item's condition before confirming the successful drop-off.</ListItem>
                </ul>
            </Card>

            <Card icon={IconShield} title="Rental Protection & Liability" isPrimary={true}>
                <p>All renters are liable for damage beyond normal wear. To reduce risk, we offer:</p>
                <div className="bg-white p-3 rounded-lg border border-[var(--color-accent-200)] mt-3 space-y-2">
                    <p className="font-semibold text-[var(--color-primary-800)]">Optional Protection Fee</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">Pay a small fee at checkout to lower your liability for minor repair costs.</p>
                </div>
                <p className="text-xs italic mt-2 text-[var(--color-text-muted)]">
                    This does not cover loss or damage requiring full replacement.
                </p>
            </Card>

            <Card icon={IconTime} title="Late Return Policy" isPrimary={false}>
                <p>The return deadline is strict to protect the next Borrower's booking.</p>
                <ul className="list-disc ml-5 space-y-2 text-sm">
                    <ListItem isAccent={true}>**Late Fee:** 10% of the rental fee for every late day.</ListItem>
                    <ListItem isAccent={true}>**48 Hours Late:** The Closet Owner may charge the full replacement value and forfeit the deposit.</ListItem>
                </ul>
            </Card>
        </div>

      </div>
    </div>
  );
};

// Re-defining Card component here to avoid defining it globally in the file
const Card = ({ icon: Icon, title, children, isPrimary = false }) => (
    <div className={`p-6 md:p-8 rounded-xl shadow-lg duration-300 ${isPrimary ? 'bg-[var(--color-primary-100)] border-4 border-[var(--color-accent)]' : 'bg-white border border-[var(--color-background-300)]'}`}>
      <div className="flex items-start mb-4">
        <Icon className={`w-10 h-10 ${isPrimary ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary-600)]'} flex-shrink-0 mr-4`} />
        <h3 className="text-[var(--text-2xl)] font-bold text-[var(--color-primary-700)] font-serif mt-1">
          {title}
        </h3>
      </div>
      <div className="text-[var(--color-text-secondary)] space-y-3">
        {children}
      </div>
    </div>
  );

export default ShippingDeliveryInfoPage;
