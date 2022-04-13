import React from 'react'
import styles from './news.module.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { IoIosRadioButtonOn } from 'react-icons/io'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { BiRadioCircle } from 'react-icons/bi'


const PageStart = () => {
    return (
        <>
            <div className={styles.contentImg} />
            <div className={styles.container} >
                    < BsFillArrowDownCircleFill className={styles.down} size='32'/>
                <div className={styles.content}>
                    <AiOutlineLeft className={styles.left} size='29' />
                    <span className={styles.msg}>
                        As melhores guias para os melhores passeios.
                    </span>
                    <button className={styles.button}>
                        <a href='/' className={styles.confira}>CONFIRA</a>
                    </button>
                    <AiOutlineRight className={styles.right} size='29' />
                    <IoIosRadioButtonOn className={styles.rd1} size='17' />
                    <BiRadioCircle className={styles.rd2} size='21' />
                    <BiRadioCircle className={styles.rd3} size='21' />
                </div>
            </div>
        </>
    )
}

export default PageStart;