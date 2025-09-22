import React from 'react';
import { Zap, Wind, Sparkles, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Zap className="w-12 h-12 text-purple-400" />,
      title: "Vapes Premium",
      description: "La mejor selección de vapes desechables y recargables de marcas reconocidas mundialmente.",
      features: ["Múltiples sabores", "Larga duración", "Calidad garantizada"]
    },
    {
      icon: <Wind className="w-12 h-12 text-blue-400" />,
      title: "Hookah & Shisha",
      description: "Disfruta de la experiencia tradicional con nuestras hookah de alta calidad y tabaco premium.",
      features: ["Diseños únicos", "Tabaco importado", "Accesorios completos"]
    },
    {
      icon: <Sparkles className="w-12 h-12 text-pink-400" />,
      title: "Accesorios",
      description: "Todo lo que necesitas para completar tu experiencia: baterías, cargadores, y más.",
      features: ["Repuestos originales", "Herramientas", "Mantenimiento"]
    },
    {
      icon: <Star className="w-12 h-12 text-orange-400" />,
      title: "Productos Exclusivos",
      description: "Descubre nuestra línea exclusiva de productos premium y ediciones limitadas.",
      features: ["Edición limitada", "Productos únicos", "Alta gama"]
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Productos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de productos de vapeo y hookah de las mejores marcas del mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-700/50 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
              </div>

              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;