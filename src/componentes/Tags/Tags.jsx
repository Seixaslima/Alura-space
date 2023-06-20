import React from 'react';
import styles from './Tags.module.scss';

export default function Tags({ tags, filtro }) {
  // console.log(tags);
  return (
    <div className={styles.tags}>
      <p>Busque por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map(tag => (
          <li key={tag} onClick={() => filtro(tag)}>
            {tag}
          </li>
        ))}
        <li onClick={() => filtro('')}>Todas</li>
      </ul>
    </div>
  );
}
