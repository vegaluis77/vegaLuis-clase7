import './App.css'
import zapas from './assets/imagenes/zapatillaAzul'
import { Articulo } from './components/articulos';

function App() {

  // const Imagen = {
  //   ZAPATILLA_AZUL:
  //     "https://startling-fox-09706d.netlify.app/public/zapatilla.jpg ",
  //   ZAPATILLA_BLANCA: ".\\src\\assets\\zapa2.jpg",
  // };

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
