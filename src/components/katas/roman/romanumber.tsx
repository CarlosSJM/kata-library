import React, { ReactElement, useState, useEffect } from 'react';

const Roman: React.FC<any> = (props): ReactElement =>{

    //TODO toast & validation
    const [arabicNumber,setArabicNumber] = useState(0);
    const [romanNumber,setRomanNumber] = useState("");


    function solution(number: number): string {
        // convert the number to a roman numeral
        
        let lookup : any = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
        for ( let i in lookup ) {
          while ( number >= lookup[i] ) {
            roman += i;
            number -= lookup[i];
          }
        }
        setRomanNumber(roman)
        return roman;
      }
    
    return (<section className="mb-5" ><h2>Conversor numeros Romanos</h2>
    <div>
    <input type="number" value={arabicNumber} min={0} max={3999} onChange={(e)=>{ (console.log("Onchange",e));setArabicNumber(parseInt(e.target.value))}} ></input> 
    <button onClick={()=>{console.log(solution(arabicNumber))} } >Submit</button>
    </div>
    {romanNumber && <div>
          <h3>Result</h3>
          <span>{romanNumber} </span>
      </div>}
    </section>)

}
export default Roman;

