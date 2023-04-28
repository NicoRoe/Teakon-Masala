import wrldmap from '../img/61752.jpg';
import { useNavigate } from 'react-router-dom';

export default function Infosection() {
    const navigate = useNavigate();
    return (
        <>
            <div className="tile col-start-1 col-end-1 row-start-2 col-span-full flex-col justify-center align-center container mx-auto bg-gray-200 rounded-xl shadow border p-4 m-3">
                <p className="text-gray-500 text-lg text-center pt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

                <img src={wrldmap} alt='wimage' className='w-full h-80 my-4 rounded-lg'/>
                <button onClick={() => navigate("/ergebnisse/alle")} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-7 mt-4 border border-blue-500 hover:border-transparent rounded-full ">
                    zeige alle Tees
                </button>
            </div>
        </>
    )
};