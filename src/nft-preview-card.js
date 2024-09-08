import React from 'react';
import ReactDOM from 'react-dom/client';
import './nft-preview-card.css';
import InformacionVentas from './InformacionVentas';
import PerfilCreador from './PerfilCreador';
import Descripcion from './Descripcion';
import Imagen from './Imagen';


function NftPreviewCard() {
  return (
    <section className='nftPreviewCard'>
      <Imagen ruta='image-equilibrium.jpg' />
      <Descripcion
        nombre='Equilibrium '
        identificador=' #3429'
        descripcion='Our Equilibrium collection promotes balance and calm'
      />
      <InformacionVentas
        moneda='ETH'
        monto='0.041'
        tiempo='3 day left'
      />
      <PerfilCreador
        imagen='https://unavatar.io/kikobeats'
        nombreCreador=' Gerson Camacho '
        enlacePerfil='https://github.com/GersonSmithKevin'
      />

    </section>
  )

}

export default NftPreviewCard;
