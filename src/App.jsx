import { useEffect, useState } from 'react';
import './App.css';
import AllPlayers from './Components/AllPlayers/AllPlayers';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Initialize totalCoin with the value from localStorage or default to 0
  const [totalCoin, setTotalCoin] = useState(() => {
    const savedCoins = JSON.parse(localStorage.getItem('coins'));
    return savedCoins || 0;
  });

  // Claimn Free Credit unlimitade
  const handleFreeCredit = () => {
    setTotalCoin(prevTotalCoin => prevTotalCoin + 99999999);
    toast.success("Free Credits are Claimed")
  };

  // Store available coins in localStorage whenever totalCoin changes
  useEffect(() => {
    localStorage.setItem('coins', JSON.stringify(totalCoin));
  }, [totalCoin]);

  // Update Coins after purchase
  const handleCOinAfterPurchase = (price) => {
    const availableCoin = totalCoin - price;
    if (availableCoin >= 0) {
      setTotalCoin(availableCoin);
    } else {
      toast.warning("Don't Have Enough Coins");
    }
  };

  // Update totalCoin after deleting a player
  const updateCoinsAfterDelete = (price) => {
    setTotalCoin(prevTotalCoin => prevTotalCoin + price);
  };

  return (
    <div className='px-5'>
      <Navbar handleFreeCredit={handleFreeCredit} totalCoin={totalCoin}></Navbar>
      <AllPlayers
        handleCOinAfterPurchase={handleCOinAfterPurchase}
        setTotalCoin={setTotalCoin}
        totalCoin={totalCoin}
        updateCoinsAfterDelete={updateCoinsAfterDelete}
      />
      <Footer></Footer>
      <ToastContainer
        position="top-center"
      />
    </div>
  );
}

export default App;
