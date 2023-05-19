import React from 'react'

const Counter = () => {

    const [count, setCount ] = React.useState(0)


    function add(){
        setCount(function(item){
            return(item+1)
        })
    }
  return (
    <div>
        <h2>Hi</h2>
        <button onClick={add}>Add counter</button>
        <h4>{count}</h4>
    </div>
  )
}

export default Counter