import logo from '../../../src/assets/logo.png';
import banner from '../../../src/assets/banner-main.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({handleFreeCredit,totalCoin}) => {
    return (
        <div className='container mx-auto flex flex-col'>
            {/* Navbar-------------- */}
            <div className='flex justify-between items-center py-4'>
                <img src={logo} alt="Logo" className="h-10" />
                <div className='flex items-center gap-5'>
                    <a href="#">Home</a>
                    <a href="#">Teams</a>
                    <a href="#">Schedules</a>
                    <button className='btn bg-white px-4 py-2 rounded-lg shadow-md'>
                        {totalCoin} Coin <FontAwesomeIcon icon={faCoins} />
                    </button>
                </div>
            </div>

            {/* Banner-------------*/}
            <div className='py-10 text-center bg-[url("../../../src/assets/bg-shadow.png")] bg-cover bg-center rounded-lg space-y-1'>
                <img src={banner} alt="Banner" className='mx-auto mb-4' />
                <h1 className='text-2xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-lg text-gray-600'>Beyond Boundaries Beyond Limits</p>
                <button className='btn btn-success bg-["#E7FE29"] text-black rounded-lg shadow-md' onClick={handleFreeCredit}>
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default Navbar;
