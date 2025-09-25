// src/pages/CareersPage.jsx
import { Link } from 'react-router-dom';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-purple-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Careers at <span className="text-emerald-600">Zuula</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600 font-light">
            Join us in revolutionizing fashion in Uganda through sharing, sustainability, and style
          </p>
          <Link
            to="#openings"
            className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-medium hover:bg-emerald-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-block"
          >
            <i className="fas fa-briefcase mr-2"></i> View Open Positions
          </Link>
        </div>
      </section>

      {/* Why Work at Zuula */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Why Work at Zuula</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building more than a company—we're building a movement that's changing how Uganda thinks about fashion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: "hands-helping", 
                title: "Purpose-Driven Work", 
                desc: "Join a mission that matters—reducing fashion waste while making style accessible to all Ugandans.",
                color: "emerald"
              },
              { 
                icon: "rocket", 
                title: "Growth Opportunities", 
                desc: "Be part of a fast-growing startup with plenty of room to learn, take ownership, and advance your career.",
                color: "purple"
              },
              { 
                icon: "users", 
                title: "Great Culture", 
                desc: "Work with passionate, supportive colleagues in a collaborative environment that values diversity and inclusion.",
                color: "amber"
              },
              { 
                icon: "balance-scale", 
                title: "Work-Life Balance", 
                desc: "We offer flexible working arrangements and understand that our team members have lives outside work.",
                color: "blue"
              },
              { 
                icon: "graduation-cap", 
                title: "Learning & Development", 
                desc: "Receive mentorship, attend conferences, and access resources to continuously develop your skills.",
                color: "indigo"
              },
              { 
                icon: "award", 
                title: "Impact & Recognition", 
                desc: "See your contributions make a real difference and get recognized for your achievements.",
                color: "rose"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-gray-100 hover:border-emerald-500">
                <div className={`w-14 h-14 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  <i className={`fas fa-${item.icon} text-${item.color}-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Zuula */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Life at Zuula</h2>
              <p className="text-gray-600 mb-4">
                At Zuula, we believe that our workplace should be as vibrant and diverse as the fashion we help share. 
                Our team is a close-knit community of passionate individuals who support each other both professionally and personally.
              </p>
              <p className="text-gray-600 mb-4">
                We celebrate milestones together, encourage creative thinking, and value each team member's unique perspective. 
                From weekly team lunches to quarterly fashion showcase events, we make sure our work environment is engaging and enjoyable.
              </p>
              <p className="text-gray-600">
                Based in the heart of Kampala, our office reflects our brand—creative, colorful, and comfortable, with spaces designed for collaboration and focus.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Zuula team collaboration" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Zuula office environment" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Zuula team event" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Zuula fashion showcase" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Benefits & Perks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits and unique perks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "money-bill-wave", 
                title: "Competitive Salary", 
                desc: "We offer competitive compensation packages with regular reviews.",
                color: "emerald"
              },
              { 
                icon: "medkit", 
                title: "Health Insurance", 
                desc: "Comprehensive medical coverage for you and your family.",
                color: "blue"
              },
              { 
                icon: "umbrella-beach", 
                title: "Paid Time Off", 
                desc: "Generous vacation days, sick leave, and public holidays.",
                color: "amber"
              },
              { 
                icon: "tshirt", 
                title: "Fashion Allowance", 
                desc: "Monthly credit to rent outfits from our platform.",
                color: "purple"
              },
              { 
                icon: "home", 
                title: "Flexible Work", 
                desc: "Hybrid work model with remote work options.",
                color: "green"
              },
              { 
                icon: "utensils", 
                title: "Team Meals", 
                desc: "Catered lunches and fully stocked kitchen.",
                color: "red"
              },
              { 
                icon: "brain", 
                title: "Learning Budget", 
                desc: "Annual stipend for professional development.",
                color: "indigo"
              },
              { 
                icon: "child", 
                title: "Parental Leave", 
                desc: "Paid leave for new parents to bond with their children.",
                color: "pink"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <i className={`fas fa-${item.icon} text-${item.color}-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our team and help shape the future of fashion in Uganda
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              { 
                title: "Senior Software Engineer", 
                department: "Technology",
                type: "Full-time",
                location: "Kampala / Hybrid",
                description: "We're looking for an experienced engineer to help scale our platform and build new features for our growing community."
              },
              { 
                title: "Fashion Curator & Stylist", 
                department: "Fashion",
                type: "Full-time",
                location: "Kampala",
                description: "Use your fashion expertise to curate collections, style outfits, and ensure quality across our platform."
              },
              { 
                title: "Marketing Manager", 
                department: "Marketing",
                type: "Full-time",
                location: "Kampala / Hybrid",
                description: "Lead our marketing efforts to grow our community and increase brand awareness across Uganda."
              },
              { 
                title: "Customer Experience Specialist", 
                department: "Operations",
                type: "Full-time",
                location: "Kampala",
                description: "Be the face of Zuula to our community, helping users with questions and ensuring exceptional experiences."
              },
              { 
                title: "Operations Associate", 
                department: "Operations",
                type: "Full-time",
                location: "Kampala",
                description: "Help manage the logistics of our fashion sharing platform, from quality checks to delivery coordination."
              },
            ].map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md mb-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">{job.department}</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">{job.type}</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">{job.location}</span>
                    </div>
                  </div>
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-2xl font-medium hover:bg-emerald-700 transition-all whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600 mt-4">{job.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see a role that fits your skills? We're always interested in meeting talented people.
            </p>
            <a href="/contact" className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center">
              Send us your resume <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Hiring Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've designed our process to be transparent, respectful, and efficient
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "1", 
                title: "Application Review", 
                desc: "We carefully review each application and respond within 5 business days.",
                icon: "file-alt",
                color: "emerald"
              },
              { 
                step: "2", 
                title: "Initial Chat", 
                desc: "A 30-minute video call with our hiring team to discuss your background and interests.",
                icon: "video",
                color: "purple"
              },
              { 
                step: "3", 
                title: "Skills Assessment", 
                desc: "A practical task or interview to assess skills relevant to the role.",
                icon: "tasks",
                color: "amber"
              },
              { 
                step: "4", 
                title: "Team Interviews", 
                desc: "Meet with potential colleagues and managers in 2-3 additional interviews.",
                icon: "users",
                color: "blue"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <span className={`text-${item.color}-600 text-2xl font-bold`}>{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">What Happens Next?</h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              After your final interviews, we aim to provide a decision within 3-5 business days. 
              If you're selected, you'll receive a competitive offer package and details about your onboarding process.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're committed to providing feedback to all candidates who complete our interview process, 
              regardless of the outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us build the future of fashion in Uganda while growing your career in a supportive, dynamic environment.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="#openings"
              className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-briefcase mr-2"></i> View Open Positions
            </Link>
            <a
              href="/contact"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-emerald-600 transition-all transform hover:-translate-y-1"
            >
              <i className="fas fa-question-circle mr-2"></i> Contact HR
            </a>
          </div>
          <p className="mt-8 opacity-80">
            Follow us on <a href="#" className="underline font-semibold">LinkedIn</a> to stay updated on new openings
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}