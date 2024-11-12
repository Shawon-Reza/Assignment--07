import { useState } from "react";

const AllPlayers = () => {

const [activeStatuse,setActiveStatuse]=useState(true)

const handleActiveButton=()=>{
    setActiveStatuse(!activeStatuse)
}
    
    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">Available Players</h3>
                <div className=" space-x-3">
                <button className="btn">Available</button>
                <button className="btn">Selected</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AllPlayers;