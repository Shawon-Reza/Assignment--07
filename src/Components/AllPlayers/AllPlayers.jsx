import { useEffect, useState } from "react";
import SinglePlayer from "../singlePlayer/singlePlayer";
import { text } from "@fortawesome/fontawesome-svg-core";
import { getStoredPlayers } from "../LocalStorage/Localstorage";
import Selected from "../Selected/Selected";



const AllPlayers = ({ handleCOinAfterPurchase }) => {
    // Activ Button State
    text()
    const [activetbn, setActivetbn] = useState({
        cart: true,
        status: "cart"
    });
    // Active Button Status HAndle
    const handleActiveButton = (status) => {
        if (status == "cart") {
            setActivetbn({
                cart: true,
                status: "cart"
            })
        }
        else {
            setActivetbn({
                cart: false,
                status: "selected"
            })
        }
    }


    // State For All Players data 
    const [allPlayers, setAllPlayers] = useState([])  //All players Details
    //UseEffect for Fetch Facked Data For All Players.

    useEffect(() => {
        fetch('../../../public/Deta.json')
            .then(data => data.json())
            .then(res => setAllPlayers(res))
            .catch(error => { "Error occur while Fetching ALl players Details", error })
    }, [])


    const [selectedPlayers, setSelectedPlayers] = useState([])    // State for Selected Players details after stored in Local storage.

    const handlePlayerSelect = (player) => {
        const isexist = selectedPlayers.find(p => p.ID == player.ID)
        if (isexist) {
            alert("Already Exits")
        }
        else {
            const newselectPlayers = [...selectedPlayers, player]
            setSelectedPlayers(newselectPlayers)
        }

    };

    // Local Storage Part
    const [storedplayers, setStoredPlayers] = useState([])  //storedplayers= localStorage Saved Data
    useEffect(() => {
        const LsPlayersId = getStoredPlayers()  //Localstorage Players ID

        const StoredPlayerslist = []
        for (const id of LsPlayersId) {
            const Player = allPlayers.find(p => p.ID == id)
            if (Player) {
                StoredPlayerslist.push(Player)
                // console.log("Stored",StoredPlayerslist);
                setStoredPlayers(StoredPlayerslist)
            }
        }
    }, [selectedPlayers, allPlayers])
    // console.log("LS Saved Players", storedplayers);



    // Delete Local Starage players Details

// const [deleteplayer,setdeleteplayer]=useState([])

const deletePlayerDetails = (player_ID) => {
    const lsData = JSON.parse(localStorage.getItem('Storedplayers')) || [];
    const updatedLsData = lsData.filter(id => id !== player_ID);
    
    localStorage.setItem('Storedplayers', JSON.stringify(updatedLsData));
    setStoredPlayers(updatedLsData.map(id => allPlayers.find(p => p.ID === id)).filter(Boolean));
};



    // Add a function to show all players
    const showAllPlayers = () => {
        setActivetbn({ cart: true, status: "cart" });
    };






    return (
        <div className="container mx-auto mt-10">
            {/* Active Button Container Start*/}
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-3xl font-bold">Available Players</h3>

                <div className=" space-x-3">
                    {/* Acative Button */}
                    <button className={`${activetbn.cart ? "btn bg-orange-300" : "btn"}`} onClick={() => { handleActiveButton("cart") }}>Available</button>

                    <button className={`${activetbn.cart ? "btn" : "btn bg-orange-300"}`} onClick={() => { handleActiveButton("selected") }}>Selected</button>
                </div> {/* Active Button Container End */}

            </div>

            <div>
                {/* All Players Container Start : Dynamically Sshow */}

                {
                    activetbn.cart ? (
                        <div className="grid grid-cols-2 gap-3">
                            {
                                allPlayers.map((player, idx) => <SinglePlayer
                                    key={idx}
                                    player={player}
                                    handlePlayerSelect={handlePlayerSelect}
                                    handleCOinAfterPurchase={handleCOinAfterPurchase}
                                ></SinglePlayer>)
                            }
                        </div>)
                        :
                        (
                            <div className="">
                                {
                                    storedplayers.map((player, idx) => <Selected
                                        key={idx}
                                        LSplayersData={player}
                                        deletePlayerDetails={deletePlayerDetails}
                                    ></Selected>)
                                }
                                <button onClick={showAllPlayers} className="btn my-7">Add More Player</button>
                            </div>)
                }

                {/* All Players Container End */}
            </div>
        </div>
    );
};

export default AllPlayers;