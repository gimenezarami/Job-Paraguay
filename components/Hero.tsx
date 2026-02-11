
import React from 'react';

interface HeroProps {
  onSearch: (query: string) => void;
  onLocationChange: (location: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onLocationChange }) => {
  return (
    <section className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold text-forest dark:text-white leading-tight">
            Tu próximo desafío profesional empieza acá
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-lg">
            Miles de oportunidades laborales en todo el Paraguay.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 ring-4 ring-primary/5">
          <form className="flex flex-col md:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                onChange={(e) => onSearch(e.target.value)}
                className="block w-full pl-10 pr-3 py-3.5 border-none bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white rounded-lg leading-5 placeholder-gray-400 focus:ring-2 focus:ring-primary sm:text-sm transition-all" 
                placeholder="Cargo, empresa o palabra clave (ej. Contador)" 
                type="text"
              />
            </div>
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input 
                onChange={(e) => onLocationChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-3.5 border-none bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white rounded-lg leading-5 placeholder-gray-400 focus:ring-2 focus:ring-primary sm:text-sm transition-all" 
                placeholder="Ciudad o Departamento (ej. Asunción)" 
                type="text"
              />
            </div>
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-10 rounded-lg shadow-md transition-all active:scale-95 flex items-center justify-center gap-2" type="submit">
              Buscar
            </button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
          <span className="dark:text-slate-400">Tendencias:</span>
          {['Ventas', 'Administración', 'Informática', 'Atención al Cliente'].map((tag) => (
            <a key={tag} className="text-forest dark:text-emerald-400 hover:text-primary underline decoration-primary/30 underline-offset-4" href="#">{tag}</a>
          ))}
        </div>
      </div>
    </section>
  );
};
