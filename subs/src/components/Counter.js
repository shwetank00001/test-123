import React from 'react'

const Counter = () => {

    const[count, setCount] = React.useState(1)

    const [api, setApi] = React.useState()

    function add(){
        setCount(function(item){
            return(item+1)
        })
    }

    React.useEffect(function(){
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(req =>req.json())
        .then(function(item){
            return(setApi(item))
        })

    },[count])

  return (
    <div>
        <button onClick={add}>Value</button>
        <h4>{count}</h4>
        <pre>{JSON.stringify(api,null,1)}</pre>
    </div>
  )
}

export default Counter