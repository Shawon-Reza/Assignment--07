
import { useState } from 'react'
import './App.css'
import AllPlayers from './Components/AllPlayers/AllPlayers'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [totalCoin, setTotalCoin] = useState(0)  // State For Total Coin
  const handleFreeCredit = () => {          // Claim Free Coin
    setTotalCoin(totalCoin + 99999999)
  }



  const [selectedPlayers, setSelectedPlayers] = useState([])    // State for Selected Players details

  const handlePlayerSelect = (player) => {
    const newselectPlayers= [...selectedPlayers,player]
    setSelectedPlayers(newselectPlayers)

  };
  console.log(selectedPlayers);




  return (
    <>
      <Navbar handleFreeCredit={handleFreeCredit} totalCoin={totalCoin}></Navbar>
      <AllPlayers 
      onSelectPlayer={handlePlayerSelect}
      ></AllPlayers>


    </>
  )
}

export default App
