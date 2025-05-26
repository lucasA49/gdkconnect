import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Shield, 
  Users, 
  Code, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Play,
  Star,
  Menu,
  X
} from 'lucide-react';

// Header Component
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Globe size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">GDK Connect</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Accueil
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </a>
            <a href="#realisations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Réalisations
            </a>
            <a href="#a-propos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              Contactez-nous
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#accueil"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#realisations"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Réalisations
              </a>
              <a
                href="#a-propos"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2">
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 font-medium shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contactez-nous
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Donnez <span className="text-blue-600">vie</span> à vos idées
              <br />
              <span className="text-blue-600">digitales</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              GDK Connect transforme vos visions en réalité numérique grâce à des solutions innovantes et personnalisées. De la conception à la réalisation, nous vous accompagnons dans votre transformation digitale.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Découvrir nos services
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Play size={20} />
              Voir nos projets
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-8 transform rotate-3 shadow-2xl">
            <div className="bg-white rounded-xl p-6 transform -rotate-3">
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <Globe size={80} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Solutions Digitales</h3>
                  <p className="text-gray-600 mt-2">Innovation & Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Création de site web",
      description: "Sites vitrine, e-commerce et applications web sur mesure avec des technologies modernes."
    },
    {
      icon: Smartphone,
      title: "Applications mobiles",
      description: "Développement d'applications iOS et Android natives et hybrides pour tous vos besoins."
    },
    {
      icon: Palette,
      title: "Webdesign & Graphisme",
      description: "Création d'identités visuelles marquantes et d'interfaces utilisateur intuitives."
    },
    {
      icon: Shield,
      title: "Sécurité numérique",
      description: "Protection de vos données et systèmes avec les meilleures pratiques de cybersécurité."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour accompagner votre transformation digitale
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Realizations Section Component
const RealizationsSection = () => {
  const projects = [
    {
      title: "Site vitrine - Start-up Tech",
      description: "Développement d'un site vitrine moderne pour une start-up technologique avec animations et design responsive.",
      image: "🚀",
      tags: ["React", "Tailwind", "Animation"]
    },
    {
      title: "Application mobile - E-commerce",
      description: "Application mobile complète pour une boutique en ligne avec paiement intégré et gestion des commandes.",
      image: "📱",
      tags: ["React Native", "API", "Paiement"]
    },
    {
      title: "Plateforme web - SaaS",
      description: "Plateforme SaaS complète avec tableau de bord, gestion d'utilisateurs et analytics avancés.",
      image: "💼",
      tags: ["Vue.js", "Node.js", "Database"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-blue-600">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez quelques-uns de nos projets récents
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            À propos de <span className="text-blue-600">GDK Connect</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous sommes une équipe passionnée de développeurs et designers qui transforment vos idées en solutions digitales innovantes. Avec plus de 5 ans d'expérience, nous accompagnons les entreprises dans leur transformation numérique.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Accompagnement personnalisé de A à Z</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Technologies modernes et performantes</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Support technique et maintenance</span>
            </li>
          </ul>
          <div className="flex gap-6 pt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              En savoir plus
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Nos valeurs
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Users size={80} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">Notre Équipe</h3>
                <p className="text-gray-600 mt-2">Expertise & Créativité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Contact Section Component
const ContactSection = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Contactez <span className="text-blue-400">GDK Connect</span>
            </h2>
            <p className="text-xl text-gray-300">
              Prêt à concrétiser votre projet ? Discutons ensemble de vos besoins et donnons vie à vos idées.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-gray-300">Email</p>
                <p className="text-white">contact@gdkconnect.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-gray-300">Téléphone</p>
                <p className="text-white">+33 1 23 45 67 89</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-gray-300">Adresse</p>
                <p className="text-white">Paris, France</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nom complet</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Décrivez votre projet..."
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Envoyer le message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Newsletter Section Component
const NewsletterSection = () => (
  <section className="bg-blue-600 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à booster votre présence digitale ?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Recevez nos conseils et astuces pour optimiser votre stratégie digitale
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Votre email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            S'abonner
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold text-blue-400 mb-4">GDK Connect</div>
          <p className="text-gray-400">
            Transformons ensemble vos idées en solutions digitales innovantes.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Développement Web</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Applications Mobiles</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Design UX/UI</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Équipe</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Paris, France</li>
            <li>contact@gdkconnect.com</li>
            <li>+33 1 23 45 67 89</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 GDK Connect. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="accueil">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="realisations">
        <RealizationsSection />
      </section>
      <section id="a-propos">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;