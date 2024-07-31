import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from './data.json'

export const CountContext = React.createContext();
export const TotalAmountContext = React.createContext();
export const QuantityWhenAddContext = React.createContext();
export const QuantityAddedFromCart = React.createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  const [count, setCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantityWhenAdd, setQuantityWhenAdd] = useState(1);
  const [quantityAddedFromCart, setQuantityAddedFromCart] = useState(1);

  const changeCount = (productId) => {
    data.products.map((pro) => {
      if (productId === pro.id) {
        if (pro.addToCart === "remove") {
          setCount(count - 1);
        } else if (pro.addToCart !== "add") {
          setCount(count + 1);
        }
      }
    });
  };

  return(
    <React.StrictMode>
      <BrowserRouter>
        <QuantityWhenAddContext.Provider value={{ quantityWhenAdd, setQuantityWhenAdd }}>
          <QuantityAddedFromCart.Provider value={{ quantityAddedFromCart, setQuantityAddedFromCart }}>
            <TotalAmountContext.Provider value={{ totalAmount, setTotalAmount }}>
              <CountContext.Provider value={{ count, changeCount }}>
                <App /> 
                <ToastContainer />
              </CountContext.Provider>
            </TotalAmountContext.Provider>
          </QuantityAddedFromCart.Provider>
        </QuantityWhenAddContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
