
import React from 'react';

export const SponsoredCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-slate-900 p-1 rounded-xl shadow-sm border border-emerald-100/50 dark:border-emerald-900/30">
      <div className="bg-white dark:bg-slate-900 border border-emerald-50 dark:border-emerald-900/20 p-5 rounded-lg shadow-inner">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 text-[10px] px-2 py-0.5 rounded font-bold border border-yellow-200 dark:border-yellow-900/40 uppercase">Patrocinado</span>
          <span className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase tracking-widest">Anuncio</span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3.5 rounded-xl flex-shrink-0 border border-emerald-100 dark:border-emerald-900/30 shadow-sm">
            <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-forest dark:text-white text-lg leading-tight">Curso de Excel Avanzado para Profesionales</h4>
            <p className="text-sm text-gray-600 dark:text-slate-400 mt-1.5">Mejorá tu perfil profesional y accedé a mejores salarios dominando Excel. ¡Descuento especial hoy!</p>
          </div>
          <div className="hidden md:block ml-4">
            <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
              Más información
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
