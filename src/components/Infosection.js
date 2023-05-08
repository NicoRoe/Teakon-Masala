
import infoPic from "../img/infoBild.jpg";
import { useNavigate } from 'react-router-dom';

export default function Infosection() {
    const navigate = useNavigate();
    return (
        <>
            <div className="hero min-h-screenrounded-box">
                <img src={infoPic} alt='paul-vincent-unsplash' className=' top-0 w-full h-3/4 rounded-box opacity-75'></img>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w">
                        <h1 className="italic mb-5 text-7xl font-bold shadow-sm text-black ">TEEKON MASALA</h1>
                        <p className="italic mb-5 text-2xl font-bold text-black">Willkommen auf unserer Teewebseite! Hier findest du alles, was du über Tee wissen musst - von der Herkunft bis hin zu den verschiedenen Arten und Sorten. Wir haben sogar eine Beschreibung für jeden Tee, damit du weißt, was dich erwartet. Also schnapp dir eine Tasse und lass uns zusammen diese köstliche Welt erkunden!</p>
                        <button onClick={() => navigate("/ergebnisse/alle")} className="bg-black hover:bg-white text-white font-bold hover:text-black py-3 px-7 mt-4 border border-black hover:border-transparent rounded-full opacity-60 duration-200">Zeige alle Tees</button>
                    </div>
                </div>
            </div>
        </>
    )
};