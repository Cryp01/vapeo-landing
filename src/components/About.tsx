import React from "react";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      number: "5+",
      label: "Años de Experiencia",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      number: "1000+",
      label: "Clientes Satisfechos",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-400" />,
      number: "24/7",
      label: "Atención al Cliente",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      number: "100%",
      label: "Productos Originales",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Sobre{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nosotros
              </span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                En{" "}
                <strong className="text-white">
                  DECOY DISTRIBUTION, E.I.R.L.
                </strong>
                , nos especializamos en la distribución, comercialización,
                exportación e importación, venta al por mayor y al por menor de
                una amplia gama de productos.
              </p>

              <p>
                Ofrecemos productos como: vapes, textiles, calzados, productos
                del hogar y productos de limpieza, así como cualquier producto
                relacionado. Nuestro compromiso es brindar calidad y variedad
                para satisfacer todas las necesidades de nuestros clientes.
              </p>

              <p>
                Ubicados estratégicamente en Cerros de Gurabo III, República
                Dominicana, contamos con las mejores marcas del mercado y
                mantenemos un inventario siempre actualizado para ofrecer las
                mejores opciones a nuestros clientes.
              </p>
            </div>

            <div className="mt-12">
              <a
                href="#contacto"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contáctanos
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 text-center hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-600/50 rounded-2xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
