import React from 'react'
import styles from './topbar.module.scss'

import { AiOutlineSafetyCertificate, AiOutlineCreditCard } from 'react-icons/ai'
import { RiTruckLine } from 'react-icons/ri'

const TopBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <AiOutlineSafetyCertificate className={styles.securityicon} />
                <div className={styles.security}>
                    Compra <span className={styles.yellow}>100% Segura</span>
                </div>
                <RiTruckLine className={styles.truckicon} />
                <div className={styles.truck}>
                    <span className={styles.yellow}>Frete grátis </span>acima de R$ 200
                </div>
                <AiOutlineCreditCard className={styles.cardicon} />
                <div className={styles.card}>
                    <span className={styles.yellow}>Parcele </span>suas compras
                </div>
            </div>
        </div>
    )
}

export default TopBar;