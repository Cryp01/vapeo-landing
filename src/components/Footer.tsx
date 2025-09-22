import React from 'react';
import { MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Vapeo&HookaBar
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tu destino premium para la mejor experiencia en vapes y hookah. 
              Calidad garantizada y atención personalizada desde 2019.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Información de Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  Avenida Gregorio Luperón, No. 14<br />
                  Cerros de Gurabo III
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm">contact@vapeohookabar.com</div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm">Lun - Dom: 10:00 AM - 10:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Vapeo&HookaBar. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;