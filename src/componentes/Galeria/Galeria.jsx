import React, { useState } from 'react';
import Tags from '../Tags/Tags';
import styles from './Galeria.module.scss';
import fotos from './fotos.json';
import Cards from './Cards/Cards';

export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map(foto => foto.tag))];

  function filtraFotos(tag) {
    let fotosFiltradas;
    tag === ''
      ? (fotosFiltradas = fotos)
      : (fotosFiltradas = fotos.filter(foto => foto.tag === tag));
    setItens(fotosFiltradas);
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtro={filtraFotos} />
      <Cards itens={itens} styles={styles} />
    </section>
  );
}
