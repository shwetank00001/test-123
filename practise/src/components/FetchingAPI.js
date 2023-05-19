import React from 'react'

const FetchingAPI = () => {

    const [count,setCount] = React.useState(1)


    const[poke, setPoke] = React.useState([])

    function addValue(){
        setCount(function(item){
            return(item+1)
        })
    }

    React.useEffect(function(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            return setPoke(data)
        })
}, [count])

  return (
    <div>
        <h2>Click for pokemon details</h2>
        <button onClick={addValue}>Click here</button>
        <h3>{count}</h3>

        <pre>{JSON.stringify(poke, null, 2)}</pre>
    </div>
  )
}

export default FetchingAPI