
import { useState } from 'react'
import './App.css'
import AllPlayers from './Components/AllPlayers/AllPlayers'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Selected from './Components/Selected/Selected';

function App() {

  const [totalCoin, setTotalCoin] = useState(0)  // State For Total Coin
  const handleFreeCredit = () => {          // Claim Free Coin
    setTotalCoin(totalCoin + 99999999)
  }

  // Update Coins after puchesh
  const handleCOinAfterPurchase = (price) => {
    const AvailableCoin = totalCoin - price
    if (AvailableCoin > 0) {
      setTotalCoin(AvailableCoin)
    }
    else {
      // alert("Dont Have Enough Coins")
    }
  }



  // test()


  return (
    <>
      <Navbar handleFreeCredit={handleFreeCredit} totalCoin={totalCoin}></Navbar>
      <AllPlayers
        handleCOinAfterPurchase={handleCOinAfterPurchase}
        setTotalCoin={setTotalCoin}
        totalCoin={totalCoin}

      ></AllPlayers>

      <Footer></Footer>
    </>
  )
}

export default App
