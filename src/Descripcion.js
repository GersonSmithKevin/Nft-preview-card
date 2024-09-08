import './Descripcion.css';
//
function Descripcion({ nombre, identificador, descripcion }) {
  return (
    <figcaption className='descripcion'>
      <h3 className='descripcion__nombre'>{nombre}<strong className='descripcion__identificador'>{identificador}</strong></h3>
      <p className='descripcion__contenido'>{descripcion}</p>
    </figcaption>
  )
}



export default Descripcion;
