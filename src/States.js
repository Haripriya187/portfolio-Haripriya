import { useState } from "react"

export default function States(){
    //var clr='blue'
    var [clr,setClr]= useState('blue')
    console.log("b4  : ",clr)
      
    return(
        <>
        <h1>I love {clr} color</h1>
        <button onClick={()=>{setClr(clr='red')} }>click here!! </button>
        </>
    )
}



