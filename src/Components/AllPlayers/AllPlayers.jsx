import { useEffect, useState } from "react";
import SinglePlayer from "../singlePlayer/singlePlayer";

const AllPlayers = ({onSelectPlayer}) => {
    // Activ Button State

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

                <div className="grid grid-cols-2 gap-3">
                    {
                        allPlayers.map((player, idx) => <SinglePlayer
                            key={idx}
                            player={player}
                            onSelectPlayer={onSelectPlayer}
                           
                        ></SinglePlayer>)
                    }
                </div>



                {/* All Players Container End */}
            </div>
        </div>
    );
};

export default AllPlayers;