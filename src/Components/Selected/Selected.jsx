import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Selected = ({ LSplayersData,deletePlayerDetails }) => {

    const { player_img, player_name, batting_style,ID } = LSplayersData;


    return (
        <div className="flex gap-5 mt-3 border shadow-lg rounded-lg p-2 items-center">
            <img className="w-16 h-16 rounded-xl" src={player_img} alt="" />

            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="font-bold">{player_name}</h1>
                    <p className="opacity-50">{batting_style}</p>
                </div>

                <span onClick={()=>{deletePlayerDetails(LSplayersData)}} className="cursor-pointer px-5 text-red-500">
                    <FontAwesomeIcon icon={faTrashCan} />
                </span>
            </div>
        </div>
    );
};

export default Selected;
