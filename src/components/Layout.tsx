
import { Outlet, Link, useLocation } from 'react-router'
import ThemeToggle from './ThemeToggle';

/**
 * Συστατικό διάταξης που παρέχει ένα συνεπές περιβάλλον για όλες τις σελίδες
 * Περιλαμβάνει κεφαλίδα, υποσέλιδο και πλοήγηση
 */
export default function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-slate-800 text-slate-100 border-b-2 border-blue-400' : 'text-slate-300 hover:text-slate-100 hover:bg-slate-700';
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Professional Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-gray-800 dark:to-gray-700 text-white shadow-lg border-b border-slate-700 dark:border-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">PII Annotation Trainer</h1>
                <p className="text-sm text-slate-300">Επισήμανση Προσωπικών Πληροφοριών</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="text-right">
                <div className="text-sm text-slate-300">Training Environment</div>
                <div className="text-xs text-slate-400">76+ Categories • Fractal Phase 3</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Navigation */}
      <nav className="bg-slate-800 dark:bg-gray-800 shadow-sm border-b border-slate-700 dark:border-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1">
            <Link
              to="/"
              className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 border-transparent ${isActive('/')}`}
            >
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Αρχική</span>
              </span>
            </Link>
            <Link
              to="/rules"
              className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 border-transparent ${isActive('/rules')}`}
            >
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Κανόνες</span>
              </span>
            </Link>
            <Link
              to="/categories"
              className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 border-transparent ${isActive('/categories')}`}
            >
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Κατηγορίες</span>
              </span>
            </Link>
            <Link
              to="/practice"
              className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 border-transparent ${isActive('/practice')}`}
            >
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Εξάσκηση</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8 text-gray-900 dark:text-gray-100">
        <Outlet />
      </main>

      {/* Professional Footer */}
      <footer className="bg-slate-900 dark:bg-gray-800 text-slate-400 dark:text-gray-300 border-t border-slate-700 dark:border-gray-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <p className="text-sm">© 2025 PII Annotation Trainer</p>
              <span className="text-slate-600">•</span>
              <p className="text-sm">Εκπαιδευτικό Εργαλείο</p>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span className="px-2 py-1 bg-slate-800 rounded text-slate-300">v2.0</span>
              <span className="text-slate-500">Fractal Phase 3 Guidelines</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
