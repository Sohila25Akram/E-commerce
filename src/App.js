import React, { useContext } from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import ShopNavigate from './Components/ShopNavigate';
import data from './data.json'
import Footer from './Components/Footer';
import AppRoutes from './Routes/AppRoutes';


function App() {
  const productsthatAddedToCart = data.products.filter(item => {
    return item.addToCart === 'add';
  });
 
  return (
    <div className="App">
      <NavigationBar />
      <ShopNavigate />
      <AppRoutes productsthatAddedToCart={productsthatAddedToCart} />
      <Footer />       
    </div>
  );
}

export default App;
