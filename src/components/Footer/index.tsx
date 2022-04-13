import React from "react";
import styles from './footer.module.scss'

import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi'
import Elo from '../../assets/elo.png'
import Visa from '../../assets/visa.png'
import Mastercard from '../../assets/mastercard.png'
import Boleto from '../../assets/boleto.png'
import Dinners from '../../assets/dinners.png'
import American from '../../assets/american.png'
import Protected from '../../assets/protected.png'
import Vtex from '../../assets/vtex.png'
import Econverse from '../../assets/econverse.png'


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.sectionone}>
                    <h3>Nos siga nas nossas redes sociais</h3>
                    <div>
                        <a href="/"><FaFacebookF className={styles.facebook}/></a>
                        <a href="/"><BsInstagram className={styles.instagram}/></a>
                        <a href="/"><AiFillYoutube className={styles.youtube}/></a>
                    </div>
                    <h3 className={styles.sobre}>Sobre O Cãoselheiro</h3>
                    <p className={styles.intro}>Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor
                        qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo
                        metodologias positivas de treinamento animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento.
                        Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!</p>
                </div>
                <div className={styles.sectiontwo}>
                    <h3 className={styles.assinatura}>Assinatura</h3>
                    <h3 className={styles.parceiros}>Parceiros </h3>
                </div>
                <div className={styles.sectionthree}>
                    <h3 className={styles.institucional}>Institucional</h3>
                    <a href="/">Quem somos</a>
                    <a href="/">Política de privacidade</a>
                    <a href="/">Política comercial</a>
                    <a href="/">Política de devolução</a>
                    <a href="/">Regras de frete</a>
                </div>
                <div className={styles.sectionfour}>
                    <h3 className={styles.atendimento}>Atendimento</h3>
                    <a href="/">Fale conosco</a>
                    <a href="/"><BiPhone /> (11)97212-1314</a>
                    <a href="/">ocaoselheiro@ocaoselheiro.com.br</a>
                    <a href="/">Trabalhe conosco</a>
                </div>
                <div className={styles.sectionfive}>
                    <h3 className={styles.sectionfive}>Formas de pagamento</h3>
                    <div className={styles.payment}>
                        <figure>
                            <img src={Elo} alt="Cartão Elo" />
                        </figure>
                        <figure>
                            <img src={Visa} alt="Cartão Visa" />
                        </figure>
                        <figure>
                            <img src={Mastercard} alt="Cartão MasterCard" />
                        </figure>
                        <figure>
                            <img src={Boleto} alt="Boleto" />
                        </figure>
                        <figure>
                            <img src={Dinners} alt="Cartão Internacional" />
                        </figure>
                        <figure>
                            <img src={American} alt="Cartão American Express" />
                        </figure>
                    </div>
                </div>
                <div className={styles.sectionsix}>
                    <h3>Segurança</h3>
                    <img src={Protected} alt="prodetido" />
                </div>
                <div className={styles.sectionseven} >
                    <p>O Cãoselheiro Comércio LTDA <br /> CNPJ: 30.324.633/0001-16 © <br />Todos os direitos reservados. 2021</p>
                </div>
                <div className={styles.sectioneight}>
                    <img src={Econverse} alt="Econverse" />
                    <img src={Vtex} alt="Vtex" />
                </div>
            </div>
        </div>
    )
}

export default Footer;