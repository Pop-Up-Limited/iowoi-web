import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  ArrowRight, 
  Menu, 
  X, 
  Mail, 
  MapPin, 
  TrendingUp, 
  Target, 
  Zap,
  Building2,
  ShieldCheck
} from 'lucide-react';

const Website = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-3">
              <span className="text-white font-bold text-lg">i</span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              iOwOi
            </span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-blue-900/20"
            >
              Get Started
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-slate-700 shadow-xl p-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 hover:text-blue-400 py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase">
                <Globe size={12} />
                Global Vision, Local Impact
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Connecting Brands with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                  the US Market
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                iOwOi is dedicated to providing precise North American market advertising strategies for global enterprises. Based in Wyoming, USA, and operated in Hong Kong, we are your cross-border digital marketing bridge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <a href="#contact" className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                  Contact Business Team <ArrowRight size={18} />
                </a>
                <a href="#about" className="px-8 py-3 border border-slate-700 text-slate-300 font-medium rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center">
                  Learn About Structure
                </a>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="md:w-2/5 mt-12 md:mt-0 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative circles representing connection */}
                <div className="absolute inset-0 border border-slate-700 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-slate-600 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative bg-gradient-to-tr from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                    <TrendingUp size={64} className="text-white" />
                    <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-mono text-slate-300">Market Reach: 100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Leveraging data-driven strategies to help your brand stand out in the complex US market.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Target size={32} className="text-blue-400" />}
              title="Precision Advertising"
              desc="Leveraging iOwOi's US-based resources for high-conversion precision campaigns on Google, Meta, TikTok, and other major platforms."
            />
            <ServiceCard 
              icon={<Zap size={32} className="text-purple-400" />}
              title="Brand Localization Strategy"
              desc="More than translation. Through Popup Limited's professional team, we ensure your marketing content aligns with American cultural context."
            />
            <ServiceCard 
              icon={<Globe size={32} className="text-orange-400" />}
              title="Cross-Border Integrated Marketing"
              desc="Bridging Asian supply chains with North American consumer markets, providing end-to-end solutions from creative production to performance analysis."
            />
          </div>
        </div>
      </section>

      {/* About/Structure Section */}
      <section id="about" className="py-20 bg-slate-800/50 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                 <div className="bg-slate-900 p-8 min-h-[300px] flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-500/20 rounded-lg">
                        <Building2 className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">iOwOi</h4>
                        <p className="text-sm text-slate-400">Wyoming, USA</p>
                      </div>
                    </div>
                    <div className="w-px h-12 bg-slate-700 ml-6 my-2"></div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <ShieldCheck className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Popup Limited</h4>
                        <p className="text-sm text-slate-400">Hong Kong (Subsidiary & Operations)</p>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Global Vision, Efficient Execution
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                <strong className="text-white">iOwOi</strong> is our parent company registered in Wyoming, USA, designed to provide brands with a legal, compliant, and trustworthy US market entry identity.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Our core operations are handled by our wholly-owned subsidiary <strong className="text-white">Popup Limited</strong>. This elite team based in Hong Kong combines Eastern and Western business wisdom, responsible for specific advertising strategy execution, creative output, and customer service.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  US entity ensures fund and compliance security
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Hong Kong team provides 24/7 rapid response service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col md:flex-row">
            
            {/* Left: Contact Info */}
            <div className="md:w-5/12 bg-gradient-to-br from-blue-900 to-slate-900 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
                <p className="text-blue-200 mb-8 text-sm">Ready to expand into the US market? Please contact our business team through the following channels.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-blue-400 mt-1" size={20} />
                    <div>
                      <p className="text-xs text-blue-300 uppercase tracking-wider font-semibold">Business Contact (Recommended)</p>
                      <a href="mailto:contact@popup.limited" className="text-white font-medium hover:text-blue-300 transition-colors">
                        contact@popup.limited
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Building2 className="text-blue-400 mt-1" size={20} />
                    <div>
                      <p className="text-xs text-blue-300 uppercase tracking-wider font-semibold">Operations Center</p>
                      <p className="text-white text-sm">Popup Limited<br/>Hong Kong</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Legal Info Small */}
              <div className="mt-12 pt-8 border-t border-blue-800/50">
                 <p className="text-xs text-blue-400/70 uppercase tracking-wider mb-2">Registration Info (Legal Matters Only)</p>
                 <div className="text-xs text-blue-200/60 font-mono space-y-1">
                   <p>iOwOi</p>
                   <p>30 N Gould St, Ste R</p>
                   <p>Sheridan, WY, 82801, USA</p>
                 </div>
              </div>
            </div>
            {/* Right: Form Placeholder */}
            <div className="md:w-7/12 p-8 md:p-12 bg-slate-800">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Company Email</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Requirements Description</label>
                  <textarea rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Please describe your promotion goals..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-blue-900/50">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-sm text-slate-500">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h5 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center transform rotate-3">
                <span className="text-white font-bold text-xs">i</span>
              </div>
              iOwOi
            </h5>
            <p className="max-w-xs mb-6">
              Empowering brands globally with US market access. Operated by Popup Limited.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"><Globe size={14}/></div>
              <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"><Mail size={14}/></div>
            </div>
          </div>
          
          <div>
            <h6 className="text-white font-bold mb-4">Navigation</h6>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Company Structure</a></li>
            </ul>
          </div>
          <div>
             <h6 className="text-white font-bold mb-4">Company Registration Details</h6>
             <div className="space-y-2 text-xs font-mono">
                <p><span className="text-slate-400 block">Company Name:</span> iOwOi</p>
                <p><span className="text-slate-400 block">Jurisdiction:</span> Wyoming, USA</p>
                <p><span className="text-slate-400 block">Registered Address:</span> 
                  30 N Gould St, Ste R<br/>
                  Sheridan, WY, 82801
                </p>
                <div className="pt-2 mt-2 border-t border-slate-900">
                  <p><span className="text-slate-400 block">Registered Agent:</span> Registered Agents Inc</p>
                  <p>Email: support@registeredagentsinc.com</p>
                  <p>Phone: (307) 200-2803</p>
                </div>
             </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-900 text-center">
          <p>&copy; {new Date().getFullYear()} iOwOi & Popup Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Sub-component for Service Cards
const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 group">
    <div className="mb-6 p-4 bg-slate-900 rounded-lg w-fit group-hover:bg-blue-900/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed">
      {desc}
    </p>
  </div>
);

export default Website;

