import React, { useState } from 'react';

// --- Inline SVG Icon Definitions ---
// Using modern icons to represent communication channels
const IconMail = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const IconChat = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
  </svg>
);

const IconAlert = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
);

const IconPin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const ContactUsPage = () => {

  const Card = ({ icon: Icon, title, children, isPrimary = false }) => (
    <div className={`p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:scale-[1.02] duration-300 ${isPrimary ? 'bg-[var(--color-primary-100)] border-4 border-[var(--color-accent)]' : 'bg-white border border-[var(--color-background-300)]'}`}>
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

  const TableRow = ({ label, value, isLink = false }) => (
    <div className="flex justify-between py-2 border-b border-[var(--color-background-200)] last:border-b-0">
      <span className="font-semibold text-[var(--color-text-primary)]">{label}</span>
      {isLink ? (
        <a href={value.startsWith('mailto') ? value : `tel:${value}`} className="text-[var(--color-primary)] hover:text-[var(--color-accent-600)] font-medium underline">
          {value.replace('mailto:', '').replace('tel:', '')}
        </a>
      ) : (
        <span className="text-[var(--color-text-secondary)] text-right">{value}</span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--color-background)] font-['Lato'] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-12 p-6 md:p-10 bg-white rounded-xl shadow-xl border-b-8 border-[var(--color-primary-600)]">
          <h1 className="text-[var(--text-5xl)] font-bold text-[var(--color-primary-800)] font-serif mb-3">
            Contact Our Team
          </h1>
          <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">
            Whether you have a general inquiry, need urgent support for a booking, or require assistance with your verification process, we're here to help!
          </p>
        </header>

        {/* Contact Method Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          <Card icon={IconMail} title="General Support & Inquiries" isPrimary={false}>
            <p>For non-urgent questions about listings, account settings, feature suggestions, or general policies, please use one of the channels below.</p>
            <div className="bg-[var(--color-background-200)] p-3 rounded-lg border border-[var(--color-background-300)] mt-3">
              <TableRow label="Email" value="mailto:support@p2pfashionug.com" isLink={true} />
              <TableRow label="Response Time" value="Within 12-24 hours" />
            </div>
             <div className="bg-[var(--color-background-200)] p-3 rounded-lg border border-[var(--color-background-300)] mt-3">
              <TableRow label="Live Chat" value="Available on dashboard" isLink={false} />
              <TableRow label="Hours (EAT)" value="Mon-Fri, 9 AM - 5 PM" />
            </div>
          </Card>

          <Card icon={IconAlert} title="Urgent Booking Issues" isPrimary={true}>
            <p>If you have an **active rental** with a time-sensitive issue (delay, damage, incorrect item), please follow these steps:</p>
            <div className="bg-white p-3 rounded-lg border border-[var(--color-accent-200)] mt-3 space-y-2">
                <p className="font-semibold text-[var(--color-primary-800)]">1. In-App Messaging</p>
                <p className="text-sm">Use the secure chat with the Closet Owner first for immediate coordination.</p>
                <p className="font-semibold text-[var(--color-primary-800)]">2. Urgent Support Escalation</p>
                <p className="text-sm">If the issue persists, mark the transaction for "Urgent Support" via your booking page, and our team will prioritize your query.</p>
            </div>
          </Card>

          <Card icon={IconChat} title="ID Verification Assistance" isPrimary={false}>
            <p>For status updates on your ID verification, or if you encountered an error during the verification process.</p>
            <div className="bg-[var(--color-background-200)] p-3 rounded-lg border border-[var(--color-background-300)] mt-3">
              <TableRow label="Email" value="mailto:verification@p2pfashionug.com" isLink={true} />
              <TableRow label="Priority" value="Dedicated Compliance Team" />
            </div>
          </Card>
        </div>
        
        {/* Office Location Section */}
        <section className="bg-white p-8 md:p-12 rounded-xl shadow-inner border-t-8 border-[var(--color-accent)]">
          <h2 className="text-[var(--text-3xl)] font-bold text-[var(--color-primary-700)] flex items-center mb-6 border-b pb-3 border-[var(--color-background-300)]">
            <IconPin className="w-8 h-8 mr-3 text-[var(--color-primary-600)]" />
            Administrative Office (Kampala)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[var(--color-text-secondary)] mb-4">
                While all transactions are conducted online, our administrative office is based in Kampala. Please note: **Do not visit without a scheduled appointment.**
              </p>
              <div className="bg-ivory p-4 rounded-lg border border-gold text-deep-brown font-medium">
                <p className="text-lg font-serif">P2P Fashion UG Headquarters</p>
                <p>Plot 10, Acacia Avenue,</p>
                <p>Kololo, Kampala, Uganda</p>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] italic">
                  *This is primarily a virtual office for administrative purposes only.*
                </p>
              </div>
            </div>
            {/* Simple Map Placeholder */}
            <div>
              <div className="w-full aspect-video bg-[var(--color-background-400)] rounded-lg shadow-md flex items-center justify-center text-[var(--color-text-secondary)] text-center font-serif text-lg">
                [Embed Map Placeholder: Kampala, Kololo Area]
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactUsPage;
