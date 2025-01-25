import Child2 from './Child2.js'
function Child1(){
const Child1 = ({ message }) => {
  return(
    <>
      <h2>Child1 Component</h2>
      <Child2 message={message} />
    </>
  )
}
}

export default Child1;