import React from "react";
import styles from './skill.module.css';
import htmllogo from '../../assets/htmllogo.png'
import csslogo from '../../assets/csslogo.png'
import jslogo from '../../assets/jslogo.png'
import reactlogo from '../../assets/reactlogo.png'
import gitlogo from '../../assets/gitlogo.png'
import githublogo from '../../assets/githublogo.png'
import figmalogo from '../../assets/figmalogo.png'

import penpotlogo from '../../assets/penpotlogo.png'


const Skill = () => {
    return ( 
        <main><br/>
            <section className={styles.Principal}>
                <div className={styles.Skills}>
                    <h1>Skills</h1>
                </div>
                <div className={styles.containerProjetos}>
                    <div className={styles.divprojetos}>
                        <h2>Abaixo estão algumas das tecnologias que utilizo.</h2>
                        <li className={styles.containerlogos}>
                            <img src={htmllogo} />
                            <img src={csslogo} />
                            <img src={jslogo} />
                            <img src={reactlogo}/>
                            <img src={gitlogo} />
                            <img src={githublogo} />
                            <img src={figmalogo} />
                            <img src={penpotlogo} />
                        </li>
                    <h2 >Projetos</h2>
                    </div>
                    <div className={styles.projetos}>
                        <div className={styles.calculadora}>
                            <h3>Calculadora</h3>
                            <p>Trabalho da calculadora do projeto Pretalab Santander.</p>
                            <p>Linguagem Javascript</p>
                            <a href="https://projetocalmedia.netlify.app/">Calculadora</a>
                        </div>
                        <div className={styles.landingpage}>
                            <h3>Landing Page</h3>
                            <p>Confira meu primeiro portfólio! Uma breve coleção de projetos que refletem minha paixão pelo design e desenvolvimento. Explore meu trabalho.</p>
                            <a href="https://portifoliouxfron.netlify.app/">Portfólio</a>
                        </div>
                    </div>
                </div>    
            </section>
        </main>
    )

};
export default Skill;
