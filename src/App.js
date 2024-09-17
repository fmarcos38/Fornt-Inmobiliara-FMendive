import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footbar from './components/Footbar';
import Card from './components/Card';
import DetalleProp from './pages/DetallePropiedad';
import PropsVenta from './pages/PropsVenta';
import PropsAlquiler from './pages/PropsAlquiler';
import Contactanos from './pages/Contactanos';
import Nosotros from './pages/Nosotros';
import ListaFavoritos from './pages/Favoritos';
import { InmobiliariaProvider } from './Context';
import ModalVideo from './components/ModalVideo';
import Emprendimientos from './pages/Emprendimientos';

function App() {
  return (
    <InmobiliariaProvider>
      <div className="App">
        {/*--------- navbar------ */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detalle/:id' element={<DetalleProp />} />
          <Route path='/venta' element={<PropsVenta />} />
          <Route path='/alquiler' element={<PropsAlquiler />} />
          <Route path='/emprendimientos' element={<Emprendimientos />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contactanos />} />
          <Route path='/favoritos' element={<ListaFavoritos />} />

          {/* rutas para el desarrollador */}
          <Route path='/card' element={<Card />} />
          <Route path='/modalVideo' element={<ModalVideo/>} />
        </Routes>

        <Footbar />
      </div>
    </InmobiliariaProvider>
  );
}

export default App;
