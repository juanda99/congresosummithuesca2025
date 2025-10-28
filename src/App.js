import React from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Congreso Summit Huesca 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            El evento más importante del año
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
            Inscríbete Ahora
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Video Promocional
          </h2>
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video className="w-full h-auto" controls>
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
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
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
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 text-center">
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
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
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
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((speaker) => (
              <div
                key={speaker}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:transform hover:scale-105 transition duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Ponente {speaker}</h3>
                <p className="text-gray-600 text-sm">Experto en su campo</p>
              </div>
            ))}
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
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Summit Huesca. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
