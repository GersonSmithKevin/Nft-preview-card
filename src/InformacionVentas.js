import './InformacionVentas.css';

function InformacionVentas({ moneda, monto, tiempo }) {
  return (
    <section className='informacionVentas'>
      <Costo moneda={moneda} monto={monto} />
      <Tiempo tiempo={tiempo} />
    </section>

  )
}


function Costo({ moneda, monto }) {
  return (
    <figure className='costo'>
      <svg className='costo__Icono' width="11" height="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" /></svg>
      <figcaption className='costoPrecio'>
        <span className="costo__Monto">{monto}</span>
        <span class="costo__Moneda">{moneda}</span>
      </figcaption>
    </figure>
  )
}


function Tiempo({ tiempo }) {
  return (
    <figure className='tiempo'>
      <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9" />
      </svg>
      <span className="tiempo__dias">{tiempo}</span>
    </figure>
  )
}
export default InformacionVentas;
