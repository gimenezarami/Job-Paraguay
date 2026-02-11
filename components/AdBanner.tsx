
import React from 'react';

interface AdBannerProps {
  label: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ label }) => {
  return (
    <div className="w-full max-w-[728px] h-[90px] bg-white dark:bg-slate-900 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer hover:border-primary/20 transition-colors">
      <span className="text-[10px] text-gray-400 dark:text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">Publicidad</span>
      <span className="text-gray-500 dark:text-slate-400 font-medium text-sm">{label}</span>
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};
