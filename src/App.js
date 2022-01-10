import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Brands from './component/brands';
import Catogories from './component/featuredCatagories';
import Products from './component/featuredProducts';
import Footer from './component/footer';
import Front from './component/frontPage';
import Header from './component/Header';
import Latest from './component/latestProducts';
import Offer from './component/offer';
import Testomonial from './component/testomonial';
import { Acount } from './component/Acount';
import Card from './component/Card';
import View from './component/View';

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <Header/>
          {/* <Front/> */}
      </div>
    </div>
    {/* <Catogories/>
    <Products/>
    <Latest/>
    <Offer/>
    <Testomonial/>
    <Brands/> */}
    {/* <Acount/> */}
    {/* <Card/> */}
    <View/>
    <Footer/>
  </>
  );
}

export default App;
