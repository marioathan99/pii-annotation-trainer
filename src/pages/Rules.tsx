
import { Link } from 'react-router';

/**
 * Σελίδα που παρουσιάζει τους κανόνες επισήμανσης PII
 */
const Rules = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-white via-green-50 to-emerald-100 dark:from-gray-800 dark:via-green-900/20 dark:to-emerald-900/20 shadow-lg dark:shadow-2xl rounded-xl p-8 mb-8 border border-green-200 dark:border-green-800">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white mr-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              Κανόνες Επισήμανσης PII
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Η σωστή επισήμανση των προσωπικών πληροφοριών (PII) απαιτεί ακρίβεια και συνέπεια.
              Παρακάτω παρουσιάζονται οι βασικοί κανόνες που πρέπει να ακολουθείτε.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white mr-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">1. Γενικοί Κανόνες</h3>
        </div>
        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white mr-4 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.44-1.01-5.879-2.621M15 17a2 2 0 11-4 0" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3">Ακριβές Εύρος Επισήμανσης</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Επισημάνετε <strong>μόνο</strong> την ακριβή πληροφορία PII, χωρίς να συμπεριλάβετε το περιβάλλον κείμενο που την περιγράφει.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-red-600 dark:text-red-400 text-lg mr-2">❌</span>
                  <p className="text-red-800 dark:text-red-300 font-bold">Λάθος</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Επισήμανση: <mark className="bg-red-200 dark:bg-red-800 px-2 py-1 rounded">Είμαι 35 ετών</mark></p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-green-600 dark:text-green-400 text-lg mr-2">✓</span>
                  <p className="text-green-800 dark:text-green-300 font-bold">Σωστό</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Επισήμανση: Είμαι <mark className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">35</mark> ετών</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-red-600 dark:text-red-400 text-lg mr-2">❌</span>
                  <p className="text-red-800 dark:text-red-300 font-bold">Λάθος</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Επισήμανση: <mark className="bg-red-200 dark:bg-red-800 px-2 py-1 rounded">Ο αριθμός του λογαριασμού μου είναι 123456789</mark></p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-green-600 dark:text-green-400 text-lg mr-2">✓</span>
                  <p className="text-green-800 dark:text-green-300 font-bold">Σωστό</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Επισήμανση: Ο αριθμός του λογαριασμού μου είναι <mark className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">123456789</mark></p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-red-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white mr-4 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3">Συνέχεια Επισήμανσης</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Μια επισήμανση πρέπει να είναι συνεχής στο κείμενο. Αν υπάρχουν διακοπές, επισημάνετε τα τμήματα ξεχωριστά.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-red-600 dark:text-red-400 text-lg mr-2">❌</span>
                      <p className="text-red-800 dark:text-red-300 font-bold">Λάθος</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Επισήμανση: <mark className="bg-red-200 dark:bg-red-800 px-2 py-1 rounded">Γιώργος είπε ο Παπαδόπουλος</mark></p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-green-600 dark:text-green-400 text-lg mr-2">✓</span>
                      <p className="text-green-800 dark:text-green-300 font-bold">Σωστό</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Επισήμανση: <mark className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">Γιώργος</mark> είπε ο <mark className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">Παπαδόπουλος</mark></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white mr-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">2. Κανόνες ανά Τύπο Πληροφορίας</h3>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-teal-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white mr-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3">Ονόματα και Προσωπικά Στοιχεία</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Επισημάνετε πλήρη ονόματα ως μία ενότητα: <mark className="bg-green-200 px-2 py-1 rounded">Μαρία Παπαδοπούλου</mark></li>
                  <li>Συμπεριλάβετε τίτλους μόνο αν είναι άμεσα συνδεδεμένοι με το όνομα: <mark className="bg-green-200 px-2 py-1 rounded">Δρ. Γιώργος Δημητρίου</mark></li>
                  <li>Επισημάνετε ξεχωριστά ονόματα και επώνυμα αν διαχωρίζονται από άλλο κείμενο</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white mr-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-green-800 dark:text-green-300 mb-3">Αριθμητικά Δεδομένα</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Επισημάνετε μόνο τους αριθμούς για ηλικίες: Είμαι <mark className="bg-green-200 px-2 py-1 rounded">42</mark> ετών</li>
                  <li>Για ημερομηνίες γέννησης, συμπεριλάβετε ολόκληρη την ημερομηνία: <mark className="bg-green-200 px-2 py-1 rounded">15/04/1985</mark> ή <mark className="bg-green-200 px-2 py-1 rounded">15 Απριλίου 1985</mark></li>
                  <li>Για αριθμούς λογαριασμών ή κρατικά αναγνωριστικά, επισημάνετε μόνο τον αριθμό</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 border-2 border-purple-200 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white mr-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-purple-800 mb-3">Στοιχεία Επικοινωνίας</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Επισημάνετε ολόκληρη τη διεύθυνση email: <mark className="bg-green-200 px-2 py-1 rounded">example@domain.com</mark></li>
                  <li>Για τηλεφωνικούς αριθμούς, συμπεριλάβετε κωδικούς χώρας και περιοχής: <mark className="bg-green-200 px-2 py-1 rounded">+30 2101234567</mark></li>
                  <li>Για ταχυδρομικές διευθύνσεις, επισημάνετε την πλήρη διεύθυνση αλλά όχι εισαγωγικές φράσεις όπως "ζω στη διεύθυνση"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-red-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white mr-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-3">Προσωπικές Καταστάσεις και Ταυτότητες</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Επισημάνετε φράσεις που περιγράφουν συγκεκριμένες καταστάσεις: <mark className="bg-green-200 px-2 py-1 rounded">είμαι παντρεμένος</mark>, <mark className="bg-green-200 px-2 py-1 rounded">έχω τρία παιδιά</mark></li>
                  <li>Για θρησκευτικές ή πολιτικές πεποιθήσεις, επισημάνετε την πλήρη φράση που υποδηλώνει την πεποίθηση</li>
                  <li>Για ιατρικές πληροφορίες, συμπεριλάβετε τη συγκεκριμένη κατάσταση ή θεραπεία</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white mr-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">3. Ειδικές Περιπτώσεις</h3>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/20 dark:via-amber-900/20 dark:to-orange-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-white mr-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-3">Περιπτώσεις που ΔΕΝ Επισημαίνονται</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Γενικές αναφορές χωρίς συγκεκριμένα προσωπικά στοιχεία</li>
                  <li>Ονόματα διάσημων προσώπων που αναφέρονται ως δημόσια πρόσωπα (π.χ. πολιτικοί, ηθοποιοί)</li>
                  <li>Πληροφορίες για τρίτα πρόσωπα που δεν είναι αναγνωρίσιμα</li>
                  <li>Γενικές αναφορές σε ομάδες ανθρώπων (π.χ. "όλοι οι φοιτητές")</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white mr-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-3">Αμφισβητούμενες Περιπτώσεις</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  Σε περιπτώσεις όπου δεν είναι σαφές αν κάτι αποτελεί PII, εξετάστε:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Αν η πληροφορία μπορεί να ταυτοποιήσει ένα συγκεκριμένο άτομο</li>
                  <li>Αν είναι συνδυασμένη με άλλες πληροφορίες που επιτρέπουν την ταυτοποίηση</li>
                  <li>Το πλαίσιο της συνολικής δήλωσης</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/"
            className="flex items-center bg-gray-500 dark:bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Επιστροφή στην Αρχική
          </Link>
          <Link
            to="/categories"
            className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Δείτε τις Κατηγορίες PII
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rules;
