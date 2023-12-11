import styles from '../../styles/Page.module.css';
import Rodape from '../../components/Footer';
import Topo from '../../components/Navbar';

function Profile({ objeto = {} }) {
    return (
        <div>

            <Topo/>
            
            <div className={styles.profile}>
            <title>Autodescrição do Desenho</title>
            <h2>{objeto.nome}</h2>
            <p className={styles.desobjeto}>{objeto.descricao}</p>
            <p className={styles.nomecriador}>{objeto.usuario}</p>
            <button><a href="\objetos"> Voltar</a></button>
            </div>
             
            <Rodape/>

        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const objeto = await repo[context.params.nome];
    return {
        props: { objeto }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const objetos = await repo;
    const paths = objetos.map((objeto, index) => {
        return { params: { nome: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };

}
export default Profile;