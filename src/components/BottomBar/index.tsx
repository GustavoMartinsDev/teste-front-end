import React from 'react'
import styles from './bottombar.module.scss'
import { BiCrown } from 'react-icons/bi'

const BottomBar = () => {
    return (
        <span className={styles.container}>
            <div className={styles.content}>
                <a href='/' className={styles.brincar}>BRINCAR</a>
                <a href='/' className={styles.morder}>MORDER</a>
                <a href='/' className={styles.comer}>COMER</a>
                <a href='/' className={styles.passear}>PASSEAR</a>
                <a href='/' className={styles.casaeconforto}>CASA E CONFORTO</a>
                <a href='/' className={styles.educacao}>EDUCAÇÃO</a>
                <a href='/' className={styles.ofertas}>OFERTAS</a>
                <BiCrown className={styles.crown}/>
                <a href='/' className={styles.colecaodeoutono}>COLEÇÃO DE OUTONO</a>
            </div>
        </span>
    )
}


export default BottomBar;