// import { useState } from "react";
// import {setUsers} from "./Slices/userSlice";
// import { useDispatch } from "react-redux";


// export default function Form(){
//     const dispatch=useDispatch()
//     const [obj,setObj]=useState({name:'',roll:'',gender:'',city:''})

//     const addUser=(formdata)=>{
//         formdata.preventDefault()
//         dispatch(setUsers(obj))
//     }

//     // function formSubmit(formdata)
//     // {    
//     //     formdata.preventDefault()
//     //     console.log('success.........',obj.city,obj.gender,obj.name,obj.roll)
//     // }

//     function updData(data){
//         var variable=data.target.name
//         var val=data.target.value
//         setObj(()=>{return {...obj,[variable]:val}})
//     }


//     return(
//         <>
//         <form>
//             Name: <input type='text' name="name" onChange={updData}></input><br/><br/>
//             Rollno: <input type='text' name="roll" onChange={updData}></input><br/><br/>
//             Gender: <input type='text' name="gender" onChange={updData}></input><br/><br/>
//             City: <input type='text' name="city" onChange={updData}></input><br/><br/>
//             <input type="submit" onClick={addUser}value="signup"></input>

//         </form>
//         </>
//     )
// }