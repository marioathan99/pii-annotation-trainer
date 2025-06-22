
import { Link } from 'react-router';
import { typeLabels, typeColors, piiCategories } from '../data/piiCategories';

/**
 * Αρχική σελίδα που παρουσιάζει μια επισκόπηση του εργαλείου και των λειτουργιών του
 */
const Home = () => {
  const totalCategories = piiCategories.length;
  const categoriesByType = piiCategories.reduce((acc, cat) => {
    acc[cat.type] = (acc[cat.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-gray-800 dark:to-gray-700 text-white rounded-2xl p-8 shadow-xl dark:shadow-2xl">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold">PII Annotation Trainer</h1>
          </div>
          <p className="text-xl text-slate-300 dark:text-gray-300 mb-6 leading-relaxed">
            Εκπαιδευτικό εργαλείο για την επισήμανση προσωπικών αναγνωρίσιμων πληροφοριών (PII).
            Μάθετε να αναγνωρίζετε και να επισημαίνετε σωστά πάνω από 76 κατηγορίες PII βασισμένες στις οδηγίες Fractal Phase 3.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/rules"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Ξεκινήστε με τους Κανόνες</span>
            </Link>
            <Link
              to="/practice"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Άμεση Εξάσκηση</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl p-6 border border-slate-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-gray-400">Συνολικές Κατηγορίες</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-gray-100">{totalCategories}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
        </div>

        {Object.entries(typeLabels).map(([type, label]) => (
          <div key={type} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl p-6 border border-slate-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-gray-400">{label}</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-gray-100">{categoriesByType[type] || 0}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${type === 'direct' ? 'bg-red-100 dark:bg-red-900' :
                type === 'strongIndirect' ? 'bg-amber-100 dark:bg-amber-900' : 'bg-blue-100 dark:bg-blue-900'
                }`}>
                <div className={`w-4 h-4 rounded-full ${type === 'direct' ? 'bg-red-500 dark:bg-red-400' :
                  type === 'strongIndirect' ? 'bg-amber-500 dark:bg-amber-400' : 'bg-blue-500 dark:bg-blue-400'
                  }`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PII Types Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl p-8 border border-slate-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-gray-100 mb-6">Τύποι Προσωπικών Πληροφοριών (PII)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(typeLabels).map(([type, label]) => (
            <div key={type} className={`rounded-xl border-2 p-6 ${type === 'direct' ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20' :
              type === 'strongIndirect' ? 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20' :
                'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20'
              }`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${type === 'direct' ? 'bg-red-500' :
                  type === 'strongIndirect' ? 'bg-amber-500' : 'bg-blue-500'
                  }`}>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-gray-100">{label}</h3>
              </div>
              <p className={`text-sm leading-relaxed ${type === 'direct' ? 'text-red-800 dark:text-red-300' :
                type === 'strongIndirect' ? 'text-amber-800 dark:text-amber-300' : 'text-blue-800 dark:text-blue-300'
                }`}>
                {type === 'direct' && 'Πληροφορίες που από μόνες τους μπορούν να ταυτοποιήσουν μοναδικά ένα άτομο.'}
                {type === 'strongIndirect' && 'Πληροφορίες που δεν ταυτοποιούν μοναδικά ένα άτομο από μόνες τους, αλλά που μπορούν να το ταυτοποιήσουν όταν συνδυάζονται με άλλα δεδομένα.'}
                {type === 'weakIndirect' && 'Πληροφορίες που είναι απίθανο να ταυτοποιήσουν ένα άτομο, αλλά οι οποίες παρέχουν περισσότερες «ενδείξεις» για το ποιοι είναι.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Training Path */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl p-8 border border-slate-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-gray-100 mb-6">Διαδρομή Εκπαίδευσης</h2>
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: 'Κανόνες Επισήμανσης',
              description: 'Μάθετε τους βασικούς κανόνες και τις βέλτιστες πρακτικές για την επισήμανση PII',
              link: '/rules',
              icon: 'book',
              color: 'blue'
            },
            {
              step: 2,
              title: 'Κατηγορίες PII',
              description: 'Εξερευνήστε τις 76+ κατηγορίες PII και τα χαρακτηριστικά τους',
              link: '/categories',
              icon: 'grid',
              color: 'purple'
            },
            {
              step: 3,
              title: 'Πρακτική Εξάσκηση',
              description: 'Εξασκηθείτε επισημαίνοντας PII σε πραγματικά παραδείγματα κειμένου',
              link: '/practice',
              icon: 'pencil',
              color: 'green'
            }
          ].map((item) => (
            <Link
              key={item.step}
              to={item.link}
              className="flex items-center p-6 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-600 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 group bg-white dark:bg-gray-800"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 ${item.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800' :
                item.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-800' :
                  'bg-green-100 dark:bg-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-800'
                }`}>
                <span className={`font-bold text-lg ${item.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                  item.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    'text-green-600 dark:text-green-400'
                  }`}>
                  {item.step}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-slate-900 dark:text-gray-100 mb-1">{item.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 dark:text-gray-500 group-hover:text-slate-600 dark:group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Importance Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-gray-800 dark:to-gray-700 text-white rounded-xl p-8 shadow-xl dark:shadow-2xl">
        <h2 className="text-2xl font-bold mb-6">Σημασία της Σωστής Επισήμανσης</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-slate-300 dark:text-gray-300 mb-4 leading-relaxed">
              Η ακριβής επισήμανση των PII είναι κρίσιμη για την προστασία προσωπικών δεδομένων
              και την τήρηση των νομοθετικών απαιτήσεων.
            </p>
            <ul className="space-y-3 text-slate-300 dark:text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full"></div>
                <span>Προστασία προσωπικών δεδομένων και ιδιωτικότητας</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full"></div>
                <span>Συμμόρφωση με νομοθεσίες όπως ο GDPR</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full"></div>
                <span>Αποφυγή κινδύνων υποκλοπής ταυτότητας</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full"></div>
                <span>Διατήρηση της εμπιστοσύνης των χρηστών</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-700 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Fractal Phase 3 Guidelines</h4>
              <p className="text-slate-300 dark:text-gray-300 text-sm">
                Αυτό το εργαλείο βασίζεται στις επίσημες οδηγίες Fractal Phase 3 για την
                επισήμανση κειμένου και περιλαμβάνει όλες τις απαραίτητες κατηγορίες PII.
              </p>
            </div>
            <div className="bg-slate-700 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Διαδραστική Μάθηση</h4>
              <p className="text-slate-300 dark:text-gray-300 text-sm">
                Μάθετε μέσω πρακτικής εξάσκησης με πραγματικά παραδείγματα και
                λάβετε άμεση ανάδραση για τις επισημάνσεις σας.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
