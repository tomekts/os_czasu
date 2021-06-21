import React, { useState } from 'react'

import db from '../db.json'
import './Main.css';
var isIE = /*@cc_on!@*/false || !!document.documentMode;



const Main = () => {   
    const today=10;
    const [Date,] = useState(db)
    


    

    return (        
        <div className={'Main'}>
            <div className={'Bar'} ></div>               
                {Date? 
                    Date.map((item, index) =>(
                        <>
                        <div id={index} onMouseEnter={()=> {console.log(document.getElementById(index)); }} key={index} className={`Icon ${parseInt(item.data.substring(0,2))<=today?'Icon2':''} `} style={{left: parseInt(item.data.substring(0,2))*3+"%", top: isIE?'210px':''}}  >                    
                            {/* {parseInt(item.data.substring(0,2))}  */}
                            <img src={item.ikona} alt="logo"></img><br></br> 
                                                
                        </div>
                        <div className={'Opis'} style={{left: parseInt(item.data.substring(0,2))*3+"%", top: isIE?'150px':''}}> 
                                {item.data}
                                <hr width='80%'></hr>
                                {item.nazwa}
                            </div>  
                        </>
                    )) 
                :
                    'brak danych'
                }
                <div className={'Progres'} style={{width: today*3+'%', top: isIE?'205px':''}  }></div>                
             
            
        </div>
    )
}

export default Main
