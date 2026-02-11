
import React from 'react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const handleApplyClick = () => {
    const contact = job.contactInfo || "Información no disponible";
    (window as any).verOferta(job.title, contact);
  };

  return (
    <article className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-lg hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 group job-card">
      <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex gap-2 mb-2">
                {job.isNew && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                    Nuevo
                  </span>
                )}
                {job.badgeText && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary text-white uppercase tracking-wider">
                    {job.badgeText}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-forest dark:text-white group-hover:text-primary transition-colors cursor-pointer">
                {job.title}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-y-1 text-sm text-gray-500 dark:text-slate-400">
                <span className="flex items-center mr-4">
                  <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {job.company}
                </span>
                <span className="flex items-center mr-4">
                  <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {job.type}
                </span>
              </div>
            </div>
            {job.logo && (
              <div className="hidden sm:block flex-shrink-0 ml-4">
                <img alt={`${job.company} logo`} className="w-14 h-14 rounded-xl object-cover border border-gray-100 dark:border-slate-800 shadow-sm" src={job.logo} />
              </div>
            )}
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-bold text-gray-700 dark:text-slate-300 mb-2 uppercase tracking-tight">Requisitos:</h4>
            <ul className="grid grid-cols-1 gap-1.5">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600 dark:text-slate-400">
                  <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {job.contactInfo && (
            <div className="mt-5 p-4 bg-primary/10 dark:bg-emerald-900/10 rounded-lg text-forest dark:text-emerald-400 font-medium border border-primary/20 dark:border-emerald-800/30">
              <p className="text-[10px] uppercase font-bold mb-1 opacity-60">Información de contacto:</p>
              <p className="text-sm md:text-base break-words font-semibold">{job.contactInfo}</p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-50 dark:border-slate-800">
        <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">Publicado {job.postedAt}</span>
        <div className="flex gap-3">
          <button className="flex-1 sm:flex-none py-2 px-5 rounded-lg border border-gray-300 dark:border-slate-700 text-gray-600 dark:text-slate-400 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-gray-400 transition-all">
            Guardar
          </button>
          <button 
            onClick={handleApplyClick}
            className="flex-1 sm:flex-none py-2 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-md shadow-primary/20 transition-all transform active:scale-95"
          >
            Ver Datos de Contacto
          </button>
        </div>
      </div>
    </article>
  );
};
