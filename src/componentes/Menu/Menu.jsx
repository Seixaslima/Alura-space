import React from 'react';
import Inicio from '../../assets/icones/home-ativo.png';
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png';
import maisVistas from '../../assets/icones/mais-vistas-inativo.png';
import novasImagens from '../../assets/icones/novas-inativo.png';
import surpreenda from '../../assets/icones/surpreenda-me-inativo.png';
import style from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={style.menu}>
      <ul className={style.menu__lista}>
        <li className={style.menu__item}>
          <img src={Inicio} alt="" />
          <a href="/">Inicio</a>
        </li>
        <li className={style.menu__item}>
          <img src={maisCurtidas} alt="" />
          <a href="/">Mais Vistas</a>
        </li>
        <li className={style.menu__item}>
          <img src={maisVistas} alt="" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={style.menu__item}>
          <img src={novasImagens} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={style.menu__item}>
          <img src={surpreenda} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
