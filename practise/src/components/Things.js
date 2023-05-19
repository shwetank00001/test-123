import React from 'react'

const Things = () => {

    const [value, setValue] = React.useState(['Thing 1' , 'Thing 2'])

    const ele = value.map(function(item){
        return (
            <h3>{item}</h3>
        )
    })

    function addItem(){
        setValue(function(item){
            return(
                [...item,
                    `Thing ${value.length + 1}`
                ]
            )
        })
    }
  return (
    <div>
        <button onClick={addItem}>Add more things</button>
        {ele}
    </div>
  )
}

export default Things