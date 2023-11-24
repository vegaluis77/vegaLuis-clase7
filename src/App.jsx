import './App.css'
import zapas from './assets/imagenes/zapatillaAzul.jpg'
import { Articulo } from './components/articulos';

function App() {

  

  return (
    <>
      <h1>PRODUCTOS</h1>
      <section>
        <Articulo
          imagen={zapas}
          nombre="Zapatillas"
          descripcion="Zapatillas adidas Blue"
          precio="45000"
          sku="3543"
          disponible="30"
        />
      </section>
    </>
  );
}

export default App
