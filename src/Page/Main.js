import React, { useState } from 'react'

import db from '../db.json'
import './Main.css';
var isIE = /*@cc_on!@*/false || !!document.documentMode;



const Main = () => {   
    const today=10; // aktualny dzien
    const [Date,] = useState(db) // pobieranie danych z pliku
    


    

    return (        
        <div className={'Main'}>
            <div className={'Bar'} ></div>               
                {Date? 
                    Date.map((item, index) =>(
                        <div key={index} className={'Mobile'} >
                            <div 
                                id={index}                                              
                                onMouseLeave={()=> document.getElementById(item.nazwa).classList.add('Hide') }
                                onMouseOut={()=> document.getElementById(item.nazwa).classList.remove('Hide') } 
                                className={`Icon ${parseInt(item.data.substring(0,2))<=today?'Icon2':''} `} 
                                style={{left: parseInt(item.data.substring(0,2))*3+"%", top: isIE?'210px':''}}  
                            >                    
                                <img src={item.ikona} alt="logo"></img><br></br> 
                                                    
                            </div>

                            <div 
                                id={item.nazwa} className={'Opis Hide'} 
                                style={{left: parseInt(item.data.substring(0,2))*3+"%", top: isIE?'150px':''}}
                            > 
                                {item.data}<br></br>
                                <hr width='80%'></hr>
                                {item.nazwa}
                            </div>  
                        </div>
                    )) 
                :
                    <div className={'Error'}>Błąd pobrania danych</div>
                }
                <div className={'Progres'} style={{width: today*3+'%', top: isIE?'205px':''}  }></div>                
             
            
        </div>
    )
}

export default Main
