
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import AnnotationMarker from '../components/AnnotationMarker';
import AnnotationResult from '../components/AnnotationResult';
import { practiceExercises, annotationExamples } from '../data/examples';
import { piiCategories } from '../data/piiCategories';
import type { UserAnnotation } from '../types';

// Απλή συνάρτηση για δημιουργία μοναδικών αναγνωριστικών
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
};

/**
 * Σελίδα εξάσκησης στην επισήμανση PII
 */
const Practice = () => {
  // Κατάσταση επιλεγμένης άσκησης
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>('');
  const [userAnnotations, setUserAnnotations] = useState<UserAnnotation[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [showCategoryList, setShowCategoryList] = useState(false);

  // Ομαδοποίηση κατηγοριών ανά τύπο για SRT
  const categoriesByType = {
    direct: piiCategories.filter(cat => cat.type === 'direct'),
    strongIndirect: piiCategories.filter(cat => cat.type === 'strongIndirect'),
    weakIndirect: piiCategories.filter(cat => cat.type === 'weakIndirect')
  };

  // Το επιλεγμένο παράδειγμα
  const selectedExercise = practiceExercises.find(ex => ex.id === selectedExerciseId);

  // Επαναφορά των επισημάνσεων όταν αλλάζει η άσκηση
  useEffect(() => {
    setUserAnnotations([]);
    setIsSubmitted(false);
  }, [selectedExerciseId]);

  // Προσθήκη νέας επισήμανσης
  const handleAddAnnotation = (annotation: Omit<UserAnnotation, 'id'>) => {
    setUserAnnotations(prev => [...prev, { ...annotation, id: generateId() }]);
  };

  // Αφαίρεση επισήμανσης
  const handleRemoveAnnotation = (id: string) => {
    setUserAnnotations(prev => prev.filter(ann => ann.id !== id));
  };

  // Υποβολή για έλεγχο
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // Επαναφορά της άσκησης
  const handleReset = () => {
    setUserAnnotations([]);
    setIsSubmitted(false);
  };

  // Επιλογή νέας άσκησης
  const handleNewExercise = () => {
    setSelectedExerciseId('');
    setUserAnnotations([]);
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-800 dark:via-blue-900/20 dark:to-indigo-900/20 shadow-lg dark:shadow-2xl rounded-xl p-8 mb-8 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white mr-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Εξάσκηση Επισήμανσης PII
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Εξασκηθείτε στην επισήμανση προσωπικών πληροφοριών σε παραδείγματα κειμένου.
              Επιλέξτε μια άσκηση, σημειώστε όλες τις PII που εντοπίζετε και ελέγξτε την ακρίβειά σας.
            </p>
          </div>
        </div>

        {!selectedExerciseId ? (
          <div>
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Επιλέξτε μια άσκηση:</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {practiceExercises.map(exercise => (
                <div
                  key={exercise.id}
                  className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedExerciseId(exercise.id)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">Άσκηση {exercise.id}</h4>
                    </div>
                    <span className={`text-xs font-semibold rounded-full px-3 py-1 ${exercise.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300' :
                      exercise.difficulty === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300' :
                        'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300'
                      }`}>
                      {exercise.difficulty === 'easy' ? 'Εύκολο' :
                        exercise.difficulty === 'medium' ? 'Μεσαίο' : 'Δύσκολο'}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {exercise.text.substring(0, 120)}...
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Ξεκινήστε την άσκηση</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <button
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                onClick={() => setShowExamples(!showExamples)}
              >
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 mr-3">
                  <svg className={`w-5 h-5 transition-transform ${showExamples ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                {showExamples ? 'Απόκρυψη παραδειγμάτων' : 'Δείτε παραδείγματα σωστής επισήμανσης'}
              </button>

              {showExamples && (
                <div className="mt-6 space-y-6">
                  {annotationExamples.map(example => (
                    <div key={example.id} className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white mr-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">Παράδειγμα {example.id}</h4>
                      </div>
                      <AnnotationMarker
                        text={example.text}
                        annotations={example.annotations.map(ann => ({ ...ann, id: generateId() }))}
                        onAddAnnotation={() => { }}
                        onRemoveAnnotation={() => { }}
                        readOnly={true}
                      />
                      <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg border border-blue-200 dark:border-blue-700">
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          <span className="font-semibold text-blue-800 dark:text-blue-300">Εξήγηση:</span> {example.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
            {!isSubmitted ? (
              <>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white mr-4">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Άσκηση {selectedExercise?.id}</h3>
                    </div>
                    <span className={`text-sm font-semibold rounded-full px-4 py-2 ${selectedExercise?.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                      selectedExercise?.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                      {selectedExercise?.difficulty === 'easy' ? 'Εύκολο' :
                        selectedExercise?.difficulty === 'medium' ? 'Μεσαίο' : 'Δύσκολο'}
                    </span>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white mr-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300">Οδηγίες:</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li className="pl-2">Επιλέξτε το κείμενο που αποτελεί προσωπική πληροφορία (PII)</li>
                      <li className="pl-2">Επιλέξτε την κατάλληλη κατηγορία για την επισήμανση</li>
                      <li className="pl-2">Μην συμπεριλαμβάνετε περιττό κείμενο στις επισημάνσεις σας</li>
                      <li className="pl-2">Προσέξτε το ακριβές εύρος επισήμανσης (π.χ. για ηλικία, μόνο τον αριθμό)</li>
                      <li className="pl-2">Όταν τελειώσετε, υποβάλετε τις επισημάνσεις σας για έλεγχο</li>
                    </ol>
                  </div>

                  {/* Category Reference for SRT */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
                    <button
                      className="flex items-center justify-between w-full text-left text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors font-medium"
                      onClick={() => setShowCategoryList(!showCategoryList)}
                    >
                      <div className="flex items-center">
                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 mr-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <span>Αναφορά Κατηγοριών PII για SRT</span>
                      </div>
                      <svg
                        className={`w-5 h-5 transition-transform ${showCategoryList ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {showCategoryList && (
                      <div className="mt-6 space-y-6">
                        {/* Direct PII */}
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                          <h4 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3 flex items-center">
                            <div className="w-3 h-3 bg-red-500 dark:bg-red-400 rounded-full mr-2"></div>
                            Direct PII (Άμεση PII)
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {categoriesByType.direct.map(category => (
                              <div key={category.id} className="bg-white dark:bg-gray-800 border border-red-200 dark:border-red-700 rounded-lg p-3">
                                <div className="text-sm font-semibold text-red-700 dark:text-red-300 mb-1">
                                  {category.nameEn}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                  {category.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                                  {category.description.substring(0, 80)}...
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Strong Indirect PII */}
                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                          <h4 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-3 flex items-center">
                            <div className="w-3 h-3 bg-orange-500 dark:bg-orange-400 rounded-full mr-2"></div>
                            Strong Indirect PII (Ισχυρή Έμμεση PII)
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {categoriesByType.strongIndirect.map(category => (
                              <div key={category.id} className="bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 rounded-lg p-3">
                                <div className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-1">
                                  {category.nameEn}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                  {category.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                                  {category.description.substring(0, 80)}...
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Weak Indirect PII */}
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                          <h4 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center">
                            <div className="w-3 h-3 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-2"></div>
                            Weak Indirect PII (Αδύναμη Έμμεση PII)
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {categoriesByType.weakIndirect.map(category => (
                              <div key={category.id} className="bg-white dark:bg-gray-800 border border-yellow-200 dark:border-yellow-700 rounded-lg p-3">
                                <div className="text-sm font-semibold text-yellow-700 dark:text-yellow-300 mb-1">
                                  {category.nameEn}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                  {category.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                                  {category.description.substring(0, 80)}...
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                    <AnnotationMarker
                      text={selectedExercise?.text || ''}
                      annotations={userAnnotations}
                      onAddAnnotation={handleAddAnnotation}
                      onRemoveAnnotation={handleRemoveAnnotation}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    className="flex items-center bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 font-medium"
                    onClick={handleNewExercise}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Επιλογή Άλλης Άσκησης
                  </button>

                  <button
                    className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg"
                    onClick={handleSubmit}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Υποβολή για Έλεγχο
                  </button>
                </div>
              </>
            ) : (
              <AnnotationResult
                userAnnotations={userAnnotations}
                correctAnnotations={selectedExercise?.correctAnnotations || []}
                onReset={handleReset}
              />
            )}
          </div>
        )}
      </div>

      {!selectedExerciseId && (
        <div className="flex justify-between items-center mt-8">
          <Link
            to="/categories"
            className="flex items-center bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Επιστροφή στις Κατηγορίες
          </Link>

          <Link
            to="/"
            className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Επιστροφή στην Αρχική
          </Link>
        </div>
      )}
    </div>
  );
};

export default Practice;
