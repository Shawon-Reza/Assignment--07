import { useState } from "react";

const AllPlayers = () => {

    const [activetbn, setActivetbn] = useState({
        cart: true,
        status: "cart"
    });
    console.log(activetbn)

    const handleActiveButton = (status) => {
        if (status == "cart") {
            setActivetbn({
                cart: true,
                status: "cart"
            })
        }
        else{
            setActivetbn({
                cart: false,
                status: "selected"
            })
        }
    }


    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">Available Players</h3>
                <div className=" space-x-3">
                    {/* Acative Button */}
                    <button className={`${activetbn.cart ? "btn bg-orange-300" : "btn"}`} onClick={()=>{handleActiveButton("cart")}}>Available</button>
                    <button className={`${activetbn.cart ? "btn" : "btn bg-orange-300"}`} onClick={()=>{handleActiveButton("selected")}}>Selected</button>
                </div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default AllPlayers;