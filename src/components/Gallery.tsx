import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/7644105/pexels-photo-7644105.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Vapes premium collection"
    },
    {
      url: "https://images.pexels.com/photos/7865016/pexels-photo-7865016.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Modern hookah setup"
    },
    {
      url: "https://images.pexels.com/photos/7865015/pexels-photo-7865015.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Vaping accessories"
    },
    {
      url: "https://images.pexels.com/photos/7644104/pexels-photo-7644104.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Premium vape devices"
    },
    {
      url: "https://images.pexels.com/photos/7644103/pexels-photo-7644103.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Colorful vapes"
    },
    {
      url: "https://images.pexels.com/photos/7865014/pexels-photo-7865014.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Hookah lounge atmosphere"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestra <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Galería</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre la calidad y variedad de nuestros productos a través de nuestra galería
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-700/30 hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg">
            ¿Quieres ver más? Visita nuestra tienda física y descubre toda nuestra colección
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;