import './PerfilCreador.css';
//
function PerfilCreador({ imagen, nombreCreador, enlacePerfil }) {
  const texto = "Creation of";
  return (
    <article className='perfilCreador'>
      <img className='perfilCreador__imagen' src={imagen} alr={nombreCreador} />
      <div className='perfilCreador__nombre'>{texto}
        <a href={enlacePerfil} className='perfilCreador__nombre__enlace'>
          {nombreCreador} </a>
      </div>
    </article>
  )
}



export default PerfilCreador;
