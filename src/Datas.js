import Display from './Display'
function Datas(){
    const person={
        empname:'priya',
        city:'covai'
    }
    let name='hari'
    let roll=25
    const ans=`my name is ${name}`
    return(
        <>
        <h1>my name is {name}</h1>
        <h1>{ans}</h1>
        <Display n={name} roll={roll} gender='male' obj={person}/>
        </>
    )
}
export default Datas