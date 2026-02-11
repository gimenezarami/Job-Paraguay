
import React from 'react';
import { FilterState } from '../types';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const toggleType = (type: string) => {
    const newTypes = filters.type.includes(type)
      ? filters.type.filter(t => t !== type)
      : [...filters.type, type];
    onFilterChange({ ...filters, type: newTypes });
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <h3 className="font-bold text-lg text-forest dark:text-white">Filtros</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-3 uppercase tracking-wider text-[11px]">Fecha de publicación</label>
          <div className="space-y-2.5">
            {[
              { id: 'all', label: 'Cualquier fecha' },
              { id: '24h', label: 'Últimas 24 horas' },
              { id: 'week', label: 'Última semana' }
            ].map((option) => (
              <label key={option.id} className="flex items-center group cursor-pointer">
                <input 
                  type="radio" 
                  name="date" 
                  checked={filters.date === option.id}
                  onChange={() => onFilterChange({ ...filters, date: option.id })}
                  className="text-primary focus:ring-primary w-4 h-4 border-gray-300 dark:border-slate-700 dark:bg-slate-800" 
                />
                <span className="ml-3 text-sm text-gray-600 dark:text-slate-400 group-hover:text-forest dark:group-hover:text-white transition-colors">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 dark:border-slate-800">
          <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-3 uppercase tracking-wider text-[11px]">Tipo de empleo</label>
          <div className="space-y-2.5">
            {[
              { id: 'Full-time', label: 'Tiempo completo' },
              { id: 'Part-time', label: 'Medio tiempo' },
              { id: 'Remote', label: 'Remoto' }
            ].map((type) => (
              <label key={type.id} className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={filters.type.includes(type.id)}
                  onChange={() => toggleType(type.id)}
                  className="text-primary focus:ring-primary border-gray-300 dark:border-slate-700 dark:bg-slate-800 rounded w-4 h-4" 
                />
                <span className="ml-3 text-sm text-gray-600 dark:text-slate-400 group-hover:text-forest dark:group-hover:text-white transition-colors">{type.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
