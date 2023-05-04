import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SelectedCriterias from "./SelectedCriterias";
import schwarzerTee from "../img/teearten/schwarzertee.jpg";
import gruenerTee from "../img/teearten/gruenertee.jpg";
import eisTee from "../img/teearten/eistee.jpg";
import fruechteTee from "../img/teearten/fruechtetee.jpg";
import gelberTee from "../img/teearten/gelbertee.jpg";
import kraeuterTee from "../img/teearten/kraeutertee.jpg";
import oolongTee from "../img/teearten/oolongtee.jpg";
import weißerTee from "../img/teearten/weissertee.jpg";
import darjeelingtee from "../img/teesorten/01_darjeelingtee.jpg";
import assamtee from "../img/teesorten/02_assamtee.jpg";
import ceylontee from "../img/teesorten/03_ceylontee.jpg";
import keemuntee from "../img/teesorten/04_keemuntee.jpg";
import lapsangsuchongtee from "../img/teesorten/05_lapsangsuchongtee.jpg";
import senchatee from "../img/teesorten/06_senchatee.jpg";
import matchatee from "../img/teesorten/07_matchatee.jpg";
import dragonwelltee from "../img/teesorten/08_dragonwelltee.jpg";
import gyokurotee from "../img/teesorten/09_gyokurotee.jpg";
import junshanyinzhentee from "../img/teesorten/10_junshanyinzhentee.jpg";
import huoshanhuangyatee from "../img/teesorten/11_huoshanhuangyatee.jpg";
import mengdinghuangyatee from "../img/teesorten/12_mengdinghuangyatee.jpg";
import baihaoyinzhentee from "../img/teesorten/13_baihaoyinzhentee.jpg";
import baimudantee from "../img/teesorten/14_baimudantee.jpg";
import shoumeitee from "../img/teesorten/15_shoumeitee.jpg";
import darjeelinwhitetee from "../img/teesorten/16_darjeelinwhitetee.jpg";
import ceylonwhitetee from "../img/teesorten/17_ceylonwhitetee.jpg";
import tieguanyintee from "../img/teesorten/18_tieguanyintee.jpg";
import wuyiyanchatee from "../img/teesorten/19_wuyiyanchatee.jpg";
import dahongpaotee from "../img/teesorten/20_dahongpaotee.jpg";
import orientalbeautytee from "../img/teesorten/21_orientalbeautytee.jpg";
import jinxuantee from "../img/teesorten/22_jinxuantee.jpg";
import hagebuttentee from "../img/teesorten/23_hagebuttentee.jpg";
import hibiskustee from "../img/teesorten/24_hibiskustee.jpg";
import holunderbeerentee from "../img/teesorten/25_holunderbeerentee.jpg";
import heidelbeerentee from "../img/teesorten/26_heidelbeerentee.jpg";
import erdbeertee from "../img/teesorten/27_erdbeertee.jpg";
import kamillentee from "../img/teesorten/28_kamillentee.jpg";
import pfefferminztee from "../img/teesorten/29_pfefferminztee.jpg";
import ingwertee from "../img/teesorten/30_ingwertee.jpg";
import zitronnenmelissentee from "../img/teesorten/31_zitronnenmelissentee.jpg";
import brennnesseltee from "../img/teesorten/32_brennnesseltee.jpeg"



