
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-1.5 rounded-md">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-forest dark:text-white tracking-tight">JobParaguay</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
              Conectando talento con oportunidades en el corazón de América del Sur. La plataforma líder de empleos en Paraguay.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-forest dark:text-white mb-5 text-sm uppercase tracking-widest">Candidatos</h5>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Buscar Empleo</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Crear CV Profesional</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Blog de Carreras</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Alertas de Empleo</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-forest dark:text-white mb-5 text-sm uppercase tracking-widest">Empresas</h5>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Publicar Empleo</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Base de Datos de CVs</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Planes y Precios</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Soluciones de Reclutamiento</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-forest dark:text-white mb-5 text-sm uppercase tracking-widest">Legal</h5>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Términos y Condiciones</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Política de Privacidad</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cookies</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 dark:text-slate-500">
          <p>© {new Date().getFullYear()} JobParaguay. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
