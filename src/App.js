import './App.css';
import { Navbar } from './components/Navbar';
import { Products } from './Pages/Products';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { FoodCard } from './components/FoodCard';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
    <div className='App bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Products />} />
        <Route path='/menu/:category' element={<Products />} />
        <Route path='/menu/:category/:embedId' element={<FoodCard />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
