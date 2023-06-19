import React from 'react';
import facebook from '../../assets/iconesRedes/facebook.svg';
import instagram from '../../assets/iconesRedes/instagram.svg';
import twitter from '../../assets/iconesRedes/twitter.svg';
import stylle from './Rodape.module.scss';

export default function Rodape() {
  return (
    <footer className={stylle.rodape}>
      <div className={stylle.rodape__redes}>
        <a href="/" target="_blank">
          <img src={facebook} alt="link facebook" />
        </a>
        <a href="/" target="_blank">
          <img src={instagram} alt="link instagram" />
        </a>
        <a href="/" target="_blank">
          <img src={twitter} alt="link twitter" />
        </a>
      </div>
      <a
        href="http://github.com/seixaslima"
        target="_blank"
        rel="noopener noreferrer"
      >
        Desenvolvido por Seixas
      </a>
    </footer>
  );
}
