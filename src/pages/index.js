import Head from 'next/head';
import Rodape from '../components/Footer';
import Topo from '../components/Navbar';
import styles from '../styles/Page.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Mundo dos Bichos </title>
      </Head>

      <Topo />

      <div className={styles.home}>
          <p >Nosso site é um mundo encantado onde você mergulhará na riqueza e diversidade do reino animal através das próprias palavras dos animais. De leões majestosos a pequenos insetos, cada criatura tem a oportunidade de compartilhar suas características únicas, hábitos interessantes e curiosidades surpreendentes diretamente com você.
          </p>
          <h3 className={styles.estilinho}>O que oferecemos:</h3>
          <h3>Narrativas Autênticas</h3><p> Permitimos que os animais "falem" por si mesmos. Suas histórias são contadas de forma autêntica e envolvente, proporcionando uma perspectiva única sobre suas vidas e comportamentos.</p>
          <h3>Diversidade Animal:</h3><p>De mamíferos a répteis, aves, peixes e insetos, oferecemos uma ampla gama de autodescrições para que você possa conhecer e se encantar com a variedade da vida animal.</p>
          <h3>Conhecimento e Educação:</h3><p>Além do entretenimento, nosso site é uma fonte valiosa de aprendizado. Descubra fatos interessantes, comportamentos instigantes e adaptações surpreendentes que cada animal compartilha.</p>
          <h3>Experiência Interativa:</h3><p>Oferecemos uma experiência imersiva e interativa. Permitimos que os visitantes votem nas autodescrições mais cativantes e até mesmo enviem perguntas para os animais!</p>
          <h3>Comunidade Engajada:</h3><p>Junte-se a uma comunidade apaixonada por animais, compartilhe suas próprias experiências e aprenda com outras pessoas que também se encantam com o reino animal.</p>
          <p>Explore, descubra e se maravilhe com as narrativas incríveis dos habitantes mais incríveis do nosso planeta em "Mundo dos Bichos". Seja bem-vindo a este universo encantador de autodescrições de animais!</p>

      </div>
 
        <button className={styles.botao}><a href="\objetos">Todos os nossos animais cadastrados</a></button>
        
      <Rodape />
    </div>
  )
}