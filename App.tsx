
import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Filters } from './components/Filters';
import { JobCard } from './components/JobCard';
import { Footer } from './components/Footer';
import { AdBanner } from './components/AdBanner';
import { SponsoredCard } from './components/SponsoredCard';
import { Job, FilterState } from './types';

export default function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    date: 'all',
    type: []
  });

  // Cargar ofertas desde el JSON (El Script Mágico)
  useEffect(() => {
    fetch('ofertas.json')
      .then(response => response.json())
      .then(data => {
        const mappedJobs: Job[] = data.map((item: any, index: number) => ({
          id: `job-${index}-${Date.now()}`,
          title: item.titulo,
          company: "Empresa Local", // Valor por defecto ya que el JSON simplificado no lo tiene
          location: item.ubicacion,
          requirements: item.descripcion ? item.descripcion.split('\n') : [],
          postedAt: item.fecha,
          isNew: index < 3, // Marcamos las primeras 3 como nuevas
          type: 'Full-time',
          contactInfo: item.link,
          logo: `https://picsum.photos/seed/${index}/100/100`
        }));
        setJobs(mappedJobs);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error cargando ofertas.json:", error);
        setLoading(false);
      });
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = job.location.toLowerCase().includes(locationQuery.toLowerCase());
      const matchesType = filters.type.length === 0 || filters.type.includes(job.type);
      return matchesSearch && matchesLocation && matchesType;
    });
  }, [jobs, searchQuery, locationQuery, filters]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      
      <Hero 
        onSearch={setSearchQuery} 
        onLocationChange={setLocationQuery} 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        <div className="mb-10 flex justify-center w-full">
          <AdBanner label="Espacio publicitario (728x90)" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <Filters filters={filters} onFilterChange={setFilters} />
            
            <div className="bg-emerald-50 dark:bg-slate-900/50 border border-emerald-100 dark:border-emerald-900/30 p-6 rounded-xl text-center">
              <h4 className="font-bold text-forest dark:text-emerald-400 mb-2">¿Buscás talento?</h4>
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">Publicá tu oferta de trabajo hoy y encontrá al candidato ideal.</p>
              <button className="w-full bg-white dark:bg-slate-800 border border-primary text-primary hover:bg-primary hover:text-white transition-all py-2.5 px-4 rounded-lg text-sm font-semibold shadow-sm">
                Publicar Empleo
              </button>
            </div>
          </aside>

          <div className="col-span-1 lg:col-span-9 space-y-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {loading ? 'Cargando empleos...' : 'Empleos recientes'}
              </h2>
              <span className="text-sm text-gray-500 dark:text-slate-400">
                {loading ? '---' : `Mostrando ${filteredJobs.length} resultados`}
              </span>
            </div>

            {loading ? (
              <div className="flex flex-col gap-4">
                 {[1,2,3].map(i => (
                   <div key={i} className="h-48 bg-gray-200 dark:bg-slate-900 animate-pulse rounded-xl"></div>
                 ))}
              </div>
            ) : (
              filteredJobs.map((job, index) => (
                <React.Fragment key={job.id}>
                  <JobCard job={job} />
                  {index === 1 && <SponsoredCard />}
                </React.Fragment>
              ))
            )}

            {!loading && filteredJobs.length === 0 && (
              <div className="bg-white dark:bg-slate-900 p-12 rounded-xl text-center border border-dashed border-gray-300 dark:border-slate-800">
                <p className="text-gray-500 dark:text-slate-400">No se encontraron empleos que coincidan con tu búsqueda.</p>
              </div>
            )}

            <div className="flex justify-center mt-10">
              <nav className="inline-flex rounded-md shadow-sm">
                <button className="px-4 py-2 rounded-l-md border border-gray-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-gray-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800">Anterior</button>
                <button className="px-4 py-2 border-t border-b border-gray-300 dark:border-slate-800 bg-primary text-white text-sm font-medium">1</button>
                <button className="px-4 py-2 border-t border-b border-gray-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-gray-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800">2</button>
                <button className="px-4 py-2 border-t border-b border-gray-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-gray-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800">3</button>
                <span className="px-4 py-2 border-t border-b border-gray-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-gray-500">...</span>
                <button className="px-4 py-2 rounded-r-md border border-gray-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-gray-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800">Siguiente</button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
