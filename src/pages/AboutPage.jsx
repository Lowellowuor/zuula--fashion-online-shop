// src/pages/AboutPage.jsx
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-100 via-background to-champagne py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-jade/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            About <span className="text-primary">Zuula</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-text-secondary font-light">
            Revolutionizing fashion in Uganda through sharing, sustainability, and style
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="premium-card p-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560611926-e4a6d2000eaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ugandan fashion" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <div className="text-accent text-sm font-semibold">EST. 2022</div>
                  <h3 className="text-xl font-heading text-text-primary">Kampala Roots</h3>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading mb-6 text-text-primary">Our Story</h2>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Zuula was born in Kampala from a simple observation: Ugandans love to dress well for special occasions, but buying new outfits for every event is expensive and unsustainable.
              </p>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Our founders, Sarah and Michael, noticed that countless beautiful outfits were sitting idle in closets after being worn just once or twice. Meanwhile, others struggled to find affordable options for important events.
              </p>
              <p className="text-text-secondary leading-relaxed">
                In 2022, we launched Zuula to solve both problems—creating a platform where fashion lovers can rent out their unused clothes and others can access stylish outfits at a fraction of the retail price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-background-100 to-background-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading mb-4 text-text-primary">Our Mission & Vision</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We're building a future where fashion is accessible, sustainable, and community-driven
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="premium-card border-t-4 border-primary">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-heading mb-4 text-text-primary">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                To make fashion accessible to all Ugandans by creating a circular economy where clothes are shared rather than sitting unused in closets. We empower our community to earn from their wardrobe while reducing fashion waste.
              </p>
            </div>
            
            <div className="premium-card border-t-4 border-accent">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-eye text-accent text-2xl"></i>
              </div>
              <h3 className="text-xl font-heading mb-4 text-text-primary">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                To become Uganda's leading fashion rental platform, transforming how people think about ownership and sustainability in fashion. We envision a future where renting special occasion wear is the norm rather than the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading mb-4 text-text-primary">Our Core Values</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              These principles guide everything we do at Zuula
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: "users", 
                title: "Community First", 
                desc: "We believe in building a trusted community where fashion lovers can connect, share, and support each other.",
                color: "primary"
              },
              { 
                icon: "leaf", 
                title: "Sustainability", 
                desc: "We're committed to reducing fashion waste and promoting a circular economy that benefits both people and the planet.",
                color: "accent"
              },
              { 
                icon: "lock", 
                title: "Trust & Safety", 
                desc: "We prioritize the safety of our community with verified profiles, secure payments, and a robust review system.",
                color: "forest"
              },
              { 
                icon: "gem", 
                title: "Quality", 
                desc: "We maintain high standards for the items on our platform, ensuring everyone has access to beautiful, well-maintained fashion.",
                color: "jade"
              },
              { 
                icon: "hand-holding-heart", 
                title: "Accessibility", 
                desc: "We believe everyone deserves to look and feel their best, regardless of their budget or background.",
                color: "primary"
              },
              { 
                icon: "lightbulb", 
                title: "Innovation", 
                desc: "We continuously improve our platform to better serve our community and stay at the forefront of fashion technology.",
                color: "accent"
              },
            ].map((item, i) => (
              <div key={i} className="premium-card hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className={`w-14 h-14 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  <i className={`fas fa-${item.icon} text-${item.color} text-xl`}></i>
                </div>
                <h3 className="text-lg font-heading mb-2 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-background-100 to-background-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading mb-4 text-text-primary">Meet Our Team</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The passionate people behind Zuula
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Sarah N.", 
                role: "Co-Founder & CEO", 
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Former fashion buyer with a passion for sustainable fashion."
              },
              { 
                name: "Michael T.", 
                role: "Co-Founder & CTO", 
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Tech entrepreneur with experience in marketplace platforms."
              },
              { 
                name: "Rebecca K.", 
                role: "Head of Community", 
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Event planner who understands the Ugandan fashion scene."
              },
              { 
                name: "David M.", 
                role: "Marketing Director", 
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Digital marketing expert with a love for brand storytelling."
              },
            ].map((member, i) => (
              <div key={i} className="premium-card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md border-4 border-background"
                />
                <h3 className="text-lg font-heading text-text-primary">{member.name}</h3>
                <p className="text-primary mb-3 font-semibold">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{member.bio}</p>
                <div className="flex justify-center mt-4 space-x-3">
                  <a href="#" className="text-text-muted hover:text-primary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-text-muted hover:text-primary transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-text-muted hover:text-primary transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading mb-4 text-text-primary">Our Impact</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Creating positive change in Uganda's fashion ecosystem
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-12">
            <div className="premium-card bg-gradient-to-br from-primary-50 to-background">
              <div className="text-4xl font-bold text-primary mb-2">1,247+</div>
              <p className="text-text-secondary font-medium">Outfits Shared</p>
            </div>
            <div className="premium-card bg-gradient-to-br from-accent-50 to-background">
              <div className="text-4xl font-bold text-accent mb-2">3,568+</div>
              <p className="text-text-secondary font-medium">Community Members</p>
            </div>
            <div className="premium-card bg-gradient-to-br from-jade/20 to-background">
              <div className="text-4xl font-bold text-forest mb-2">52.7M+</div>
              <p className="text-text-secondary font-medium">UGX Earned</p>
            </div>
            <div className="premium-card bg-gradient-to-br from-champagne to-background">
              <div className="text-4xl font-bold text-brass mb-2">12+</div>
              <p className="text-text-secondary font-medium">Cities Served</p>
            </div>
          </div>
          
          <div className="premium-card bg-gradient-to-r from-primary-50 to-accent-50 text-center border-l-4 border-accent">
            <h3 className="text-2xl font-heading mb-4 text-text-primary">Environmental Impact</h3>
            <p className="text-text-secondary max-w-3xl mx-auto mb-6 leading-relaxed">
              By promoting clothing reuse, Zuula community has saved an estimated 2,500 kg of clothing from potentially going to waste—equivalent to saving approximately 15 million liters of water used in clothing production.
            </p>
            <div className="w-full bg-background-300 rounded-full h-3 mb-2 max-w-2xl mx-auto">
              <div className="bg-primary h-3 rounded-full" style={{width: '75%'}}></div>
            </div>
            <p className="text-sm text-text-muted">75% of our users report buying fewer new clothes since joining Zuula</p>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-16 bg-gradient-to-br from-background-100 to-background-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading mb-4 text-text-primary">Press & Recognition</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              As featured in leading publications across Uganda
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center mb-12">
            {[
              { name: "Fashion UG", logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
              { name: "Kampala Style", logo: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
              { name: "Event Digest", logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
              { name: "UG Trends", logo: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
            ].map((partner, i) => (
              <div key={i} className="premium-card h-32 flex items-center justify-center bg-white">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-16 max-w-full opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Zuula is revolutionizing how Ugandans think about fashion consumption.",
                source: "Kampala Style Magazine",
                date: "June 2023"
              },
              {
                quote: "The sharing economy meets fashion in this innovative platform designed for the Ugandan market.",
                source: "Business Daily Uganda",
                date: "March 2023"
              },
              {
                quote: "A game-changer for fashion-conscious individuals looking to reduce their environmental impact.",
                source: "Eco Uganda",
                date: "August 2023"
              },
            ].map((item, i) => (
              <div key={i} className="premium-card hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-accent text-4xl mb-4 font-serif">"</div>
                <p className="text-text-secondary italic mb-4 leading-relaxed">"{item.quote}"</p>
                <div className="border-t border-background-300 pt-4">
                  <p className="font-heading font-semibold text-text-primary">{item.source}</p>
                  <p className="text-text-muted text-sm">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-forest text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading mb-6">Join the Zuula Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Be part of Uganda's fashion revolution—whether you want to rent stunning outfits or earn from your closet.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/signup"
              className="btn-gold px-8 py-4 rounded-xl font-semibold hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl transition-all"
            >
              <i className="fas fa-user-plus mr-2"></i> Create Account
            </Link>
            <Link
              to="/browse"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all hover:transform hover:-translate-y-1"
            >
              <i className="fas fa-shirt mr-2"></i> Browse Outfits
            </Link>
          </div>
          <p className="mt-8 opacity-80">
            Have questions? <a href="/contact" className="underline font-semibold opacity-100">Contact our team</a>
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