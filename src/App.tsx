import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
