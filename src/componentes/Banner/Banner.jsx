import React from 'react';
import stylle from './Banner.module.scss';
import banner from './banner.png';

export default function Banner() {
  return (
    <div className={stylle.banner}>
      <h1>A galeria mais completa do espaço</h1>
      <img src={banner} alt="Imagem da Terra vista do espaço" />
    </div>
  );
}
