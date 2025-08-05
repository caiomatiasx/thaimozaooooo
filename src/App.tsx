import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Monitor, Smartphone, Globe, Users, Star, ArrowRight, Linkedin, Mail, Phone } from 'lucide-react';

function App() {
  // Estado para controlar o carrossel principal
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Dados do carrossel de serviços
  const services = [
    {
      id: 1,
      title: "Sites Institucionais",
      description: "Websites profissionais que transmitem credibilidade e fortalecem sua marca no mercado digital.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      id: 2,
      title: "E-commerce Completo",
      description: "Lojas virtuais modernas com sistema de pagamento integrado para vender seus produtos online.",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Sites Responsivos",
      description: "Desenvolvemos sites que se adaptam perfeitamente a todos os dispositivos e tamanhos de tela.",
      image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Sistemas Web",
      description: "Plataformas customizadas para otimizar os processos internos da sua empresa.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Users className="w-8 h-8" />
    }
  ];

  // useEffect para controlar o autoplay do carrossel
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
      }, 4000); // Muda a cada 4 segundos

      // Limpa o intervalo quando o componente é desmontado ou quando para
      return () => clearInterval(interval);
    }
  }, [isPlaying, services.length]);

  // Função para ir para o slide anterior
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  // Função para ir para o próximo slide
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  // Função para pausar/reproduzir o carrossel
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Função para ir diretamente para um slide específico
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header de navegação */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-pink-500/20">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
            WebSolutions
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-pink-400 transition-colors">Início</a>
            <a href="#services" className="hover:text-pink-400 transition-colors">Serviços</a>
            <a href="#about" className="hover:text-pink-400 transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-pink-400 transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      {/* Seção Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
              Transforme Sua Empresa
              <span className="block text-pink-400">Digitalmente</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Criamos sites profissionais que convertem visitantes em clientes e 
              elevam sua marca ao próximo nível no mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Ver Portfólio
              </button>
            </div>
          </div>
        </div>

        {/* Elementos decorativos flutuantes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-rose-500/20 rounded-full blur-xl"></div>
      </section>

      {/* Seção de Serviços com Carrossel */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos soluções completas para estabelecer e fortalecer sua presença digital
            </p>
          </div>

          {/* Carrossel Principal */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={service.id} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-64 md:h-80 object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex items-center mb-4">
                            <div className="text-pink-400 mr-4">
                              {service.icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors self-start flex items-center gap-2">
                            Saiba Mais
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles do Carrossel */}
            <div className="flex justify-center items-center mt-8 gap-4">
              {/* Botão Anterior */}
              <button
                onClick={goToPrevious}
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Indicadores de slides */}
              <div className="flex gap-2 mx-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-pink-500' : 'bg-gray-600'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Botão Play/Pause */}
              <button
                onClick={togglePlayPause}
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                aria-label={isPlaying ? 'Pausar autoplay' : 'Iniciar autoplay'}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>

              {/* Botão Próximo */}
              <button
                onClick={goToNext}
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Por Que Escolher Nossa Equipe?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl">
                <Star className="w-12 h-12 text-pink-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-4">Qualidade Premium</h3>
                <p className="text-gray-300">Sites desenvolvidos com as melhores práticas e tecnologias mais modernas do mercado.</p>
              </div>
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl">
                <Users className="w-12 h-12 text-pink-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-4">Suporte Dedicado</h3>
                <p className="text-gray-300">Acompanhamento completo durante todo o projeto e suporte contínuo após a entrega.</p>
              </div>
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl">
                <Globe className="w-12 h-12 text-pink-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-4">Resultados Garantidos</h3>
                <p className="text-gray-300">Sites otimizados para conversão e rankeamento nos motores de busca.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua presença digital
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Botão LinkedIn */}
            <a
              href="https://www.linkedin.com/in/thailane-teixeira-538908182"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              Contate-me no LinkedIn
            </a>
            
            {/* Botão Email */}
            <a
              href="mailto:contato@websolutions.com"
              className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
          </div>

          {/* Informações adicionais */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telefone</h3>
              <p className="text-gray-400">+55 (11) 99999-9999</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">contato@websolutions.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Thailane Teixeira</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-pink-500/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 WebSolutions. Todos os direitos reservados. Desenvolvido com ❤️ para transformar negócios.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;