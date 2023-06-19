import Menu from '../../componentes/Menu/Menu';
import Cabecalho from '../../componentes/Cabecalho/Cabecalho';
import Banner from '../../componentes/Banner/Banner';

import stylle from './PaginaInicial.module.scss';
import Rodape from '../../componentes/Rodape/Rodape';

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main className={stylle.principal}>
        <Menu />
        <Banner />
      </main>
      <Rodape />
    </>
  );
}
