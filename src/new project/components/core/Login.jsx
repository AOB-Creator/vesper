import '../style/login.scss'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useState } from 'react'
function Login({ type, required = false, placeholder, label, error=false, }){

    const [typer, settyper] = useState(type)
    
    const TypeChanger = ( type )=>{
        settyper((prev)=>{ 
            return prev==='text'?'password':'text'
        })
        console.log(typer)
    }

    return(
        <div className="inputs">
           <div className="input">
               <label htmlFor="inputer_alpha">{label}</label>
                <input type={typer} id="inputer_alpha" className="inputer_alpha" placeholder={placeholder} required/>
                <span className="logo-span">
                {
                    type!=="password"?<span></span>:
                    <span onClick={()=>{TypeChanger()}} >
                    {
                        typer==="password"?<FiEye/>:<FiEyeOff/>
                        }
                    </span> 
                }
                </span>
                    
           </div>

           <span >
               { 
                   error? <span className="error">You have an error</span>:<span></span>
               }
           </span>
        </div>
    )
}
export default Login