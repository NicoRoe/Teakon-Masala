import wrldmap from '../img/61752.jpg';
import testbild from '../img/drew-jemmett-qEcWgrTG578-unsplash.jpg'
import Accordion from './accordion.js'
import { useParams } from 'react-router-dom';
/* TODO Bilder */
export default function TeeSorteDetail({allTeas}) {
    const {id}=useParams();
    const tee = allTeas.find(tea=>tea.teeid=== Number(id))
    return (
        <>
            <div className='container'>
                <h1 className='text-5xl text-white bg-grey-600 text-center font-bold my-6'>{tee.teename[0]}</h1>
                <div className='md:flex md:justify-between sm:px-0 sm:justify-center'>
                    {/* -------------------------BILD-01--------------------------------- */}
                    <div class="h-1/3 flex items-center ">
                        <img src={testbild} alt='test' className=' md:w-80 md:h-80 md:mx-4 md:ml-0 md:my-4 md:rounded-lg  ' />
                    </div>
                    {/* -------------------------TEXTFELD-01--------------------------------- */}
                    <div class="h-1/3 flex flex-col  items-center gap-x-2 md:flex-col md:justify-end md:mb-5">
                        <p className='text-gray-500 '>Aroma:</p>
                        <ul>
                        {tee.aromenname.map(aroma=>{return(
                        <li>{aroma}</li>)})}
                        </ul>
                        <p className=' text-gray-500 '>Koffeingehalt:</p>
                        <ul>
                        {tee.attributename.map(attribute=>{return(
                        <li>{attribute}</li>)})}
                        </ul>
                        <p className=' text-gray-500 '>Teeart:</p>
                        <ul>
                        {tee.tee_artenname.map(teeart=>{return(
                        <li>{teeart}</li>)})}
                        </ul>
                    </div>
                    {/* -------------------------BILD-02-------------------------------- */}
                    <div class="h-1/3 flex items-center">
                        <img src={wrldmap} alt={tee.teename[0]} className='w-96 h-80 ml-300 mx-4 ml-100 my-4 m-30 rounded-lg' />
                    </div>
                </div>
                {/* -------------------------TEXTFELDER-CARDS-------------------------------- */}
                <div className='flex flex-col'>
                    {/* -------------------------TEXTFELD-01--------------------------------- */}
                    <div className="bg-[#4B6C58] card  my-4 text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Beschreibung:</h2>
                            <p>{tee.teebeschreibung[0]}</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-02--------------------------------- */}
                    <div className="my-4 flex align-center justify-center bg-[#649165] card   text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Nährstoffe:</h2>
                            <ul>
                                {tee.naerhstoffename.map(naehrstoff=>{return(
                                    <li>{naehrstoff}</li>
                                )})}
                            </ul>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-03--------------------------------- */}
                    <div className=" bg-[#8ab66c] card  my-4 text-primary-content row-span-3">
                        <div className="card-body">
                            <h2 className="card-title">Zubereitung:</h2>
                            <p>{tee.teezubereitung[0]}</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-04--------------------------------- */}
                    <div className=" bg-[#bcd96e] card my-4 text-gray-500">
                        <div className="card-body">
                            <h2 className="card-title">Nebenwirkungen:</h2>
                            <ul>
                                {tee.nebenwirkungenname.map(nebenwirkung=>{return(
                                    <li>{nebenwirkung}</li>
                                )})}
                            </ul>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-05--------------------------------- */}
                    <div className="  bg-[#fafa6e] card mt-4 mb-4 text-black">
                        <div className="card-body">
                            <h2 className="card-title">Benefits:</h2>
                            <ul>
                                {tee.benefitsname.map(benefit=>{return(
                                    <li>{benefit}</li>
                                )})}
                            </ul>
                        </div>
                    </div>
                    <Accordion/>
                </div >
            </div>
        </>
    )
};