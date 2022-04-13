import React from 'react'
import './home.module.scss'
import PageStart from '../../components/PageStart';
import Categories from '../../components/Categories';
import Market from '../../components/Market';
import Brands from '../../components/Brands';
import Blog from '../../components/Blog';
import Instagram from '../../components/Instagram';
import Notifications from '../../components/Notifications';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
    <PageStart />
    <Categories />
    <Market />
    <Brands />
    <Blog />
    <Instagram />
    <Notifications />
    <Footer />
    </>
  )
}

export default Home