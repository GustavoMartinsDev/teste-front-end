import React from 'react'
import styles from './header.module.scss'

import Logo from '../../assets/logocaoselheiro.png'

import TopBar from '../TopBar'
import BottomBar from '../BottomBar'
import {FiSearch} from 'react-icons/fi'
import {RiInboxUnarchiveLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineShoppingCart} from 'react-icons/hi'



const Header = () => {
  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={Logo} alt="O Caoselheiro" className={styles.logo}/>

          <form action="/">
              <input type="text" placeholder="O que você está buscando?" />
              <button type="submit">
                <FiSearch className={styles.search}/>
              </button>
          </form>
          
          <div className={styles.box}>
            <RiInboxUnarchiveLine />
          </div>
          
          <div className={styles.heart}>
            <AiOutlineHeart />
          </div>
          
          <div className={styles.profile}>
            <CgProfile />
          </div>
          
          <div className={styles.shopping}>
            <HiOutlineShoppingCart />
          </div>
          
        </div>
      </div>
      <BottomBar />
    </>
  )
}

export default Header;