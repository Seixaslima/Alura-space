import React from 'react';
import favorito from './favorito.png';
import open from './open.png';

export default function Card({ item, styles }) {
  return (
    <li className={styles.galeria__card} classNama={styles.galeria__card}>
      <img
        src={item.imagem}
        alt={item.titulo}
        className={styles.galeria__imagem}
      />
      <p className={styles.galeria__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={favorito} alt="Botao de coração ou favorito" />
          <img src={open} alt="seta de espanção" />
        </span>
      </div>
    </li>
  );
}
