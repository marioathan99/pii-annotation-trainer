
import { useState } from 'react';
import { piiCategories, typeColors } from '../data/piiCategories';
import type { Annotation, UserAnnotation } from '../types';

/**
 * Props για το συστατικό AnnotationMarker
 */
interface AnnotationMarkerProps {
  text: string;
  annotations: UserAnnotation[];
  onAddAnnotation: (annotation: Omit<UserAnnotation, 'id'>) => void;
  onRemoveAnnotation: (id: string) => void;
  readOnly?: boolean;
}

/**
 * Συστατικό που επιτρέπει την επισήμανση κειμένου με PII κατηγορίες
 */
const AnnotationMarker: React.FC<AnnotationMarkerProps> = ({
  text,
  annotations,
  onAddAnnotation,
  onRemoveAnnotation,
  readOnly = false
}) => {
  const [selection, setSelection] = useState<{ start: number, end: number, text: string } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Ομαδοποίηση κατηγοριών ανά τύπο
  const categoriesByType = {
    direct: piiCategories.filter(cat => cat.type === 'direct'),
    strongIndirect: piiCategories.filter(cat => cat.type === 'strongIndirect'),
    weakIndirect: piiCategories.filter(cat => cat.type === 'weakIndirect')
  };

  // Διαχείριση επιλογής κειμένου
  const handleTextSelection = () => {
    if (readOnly) return;

    const selection = window.getSelection();
    if (!selection || selection.toString().trim() === '') {
      setSelection(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const container = document.getElementById('annotation-text');
    if (!container || !container.contains(range.commonAncestorContainer)) return;

    const containerRange = document.createRange();
    containerRange.selectNodeContents(container);

    const rangeStart = range.startOffset;
    const rangeEnd = range.endOffset;

    if (rangeStart === rangeEnd) {
      setSelection(null);
      return;
    }

    setSelection({
      start: rangeStart,
      end: rangeEnd,
      text: selection.toString()
    });
  };

  // Προσθήκη νέας επισήμανσης
  const addAnnotation = () => {
    if (!selection || !selectedCategory) return;

    onAddAnnotation({
      text: selection.text,
      category: selectedCategory,
      start: selection.start,
      end: selection.end
    });

    setSelection(null);
    setSelectedCategory('');
  };

  // Δημιουργία του κειμένου με τις επισημάνσεις
  const renderAnnotatedText = () => {
    if (annotations.length === 0) {
      return <p id="annotation-text">{text}</p>;
    }

    // Ταξινόμηση των επισημάνσεων με βάση τη θέση έναρξης
    const sortedAnnotations = [...annotations].sort((a, b) => a.start - b.start);

    // Έλεγχος για επικαλυπτόμενες επισημάνσεις
    for (let i = 1; i < sortedAnnotations.length; i++) {
      if (sortedAnnotations[i].start < sortedAnnotations[i - 1].end) {
        return (
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="p-2 rounded-lg bg-red-500 text-white mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-red-800">Σφάλμα Επισημάνσεων</h4>
            </div>
            <p className="text-red-700 leading-relaxed">
              Υπάρχουν επικαλυπτόμενες επισημάνσεις. Παρακαλώ αφαιρέστε μία από αυτές πριν συνεχίσετε.
            </p>
          </div>
        );
      }
    }

    // Δημιουργία των τμημάτων κειμένου
    let lastEnd = 0;
    const segments = [];

    sortedAnnotations.forEach((annotation, index) => {
      // Προσθήκη του μη επισημασμένου κειμένου πριν από την τρέχουσα επισήμανση
      if (annotation.start > lastEnd) {
        segments.push(
          <span key={`text-${index}`}>
            {text.substring(lastEnd, annotation.start)}
          </span>
        );
      }

      // Εύρεση της κατηγορίας για χρωματισμό
      const category = piiCategories.find(c => c.id === annotation.category);
      const colorClass = category ? typeColors[category.type] : 'bg-gray-200 border-gray-500';

      // Προσθήκη της επισημασμένης περιοχής
      segments.push(
        <span
          key={`annotation-${annotation.id}`}
          className={`relative group ${colorClass} px-2 py-1 rounded-md cursor-pointer transition-all duration-300 hover:shadow-md border-2 border-opacity-50`}
        >
          {text.substring(annotation.start, annotation.end)}

          {!readOnly && (
            <button
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
              onClick={() => onRemoveAnnotation(annotation.id)}
            >
              ×
            </button>
          )}

          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white shadow-lg rounded-lg p-2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            {category?.name || annotation.category}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </span>
        </span>
      );

      lastEnd = annotation.end;
    });

    // Προσθήκη του υπόλοιπου κειμένου
    if (lastEnd < text.length) {
      segments.push(
        <span key="text-end">
          {text.substring(lastEnd)}
        </span>
      );
    }

    return <p id="annotation-text">{segments}</p>;
  };

  return (
    <div className="annotation-marker">
      <div
        className={`border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm text-gray-900 dark:text-gray-100 ${!readOnly ? 'cursor-text hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300' : ''}`}
        onMouseUp={handleTextSelection}
      >
        {renderAnnotatedText()}
      </div>

      {selection && !readOnly && (
        <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300">
              Επιλεγμένο κείμενο: "<span className="text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 px-2 py-1 rounded border">{selection.text}</span>"
            </h4>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              Επιλέξτε κατηγορία PII:
            </label>

            {/* Direct PII Dropdown */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h5 className="text-sm font-bold text-red-800 dark:text-red-300 mb-2 flex items-center">
                <div className="w-3 h-3 bg-red-500 dark:bg-red-400 rounded-full mr-2"></div>
                Direct PII (Άμεση PII)
              </h5>
              <select
                className="w-full p-3 border-2 border-red-200 dark:border-red-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">-- Select Direct PII Category --</option>
                {categoriesByType.direct.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.nameEn} - {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Strong Indirect PII Dropdown */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <h5 className="text-sm font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                <div className="w-3 h-3 bg-orange-500 dark:bg-orange-400 rounded-full mr-2"></div>
                Strong Indirect PII (Ισχυρή Έμμεση PII)
              </h5>
              <select
                className="w-full p-3 border-2 border-orange-200 dark:border-orange-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">-- Select Strong Indirect PII Category --</option>
                {categoriesByType.strongIndirect.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.nameEn} - {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Weak Indirect PII Dropdown */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h5 className="text-sm font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
                <div className="w-3 h-3 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-2"></div>
                Weak Indirect PII (Αδύναμη Έμμεση PII)
              </h5>
              <select
                className="w-full p-3 border-2 border-yellow-200 dark:border-yellow-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">-- Select Weak Indirect PII Category --</option>
                {categoriesByType.weakIndirect.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.nameEn} - {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              className="flex items-center bg-gray-500 text-white py-2 px-5 rounded-lg hover:bg-gray-600 transition-all duration-300 font-medium"
              onClick={() => setSelection(null)}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Ακύρωση
            </button>
            <button
              className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg disabled:from-blue-300 disabled:to-indigo-300 disabled:cursor-not-allowed"
              disabled={!selectedCategory}
              onClick={addAnnotation}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Προσθήκη Επισήμανσης
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnotationMarker;
