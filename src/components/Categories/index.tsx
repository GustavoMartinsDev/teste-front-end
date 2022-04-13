import React from "react";
import styles from './categories.module.scss'
import DogBrinquedo from '../../assets/categoriasBrinquedo.png'
import DogPetisco from '../../assets/categoriasPetiscos.png'
import DogGuias from '../../assets/categoriasGuia.png'
import DogBHigiene from '../../assets/categoriasHigiene.png'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { BsCircleFill } from 'react-icons/bs'

const Categories = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <IoIosArrowDropleftCircle className={styles.leftselector} size='34'/>
            <BsCircleFill className={styles.leftcircle} size='24' />
            <IoIosArrowDroprightCircle className={styles.rightselector} size='34'/>
            <BsCircleFill className={styles.rightcircle} size='24'/>
                <span className={styles.category}>Categorias</span>
                <div className={styles.imagens}>
                    <img src={DogBrinquedo} alt="Brinquedos" className={styles.dogbrinquedos} />
                    <img src={DogPetisco} alt="Petiscos" className={styles.dogpetiscos} />
                    <img src={DogGuias} alt="Guias" className={styles.dogguias} />
                    <img src={DogBHigiene} alt="Higiene" className={styles.doghigiene} />
                </div>
                <div className={styles.text}>
                    <span>Brinquedos</span>
                    <span>Petiscos</span>
                    <span>Guias</span>
                    <span>Higiene</span>
                </div>
            </div>
        </div>
    )
}


export default Categories;