
import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Filters } from './components/Filters';
import { JobCard } from './components/JobCard';
import { Footer } from './components/Footer';
import { AdBanner } from './components/AdBanner';
import { SponsoredCard } from './components/SponsoredCard';
import { Job, FilterState } from './types';

const MOCK_JOBS: Job[] = [
  {
    id: 'vendedor-001',
    title: 'Vendedor Técnico Industrial',
    company: 'Importante Empresa del Sector',
    location: 'Asunción y Alrededores',
    requirements: [
      'Formación comercial o técnica (Electromecánica, Industrial o afines)',
      'Conocimientos técnicos aplicados a la venta',
      'Experiencia en ventas, negociación y gestión comercial',
      'Conocimiento en metalúrgica, carpintería, metálica o ferretería industrial',
      'Elaboración y seguimiento de reportes de ventas',
      'Manejo de herramientas informáticas',
      'Movilidad propia (moto)'
    ],
    postedAt: 'hace unos momentos',
    isNew: true,
    badgeText: 'BÚSQUEDA ACTIVA',
    type: 'Full-time',
    contactInfo: 'recruitmentt2025@hotmail.com o al 0981566148',
    logo: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '1',
    title: 'Contador/a',
    company: 'Confidencial',
    location: 'Luque, Central',
    requirements: [
      'Egresado de la carrera de Contabilidad',
      'Mínimo 2 años de experiencia comprobable',
      'Manejo de Excel Avanzado'
    ],
    postedAt: 'hace 2 horas',
    isNew: true,
    type: 'Full-time',
    logo: 'https://picsum.photos/seed/acc/100/100'
  },
  {
    id: '2',
    title: 'Jefe/a de Logística',
    company: 'Logística Express S.A.',
    location: 'Asunción',
    requirements: [
      'Licenciado en Administración o Ingeniería Comercial',
      '2 años de experiencia en rubro logístico'
    ],
    postedAt: 'hace 5 horas',
    isNew: false,
    type: 'Full-time',
    logo: 'https://picsum.photos/seed/log/100/100'
  },
  {
    id: '3',
    title: 'Asesor/a Legal',
    company: 'Estudio Jurídico Díaz & Asoc.',
    location: 'Fernando de la Mora',
    requirements: [
      'Abogado/a Matriculado/a',
      '3 años de experiencia en litigios civiles',
      'Conocimiento de portal DNCP'
    ],
    postedAt: 'ayer',
    isNew: false,
    type: 'Full-time',
    logo: 'https://picsum.photos/seed/law/100/100'
  },
  {
    id: '4',
    title: 'Desarrollador React Senior',
    company: 'TechSolutions PY',
    location: 'Remoto',
    requirements: [
      '5+ años de experiencia con React y TypeScript',
      'Inglés avanzado',
      'Conocimiento de metodologías ágiles'
    ],
    postedAt: 'hace 1 día',
    isNew: true,
    type: 'Remote',
    logo: 'https://picsum.photos/seed/tech/100/100'
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    date: 'all',
    type: []
  });

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = job.location.toLowerCase().includes(locationQuery.toLowerCase());
      const matchesType = filters.type.length === 0 || filters.type.includes(job.type);
      return matchesSearch && matchesLocation && matchesType;
    });
  }, [searchQuery, locationQuery, filters]);

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
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Empleos recientes</h2>
              <span className="text-sm text-gray-500 dark:text-slate-400">
                Mostrando {filteredJobs.length} resultados
              </span>
            </div>

            {filteredJobs.map((job, index) => (
              <React.Fragment key={job.id}>
                <JobCard job={job} />
                {index === 1 && <SponsoredCard />}
              </React.Fragment>
            ))}

            {filteredJobs.length === 0 && (
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
