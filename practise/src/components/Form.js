import React from 'react'

const Form = () => {

    const [data, setData] = React.useState({
        fname:"",
        lname:"",
        email:"",
        areYouTall: false
    })

    function handleChange(event){
        const {type,name,value,checked} = event.target
        setData(function(item){
            return({
                ...item,
                [name]:type === "checkbox" ? checked : value
            })
        })
    }

  function handleSubmit(event){
    event.preventDefault()
    console.log(data)
  }
 
  return (

        <form onSubmit={handleSubmit}>
            <input type='name' placeholder='fname' name='fname' value={data.fname} onChange={handleChange}/><br/><br/>
            <input type='name' placeholder='lname' name='lname' value={data.lname} onChange={handleChange}/><br/><br/>
            <input type='name' placeholder='email' name='email' value={data.email} onChange={handleChange} /><br/><br/>
            <input id='areYouTall' type='checkbox' placeholder='fname' name='areYouTall' checked={data.areYouTall} onChange={handleChange}/>
            <label htmlFor='areYouTall'>Are you tall</label><br/><br/>

            <button>Submit</button>
        </form>
  )
}

export default Form