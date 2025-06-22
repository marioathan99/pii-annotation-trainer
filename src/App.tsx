
import { HashRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Categories from './pages/Categories'
import Practice from './pages/Practice'
import Layout from './components/Layout'

/**
 * Κύρια εφαρμογή που ορίζει τις διαδρομές και τη δομή της ιστοσελίδας
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rules" element={<Rules />} />
          <Route path="categories" element={<Categories />} />
          <Route path="practice" element={<Practice />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
