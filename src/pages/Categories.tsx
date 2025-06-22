
import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { piiCategories, topicLabels, typeLabels, typeColors } from '../data/piiCategories';
import type { PIIType, PIITopic, PIICategory } from '../types';

/**
 * Σελίδα που παρουσιάζει τις κατηγορίες PII
 */
const Categories = () => {
  const [selectedType, setSelectedType] = useState<PIIType | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<PIITopic | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'card' | 'compact' | 'table'>('compact');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Βελτιωμένο φιλτράρισμα των κατηγοριών
  const filteredCategories = useMemo(() => {
    return piiCategories.filter(category => {
      const matchesType = selectedType === 'all' || category.type === selectedType;
      const matchesTopic = selectedTopic === 'all' || category.topic === selectedTopic;
      const matchesSearch = searchTerm === '' ||
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.examples.some(example => example.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesType && matchesTopic && matchesSearch;
    });
  }, [selectedType, selectedTopic, searchTerm]);

  // Ομαδοποίηση κατηγοριών ανά τύπο
  const categoriesByType = useMemo(() => ({
    direct: filteredCategories.filter(cat => cat.type === 'direct'),
    strongIndirect: filteredCategories.filter(cat => cat.type === 'strongIndirect'),
    weakIndirect: filteredCategories.filter(cat => cat.type === 'weakIndirect')
  }), [filteredCategories]);

  // Στατιστικά
  const stats = useMemo(() => ({
    total: filteredCategories.length,
    direct: categoriesByType.direct.length,
    strongIndirect: categoriesByType.strongIndirect.length,
    weakIndirect: categoriesByType.weakIndirect.length,
    totalCategories: piiCategories.length
  }), [filteredCategories, categoriesByType]);

  const clearFilters = () => {
    setSelectedType('all');
    setSelectedTopic('all');
    setSearchTerm('');
  };

  const renderCategoryCard = (category: PIICategory) => {
    const isExpanded = expandedCategory === category.id;

    return (
      <div
        key={category.id}
        className={`rounded-lg border-2 transition-all duration-300 hover:shadow-md cursor-pointer ${typeColors[category.type]}`}
        onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
      >
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {category.name}
              </h3>
              <p className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">
                {category.nameEn}
              </p>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <span className="text-xs px-2 py-1 rounded-full bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 font-medium text-gray-800 dark:text-gray-200 border border-white dark:border-gray-600 border-opacity-50 dark:border-opacity-50">
                {typeLabels[category.type]}
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2 py-1 rounded-full bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 border border-white dark:border-gray-600 border-opacity-50 dark:border-opacity-50 text-gray-800 dark:text-gray-200">
              {topicLabels[category.topic]}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 border border-white dark:border-gray-600 border-opacity-50 dark:border-opacity-50 text-gray-800 dark:text-gray-200">
              {category.whenToTag === 'always' ? 'Πάντα' : 'Εξαρτάται'}
            </span>
          </div>

          <p className="text-sm text-gray-800 dark:text-gray-200 line-clamp-2 font-medium">
            {category.description}
          </p>

          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-white dark:border-gray-600 border-opacity-50 dark:border-opacity-50">
              <div className="mb-4">
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Κανόνας επισήμανσης:
                </h4>
                <p className="text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 rounded p-2 border border-white dark:border-gray-600 border-opacity-30 dark:border-opacity-30">
                  {category.annotationRule}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Παραδείγματα:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {category.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 text-xs font-medium rounded bg-white dark:bg-gray-800 border border-white dark:border-gray-600 border-opacity-70 dark:border-opacity-70 text-gray-800 dark:text-gray-200 bg-opacity-80 dark:bg-opacity-80"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderTableView = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Κατηγορία
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Τύπος
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Θέμα
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Επισήμανση
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Παραδείγματα
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredCategories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <td className="px-4 py-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {category.name}
                    </div>
                    <div className="text-xs text-purple-600 dark:text-purple-400">
                      {category.nameEn}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${category.type === 'direct' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    category.type === 'strongIndirect' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                    {typeLabels[category.type]}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {topicLabels[category.topic]}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${category.whenToTag === 'always'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                    }`}>
                    {category.whenToTag === 'always' ? 'Πάντα' : 'Εξαρτάται'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm text-gray-900 dark:text-gray-100 max-w-xs truncate">
                    {category.examples.slice(0, 2).join(', ')}
                    {category.examples.length > 2 && '...'}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-white via-purple-50 to-pink-100 dark:from-gray-800 dark:via-purple-900/20 dark:to-pink-900/20 shadow-lg dark:shadow-2xl rounded-xl p-6 mb-6 border border-purple-200 dark:border-purple-800">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white mr-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                Κατηγορίες Προσωπικών Πληροφοριών (PII)
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Εξερευνήστε τις διαφορετικές κατηγορίες PII και μάθετε πώς να τις επισημαίνετε σωστά.
              </p>
            </div>
          </div>

          {/* Στατιστικά */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.total}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">από {stats.totalCategories}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">κατηγορίες</div>
            </div>
          </div>
        </div>

        {/* Φίλτρα και αναζήτηση */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Φίλτρα</h3>
            </div>

            {/* Buttons για view mode και clear filters */}
            <div className="flex items-center gap-2">
              {(selectedType !== 'all' || selectedTopic !== 'all' || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  Καθαρισμός φίλτρων
                </button>
              )}

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('compact')}
                  className={`px-2 py-1 text-xs rounded-md transition-all duration-200 ${viewMode === 'compact'
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-2 py-1 text-xs rounded-md transition-all duration-200 ${viewMode === 'table'
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0V4a1 1 0 011-1h3M3 10V4a1 1 0 011-1h3m4 6V4a1 1 0 011-1h6M3 14v6a1 1 0 001 1h3m4-6v6a1 1 0 001 1h3M3 18v-4h3v4H3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="type-filter" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                Τύπος
              </label>
              <select
                id="type-filter"
                className="w-full p-2 text-sm border border-gray-200 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as PIIType | 'all')}
              >
                <option value="all">Όλοι οι τύποι</option>
                {Object.entries(typeLabels).map(([type, label]) => (
                  <option key={type} value={type}>{label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="topic-filter" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                Θέμα
              </label>
              <select
                id="topic-filter"
                className="w-full p-2 text-sm border border-gray-200 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value as PIITopic | 'all')}
              >
                <option value="all">Όλα τα θέματα</option>
                {Object.entries(topicLabels).map(([topic, label]) => (
                  <option key={topic} value={topic}>{label}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                Αναζήτηση
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Αναζήτηση κατηγοριών, παραδειγμάτων..."
                  className="w-full p-2 text-sm border border-gray-200 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 pl-8 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Στατιστικά φίλτρων */}
          {(selectedType !== 'all' || selectedTopic !== 'all' || searchTerm) && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-1"></span>
                  Άμεσες: {stats.direct}
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-1"></span>
                  Έμμεσες Ισχυρές: {stats.strongIndirect}
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></span>
                  Έμμεσες Ασθενείς: {stats.weakIndirect}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Περιεχόμενο */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 mx-auto w-fit mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.44-1.01-5.879-2.621M15 17a2 2 0 11-4 0m-8.921 3.921a10.001 10.001 0 0017.842 0M6.586 17.414a8 8 0 0010.828 0" />
              </svg>
            </div>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400">Δεν βρέθηκαν κατηγορίες</p>
            <p className="text-gray-400 dark:text-gray-500 mt-1 text-sm">που να ταιριάζουν με τα φίλτρα σας</p>
            {(selectedType !== 'all' || selectedTopic !== 'all' || searchTerm) && (
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Καθαρισμός φίλτρων
              </button>
            )}
          </div>
        ) : viewMode === 'table' ? (
          renderTableView()
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map(renderCategoryCard)}
          </div>
        )}

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/rules"
            className="flex items-center bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all duration-300 font-medium text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Επιστροφή στους Κανόνες
          </Link>
          <Link
            to="/practice"
            className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-medium text-sm shadow-lg"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Δοκιμάστε την Εξάσκηση
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
