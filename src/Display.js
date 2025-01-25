function Display(values){
const {n,roll,gender,obj}=values
const{empname,city}=obj
return(
    <>
    <h3>Student Info: {n} {roll} {gender}</h3>
    <h2>{empname} , {city}</h2>
    <h3> Hai Everyone !!</h3>
    <h4>..............</h4>
    </>
)
}
export default Display