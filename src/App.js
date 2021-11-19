import './App.css';
import { Navbar } from './components/Navbar';
import { Products } from './Pages/Products';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { ProductCard } from './components/ProductCard';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:embedId' element={<ProductCard />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
