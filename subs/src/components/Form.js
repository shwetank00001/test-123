import React from 'react'

const Form = () => {

    const [formData, setForm] = React.useState({
        email:"",
        password:"",
        passConf: ""
    })

    function handleChange(event){
        const {name,value} = event.target
        setForm(function(item){
            return({
                ...item,
                [name]: value
            })
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        if (formData.passConf === formData.password){
            console.log("Successfully signed up !")
        }
        else{
            console.log("Passwords do not match")
            return
        }
        console.log("Thank you for signing up for newsletter !")
    }
  return (
    <div >
        <form onSubmit={handleSubmit}>

            <label htmlFor='email'>Email</label><br/>
            <input id='email' type='name' name='email' value={formData.email} onChange={handleChange} />
            <br/>

            <label htmlFor='password'>Password</label><br/>
            <input id='password' type='password' name='password' value={formData.password} onChange={handleChange} />
            <br/>

            <label htmlFor='passConf'>Retype password</label><br/>
            <input id='passConf' type='password' name='passConf' value={formData.passConf} onChange={handleChange} />
            <br/>

        <button>Submit</button>
        </form>
    </div>
  )
}

export default Form