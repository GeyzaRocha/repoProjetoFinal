import React from "react";
import styles from './sobremim.module.css';
const PageSobre = () => {
    return ( 
        <div className={styles.PageSobre}>
            <main>
                <section>
                    <article className={`${styles.subcontainerPrincipal} ${styles.container}` }>
                        <div className={styles.home}>
                            <h1>Olá, eu sou Geyza</h1>
                            <h2>Criando Interfaces,<br />Do Design ao Código.</h2>
                        </div>
                    
                        <section className={styles.sobremim}>
                            <h2>Sobre mim</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor nulla labore voluptates, id, quis, corrupti repellendus voluptas quos fugiat earum tempore! Aut dolores temporibus minus, ad nesciunt facere. Voluptatem.</p>
                        </section>
                    </article>
                </section>
            </main>
        </div>
    )
};
export default PageSobre;
