import Menu from '../../componentes/Menu/Menu';
import Cabecalho from '../../componentes/Cabecalho/Cabecalho';
import Banner from '../../componentes/Banner/Banner';

import stylle from './PaginaInicial.module.scss';
import Rodape from '../../componentes/Rodape/Rodape';
import Galeria from '../../componentes/Galeria/Galeria';
import Populares from '../../componentes/Populares/Populares';

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={stylle.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={stylle.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