export default function ErgebnisseSeite({chosenCriterias, setChosenCriterias, allTeas, allTeearten}) {
    const { kriteria } = useParams();
    const navigateTo = useNavigate();
    const [resultTeas,setResultTeas]=useState(allTeas)

    let foundTeas =[...allTeas];
    const searchFunktion=()=>{
        /*TODO variablen anpassen? */
        const chosenCriteriasTemp=[...chosenCriterias];
    
        const nameSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="name");
    
        const teeartSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="teas");
    
        const originSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="origin");
    
        const flavourSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="flavour");
        
        const benefitSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="effect");
        
        const coffeinSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="coffein");
        
        if (nameSearch.length>0){
            foundTeas=foundTeas.filter(tea=>tea.teename[0].toLowerCase()===nameSearch[0].name);
        }else /* wenn kein tee namentlich gesucht wird */
        {
            if (teeartSearch.length>0){
            const foundInCategory=[]
            teeartSearch.map(criteria=>{
            const foundByCriteria=foundTeas.filter(tea=>tea.tee_artenname[0]===criteria.name)
            foundInCategory.push(...foundByCriteria)
        });
            foundTeas=foundInCategory;
        }
        if (originSearch.length>0){
            const foundInCategory=[]
            originSearch.map(criteria=>{
            const foundByCriteria=foundTeas.filter(tea=>tea.anbaugebietename[0]===criteria.name)
            foundInCategory.push(...foundByCriteria)
        })
            foundTeas=foundInCategory;
        }
        if (flavourSearch.length>0){
            flavourSearch.map(criteria=>{foundTeas=foundTeas.filter(tea=>tea.aromenname.includes(criteria.name))})
        }
        if (benefitSearch.length>0){
            benefitSearch.map(criteria=>{foundTeas=foundTeas.filter(tea=>tea.benefitsname.includes(criteria.name))})
        }
        if (coffeinSearch.length>0){
            coffeinSearch.map(criteria=>{foundTeas=foundTeas.filter(tea=>tea.attributename.includes(criteria.name))})
        }}
        setResultTeas(foundTeas)
    }

    const imagesHandler={
        "schwarzertee":schwarzerTee,
        "grünertee":gruenerTee,
        "eistee":eisTee,
        "früchtetee":fruechteTee,
        "gelbertee":gelberTee,
        "kräutertee":kraeuterTee,
        "oolongtee":oolongTee,
        "weißertee":weißerTee,
        "01_darjeelingtee.jpg":darjeelingtee,
        "02_assamtee.jpg":assamtee,
        "03_ceylontee.jpg":ceylontee,
        "04_keemuntee.jpg":keemuntee,
        "05_lapsangsuchongtee.jpg":lapsangsuchongtee,
        "06_senchatee.jpg":senchatee,
        "07_matchatee.jpg":matchatee,
        "08_dragonwelltee.jpg":dragonwelltee,
        "09_gyokurotee.jpg":gyokurotee,
        "10_junshanyinzhentee.jpg":junshanyinzhentee,
        "11_huoshanhuangyatee.jpg":huoshanhuangyatee,
        "12_mengdinghuangyatee.jpg":mengdinghuangyatee,
        "13_baihaoyinzhentee.jpg":baihaoyinzhentee,
        "14_baimudantee.jpg":baimudantee,
        "15_shoumeitee.jpg":shoumeitee,
        "16_darjeelinwhitetee.jpg":darjeelinwhitetee,
        "17_ceylonwhitetee.jpg":ceylonwhitetee,
        "18_tieguanyintee.jpg":tieguanyintee,
        "19_wuyiyanchatee.jpg":wuyiyanchatee,
        "20_dahongpaotee.jpg":dahongpaotee,
        "21_orientalbeautytee.jpg":orientalbeautytee,
        "22_jinxuantee.jpg":jinxuantee,
        "23_hagebuttentee.jpg":hagebuttentee,
        "24_hibiskustee.jpg":hibiskustee,
        "25_holunderbeerentee.jpg":holunderbeerentee,
        "26_heidelbeerentee.jpg":heidelbeerentee,
        "27_erdbeertee.jpg":erdbeertee,
        "28_kamillentee.jpg":kamillentee,
        "29_pfefferminztee.jpg":pfefferminztee,
        "30_ingwertee.jpg":ingwertee,
        "31_zitronnenmelissentee.jpg":zitronnenmelissentee,
        "32_brennnesseltee.jpeg":brennnesseltee
    }

useEffect(() => {
    setResultTeas(allTeas)
if (kriteria === "suche") {
                    switch (chosenCriterias.length) {
                        case 0:
                            navigateTo("/ergebnisse/alle");
                            break;
                        case 1:
                            if (chosenCriterias[0].category==="teas"){
                                const chosenTeeart=chosenCriterias[0].name.toLowerCase().replace(" ","");
                                searchFunktion();
                                navigateTo(`/ergebnisse/${chosenTeeart}`)
                            };
            
                        default:
                            searchFunktion();
                            if (!foundTeas.length){navigateTo("/*")}
                            break;
                        } 
                    }
    
}, [chosenCriterias])

    return(
        <>
            <p className='text-5xl text-gray-900 bg-grey-600 text-center font-bold my-6'>Die Welt des Tee</p>
            
            {/* für alle tees */}
            {kriteria === "alle" && <p className='text-5xl text-gray-900 bg-grey-600 text-center font-bold my-6'>Alle Tees</p>} 
            
            {/* für einzelne teeart */}
            {chosenCriterias.length===1 && 
            (allTeearten.findIndex(teeart=>teeart.name === chosenCriterias[0].name)>=0) &&  (
            <div className="mt-6 mb-6">
                <div className="card card-side bg-base-100 shadow-xl mb-4">
                    <figure><img className="object-scale-down h-48 w-96" src={imagesHandler[kriteria]} alt={allTeearten[allTeearten.findIndex(teeart=>teeart.name === chosenCriterias[0].name)].name}/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{chosenCriterias[0].name}</h2>
                        <p>{allTeearten[allTeearten.findIndex(teeart=>teeart.name === chosenCriterias[0].name)].beschreibung}</p>
                    </div>
                </div>
            </div>)}
            
            {/* für suchergebniss  */}
            {kriteria==="suche" && <SelectedCriterias chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias}/>}

            {/* anzeige aller gefundener tees */}
            <div className='flex flex-wrap justify-center items-center gap-x-6  gap-y-6 mt-10 mb-7'>
                {resultTeas.map(tea=>{
                    return(
                    <div id={tea.teeid} key={tea.teeid} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            
                            <img src={imagesHandler[tea.teeimage[0]]} alt={tea.teename[0]} className='w-full h-80 my-4 rounded-lg' />{/* path / import/ theme */}
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tea.teename[0]}</h5>
                            </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tea.teebeschreibung[0]}</p>
                            <button onClick={() => navigateTo("/teesorte")} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-7 mt-4 border border-blue-500 hover:border-transparent rounded-full ">anzeigen<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                )})}
            </div>
        </>
    )
}