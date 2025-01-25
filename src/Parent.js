import Child1 from './Child1'
const Parent=()=>{
    const message='Props Drilling!!'
    return(
        <>
        <h1>Parent</h1>
        <Child1 message={message}/>
        </>
    )
}
export default Parent


