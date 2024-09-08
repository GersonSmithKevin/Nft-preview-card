import './Imagen.css';

function Imagen({ ruta }) {
  return (
    <section className='imagen'>
      <img src={ruta} className='imagen__src'></img>
    </section>
  )
}

export default Imagen;
