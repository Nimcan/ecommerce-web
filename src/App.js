import './App.css';
import Brands from './component/brands';
import Catogories from './component/featuredCatagories';
import Products from './component/featuredProducts';
import Footer from './component/footer';
import Front from './component/frontPage';
import Header from './component/Header';
import Latest from './component/latestProducts';
import Offer from './component/offer';
import Testomonial from './component/testomonial';

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <Header/>
          <Front/>
      </div>
    </div>
    <Catogories/>
    <Products/>
    <Latest/>
    <Offer/>
    <Testomonial/>
    <Brands/>
    <Footer/>
  </>
  );
}

export default App;
