
import { useState } from 'react'
import './App.css'
import AllPlayers from './Components/AllPlayers/AllPlayers'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [totalCoin, setTotalCoin] = useState(0)  // State For Total Coin
  const handleFreeCredit = () => {          // Claim Free Coin
    setTotalCoin(totalCoin + 99999999)
  }
// Update Coins after puchesh
  const handleCOinAfterPurchase=(price)=>{
    console.log("price",price);
    setTotalCoin(totalCoin-price)
  }



 

// test()


  return (
    <>
      <Navbar handleFreeCredit={handleFreeCredit} totalCoin={totalCoin}></Navbar>
      <AllPlayers 
     handleCOinAfterPurchase={handleCOinAfterPurchase}
      ></AllPlayers>


    </>
  )
}

export default App
