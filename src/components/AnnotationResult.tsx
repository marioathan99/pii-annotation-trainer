
import { piiCategories } from '../data/piiCategories';
import type { Annotation, UserAnnotation } from '../types';

/**
 * Props για το συστατικό AnnotationResult
 */
interface AnnotationResultProps {
  userAnnotations: UserAnnotation[];
  correctAnnotations: Annotation[];
  onReset: () => void;
}

/**
 * Συστατικό που παρουσιάζει τα αποτελέσματα της επισήμανσης PII
 * Συγκρίνει τις επισημάνσεις του χρήστη με τις σωστές
 */
const AnnotationResult: React.FC<AnnotationResultProps> = ({
  userAnnotations,
  correctAnnotations,
  onReset
}) => {
  // Υπολογισμός ακρίβειας, ανάκλησης και F1 score
  const truePositives = userAnnotations.filter(ua => {
    return correctAnnotations.some(ca => 
      ua.start === ca.start && ua.end === ca.end && ua.category === ca.category
    );
  }).length;
  
  const falsePositives = userAnnotations.length - truePositives;
  const falseNegatives = correctAnnotations.length - truePositives;
  
  const precision = userAnnotations.length > 0 ? truePositives / userAnnotations.length : 0;
  const recall = correctAnnotations.length > 0 ? truePositives / correctAnnotations.length : 0;
  const f1Score = precision + recall > 0 ? 2 * precision * recall / (precision + recall) : 0;
  
  // Εύρεση των επισημάνσεων που λείπουν
  const missingAnnotations = correctAnnotations.filter(ca => {
    return !userAnnotations.some(ua => 
      ua.start === ca.start && ua.end === ca.end && ua.category === ca.category
    );
  });
  
  // Εύρεση των λανθασμένων επισημάνσεων
  const incorrectAnnotations = userAnnotations.filter(ua => {
    return !correctAnnotations.some(ca => 
      ua.start === ca.start && ua.end === ca.end && ua.category === ca.category
    );
  });
  
  // Παρουσίαση του ποσοστού επιτυχίας
  const scorePercentage = Math.round(f1Score * 100);
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Αποτελέσματα Επισήμανσης</h3>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Ακρίβεια:</span>
          <span className="font-semibold">{Math.round(precision * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${Math.round(precision * 100)}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Ανάκληση:</span>
          <span className="font-semibold">{Math.round(recall * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-600 h-2 rounded-full" 
            style={{ width: `${Math.round(recall * 100)}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Συνολική Βαθμολογία (F1):</span>
          <span className="font-semibold">{scorePercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${
              scorePercentage >= 80 ? 'bg-green-600' : 
              scorePercentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
            }`} 
            style={{ width: `${scorePercentage}%` }}
          ></div>
        </div>
      </div>
      
      {missingAnnotations.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-red-600 mb-2">Επισημάνσεις που λείπουν:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {missingAnnotations.map((annotation, index) => {
              const category = piiCategories.find(c => c.id === annotation.category);
              return (
                <li key={`missing-${index}`}>
                  "{annotation.text}" - {category?.name || annotation.category}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      
      {incorrectAnnotations.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-red-600 mb-2">Λανθασμένες επισημάνσεις:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {incorrectAnnotations.map((annotation, index) => {
              const category = piiCategories.find(c => c.id === annotation.category);
              return (
                <li key={`incorrect-${index}`}>
                  "{annotation.text}" - {category?.name || annotation.category}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      
      <div className="mt-8">
        <h4 className="font-semibold mb-2">Συμβουλές για βελτίωση:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {scorePercentage < 100 && (
            <>
              {precision < 1 && (
                <li>Να είστε πιο προσεκτικοί στο ακριβές εύρος των επισημάνσεων. Μην συμπεριλαμβάνετε περιττό κείμενο.</li>
              )}
              {recall < 1 && (
                <li>Προσπαθήστε να εντοπίσετε όλες τις προσωπικές πληροφορίες στο κείμενο.</li>
              )}
              {incorrectAnnotations.length > 0 && (
                <li>Επανεξετάστε τις κατηγορίες PII και τους κανόνες επισήμανσης.</li>
              )}
            </>
          )}
          {scorePercentage === 100 && (
            <li className="text-green-600">Εξαιρετική δουλειά! Εντοπίσατε και επισημάνατε σωστά όλες τις PII!</li>
          )}
        </ul>
      </div>
      
      <button 
        className="mt-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors w-full"
        onClick={onReset}
      >
        Δοκιμάστε Ξανά
      </button>
    </div>
  );
};

export default AnnotationResult;
