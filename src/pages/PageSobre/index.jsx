import React from "react";
import styles from './sobremim.module.css';
import fotoperfil from '../../assets/foto-perfil.png'
const PageSobre = () => {
    return ( 
        <div className={styles.PageSobre}>
            <main><br/>
                <section>
                    <article className={`${styles.containerPrincipal}` }>
                        
                        <div className={styles.home}>
                            <h2 className={styles.titulo}>Olá, eu sou Geyza!<br/><br/></h2>
                            <h2 className={styles.subtitulo}>Criando Interfaces, do Design ao Código.</h2>    
                            <img src={fotoperfil} />   
                        </div>                       
                        <section className={styles.sobremim}>
                            <h2 className={styles.sm}>Sobre mim</h2>
                            <p className={styles.texto}>Acredito que a mágica acontece quando o design e o código se encontram. 
                                Eu vejo cada interface como uma história única, onde o visual e o código 
                                se unem para criar algo especial. Minha abordagem é guiada pela ideia 
                                de harmonizar o design meticuloso com uma execução de código precisa.
                            </p>
                        </section>
                    </article>
                </section>
            </main>
        </div>
    )
};
export default PageSobre;
