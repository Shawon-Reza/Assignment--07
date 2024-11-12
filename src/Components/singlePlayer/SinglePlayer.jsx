import { addToLs } from "../LocalStorage/Localstorage";

const SinglePlayer = ({ player, handlePlayerSelect, handleCOinAfterPurchase }) => {

    // console.log(handleCOinAfterPurchase)
    const { price, position, position: player_position, player_img, player_name, country, batting_style, bowling_style, ID } = player

    return (
        <div className="border shadow-lg p-3 rounded-lg">
            <img className="h-48 w-full object-cover rounded-lg shadow-xl mb-3" src={player_img} alt="" />
            <div className="flex justify-between items-center">
                <img className="w-7 h-7 rounded-full object-cover" src={player_img} alt="" />
                <h1 className="font-bold">{player_name}</h1>
            </div>
            <div className="flex justify-between items-center">
                <p>{country}</p>
                <p className="px-3 py-2 bg-slate-100 rounded-lg">{player_position}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>{batting_style}</p>
                <p>{bowling_style}</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <p>Price : {price} </p>
                <button onClick={() => {
                    handlePlayerSelect(player);
                    handleCOinAfterPurchase(price);
                    addToLs(ID);
                }} className="btn mt-1">Choose Player</button>
            </div>
        </div>
    );
};

export default SinglePlayer;