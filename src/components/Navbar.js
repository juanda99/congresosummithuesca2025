import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('')

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Programa', href: '#programa' },
    { name: 'Ponentes', href: '#ponentes' },
    { name: 'Jornada Previa', href: '#jornada-previa' },
    { name: 'Información Adicional', href: '#informacion' },
    { name: 'Materiales', href: '#materiales' },
    { name: 'Multimedia', href: '#multimedia' },
    { name: 'Conclusiones', href: '#conclusiones' },
  ]

  const handleMenuClick = (itemName) => {
    setActiveItem(itemName)
    setIsOpen(false)
    setTimeout(() => setActiveItem(''), 600)
  }

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Título */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Summit Huesca 2025"
              className="h-10 w-auto transition-transform duration-300 hover:scale-110"
            />
            <h1 className="text-white text-xl font-bold">Summit Huesca 2025</h1>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleMenuClick(item.name)}
                className={`text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg relative overflow-hidden group ${
                  activeItem === item.name ? 'animate-pulse bg-blue-700' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0"></span>
              </a>
            ))}
          </div>

          {/* Botón hamburguesa Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-blue-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 hover:scale-110"
              aria-label="Menú"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile con animación */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleMenuClick(item.name)}
              className={`text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:translate-x-2 hover:shadow-lg transform ${
                isOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              } ${activeItem === item.name ? 'bg-blue-600 scale-105' : ''}`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                animationDelay: `${index * 50}ms`,
              }}
            >
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span>{item.name}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
