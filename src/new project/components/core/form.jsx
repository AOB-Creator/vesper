import Login from "./Login"
import Button from './button'
import '../style/form.scss'
import { useState } from "react"
function Form(){

    const [value, setvalue]=useState("")
    
    return(
        <div className="form">
            <form className="centers" onSubmit={(event)=>{
                event.preventDefault()
            }}>
                <div className="title_form">
                    <h1 className="admin_logo">
                        <span>Admin</span><span>Panel</span>
                    </h1>
                    <p>Log in to admin</p>
                </div>
                
                <Login placeholder="Admin name" type='email' error={true} required={true} label="Name" ></Login>
                <Login placeholder="Password" label="Password" type="password" required={true}></Login>
                <Button type="submit" content="Submit"></Button>
            </form>
        </div>
    )
}
export default Form