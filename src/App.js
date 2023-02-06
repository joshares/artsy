import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Auction from './pages/Auction';
import Market from './pages/Marketplace';
import Drops from './pages/Drops';
import SingleProduct from './pages/SingleProduct';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Payments from './pages/Payment';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='artsy' element={<Home/>}/>
        <Route path='auction' element={<Auction/>}/>
        <Route path='market' element={<Market/>}/>
        <Route path='market/:id' element={<SingleProduct/>}/>
        <Route path='drops' element={<Drops/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='payment' element={<Payments/>}/>
      </Routes>
    </Router>
  );
}

export default App;
