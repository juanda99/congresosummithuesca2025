import React from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Banner Congreso Finalizado */}
      <div className="pt-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-3">
            <svg
              className="w-6 h-6 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg md:text-xl font-bold text-center">
              ⚠️ Congreso Finalizado - Las inscripciones están cerradas
            </p>
            <svg
              className="w-6 h-6 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="inicio"
        className="bg-gradient-to-br from-purple-600 via-indigo-600 to-green-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Congreso Summit Huesca 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            El evento más importante del año
          </p>
          <div className="inline-block bg-gray-400 text-white px-8 py-3 rounded-full font-semibold cursor-not-allowed opacity-75">
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Inscripciones Cerradas</span>
            </span>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Video Promocional
          </h2>
          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600">
            <video
              className="w-full h-auto"
              controls
              poster="/logo.png"
              preload="metadata"
            >
              <source
                src="/videos/promo-summit-huesca-2025.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>

      {/* Programa */}
      <section
        id="programa"
        className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Programa del Congreso
          </h2>

          {/* Botón de descarga */}
          <div className="text-center mb-8">
            <a
              href="/Programa_Vip_A4.pdf"
              download
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-green-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Descargar Programa (PDF)
            </a>
          </div>

          {/* Visor de PDF */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-green-500 text-white p-4 text-center">
              <h3 className="text-xl font-semibold">
                Vista Previa del Programa
              </h3>
            </div>
            <div className="relative w-full" style={{ height: '800px' }}>
              <iframe
                src="/Programa_Vip_A4.pdf"
                className="w-full h-full border-0"
                title="Programa del Congreso"
              />
            </div>
            {/* Alternativa para móviles */}
            <div className="p-4 bg-gray-50 text-center border-t">
              <p className="text-sm text-gray-600 mb-2">
                ¿No puedes ver el PDF?
              </p>
              <a
                href="/Programa_Vip_A4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-green-600 font-semibold underline"
              >
                Ábrelo en una nueva pestaña
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ponentes */}
      <section id="ponentes" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Ponentes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mar Romera */}
            <div className="bg-white rounded-lg shadow-xl p-8 hover:transform hover:scale-105 transition duration-300">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.mtconsulting.es/wp-content/uploads/2019/09/contratar_marromera-1.png"
                  alt="Mar Romera"
                  className="w-48 h-48 object-cover rounded-full mb-6 shadow-lg border-4 border-purple-200"
                />
                <h3 className="text-2xl font-bold mb-2 text-purple-700">
                  Mar Romera
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-semibold">
                  Experta en Inteligencia Emocional
                </p>
                <p className="text-gray-700 text-center leading-relaxed">
                  Maestra, pedagoga y psicopedagoga. Presidenta de la Asociación
                  Pedagógica Francesco Tonucci y autora del modelo pedagógico
                  "Educar con tres Cs: Capacidades, Competencias y Corazón". Una
                  de las principales referencias en inteligencia emocional en la
                  educación española.
                </p>
                <a
                  href="https://www.mtconsulting.es/agencia-conferenciantes/contratar-mar-romera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-purple-600 hover:text-green-600 font-semibold underline"
                >
                  Más información →
                </a>
              </div>
            </div>

            {/* Albert Espinosa */}
            <div className="bg-white rounded-lg shadow-xl p-8 hover:transform hover:scale-105 transition duration-300">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.albertespinosa.com/wp-content/uploads/2024/01/albert-espinosa-trans-bn-min.png"
                  alt="Albert Espinosa"
                  className="w-48 h-48 object-cover object-top rounded-full mb-6 shadow-lg border-4 border-green-200"
                />
                <h3 className="text-2xl font-bold mb-2 text-green-700">
                  Albert Espinosa
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-semibold">
                  Escritor, Guionista y Dramaturgo
                </p>
                <p className="text-gray-700 text-center leading-relaxed">
                  Ingeniero industrial, escritor y dramaturgo español. Autor de
                  obras como "El mundo azul" y "Pulseras Rojas". Su obra se
                  caracteriza por transmitir mensajes de superación personal,
                  optimismo y la importancia de vivir el presente con pasión.
                </p>
                <a
                  href="https://www.elblogdealbertespinosa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-green-600 hover:text-purple-600 font-semibold underline"
                >
                  Más información →
                </a>
              </div>
            </div>

            {/* María José Sánchez Parra */}
            <div className="bg-white rounded-lg shadow-xl p-8 hover:transform hover:scale-105 transition duration-300">
              <div className="flex flex-col items-center">
                <img
                  src="https://mjpedagogiamusical.com/wp-content/uploads/2020/09/IMG_4351-2-600x450.jpg"
                  alt="María José Sánchez Parra"
                  className="w-48 h-48 object-cover rounded-full mb-6 shadow-lg border-4 border-indigo-200"
                />
                <h3 className="text-2xl font-bold mb-2 text-indigo-700">
                  María José Sánchez Parra
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-semibold">
                  Doctora en Pedagogía Musical
                </p>
                <p className="text-gray-700 text-center leading-relaxed">
                  Doctora en Humanidades, Arte y Educación por la UCLM y
                  Titulada Superior en Pedagogía del Lenguaje y Educación
                  Musical. Profesora en la Facultad de Educación de Toledo. Más
                  de 387.000 seguidores en YouTube donde comparte su pasión por
                  la educación musical.
                </p>
                <a
                  href="https://mjpedagogiamusical.com/sobre-mi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-indigo-600 hover:text-green-600 font-semibold underline"
                >
                  Más información →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jornada Previa */}
      <section id="jornada-previa" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Jornada Previa
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-lg">
              Información sobre la jornada previa al congreso...
            </p>
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section id="informacion" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Información Adicional
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Ubicación
              </h3>
              <p className="text-gray-600">
                Detalles sobre el lugar del evento
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Alojamiento
              </h3>
              <p className="text-gray-600">Opciones de hospedaje</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materiales */}
      <section id="materiales" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Materiales
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-lg">
              Descarga materiales del congreso...
            </p>
          </div>
        </div>
      </section>

      {/* Multimedia */}
      <section id="multimedia" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Multimedia
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-gradient-to-br from-purple-400 to-pink-500 h-48 rounded mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Video {item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusiones */}
      <section id="conclusiones" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Conclusiones
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-lg">
              Resumen y conclusiones del congreso...
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Patrocinadores */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              Patrocinadores
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Edelvives */}
              <a
                href="https://www.edelvives.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg px-8 py-6 hover:shadow-xl transition duration-300 transform hover:scale-105 flex items-center justify-center min-w-[200px]"
              >
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">
                    EDELVIVES
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Editorial</p>
                </div>
              </a>

              {/* Fundación Ibercaja */}
              <a
                href="https://www.fundacionibercaja.es"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <img
                  src="https://www.fundacionibercaja.es/public/img/logos/logo-fundacion-ibercaja.svg"
                  alt="Fundación Ibercaja"
                  className="h-16 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-gray-700 pt-6">
            <p>&copy; 2025 Summit Huesca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
