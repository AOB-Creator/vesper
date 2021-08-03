import { useEffect, useState } from 'react'
import '../Lesson/lesson.scss'

function Inputer(){
    const [data, setdata]= useState({
        user: "",
        age: null
    })

    
    

    useEffect(()=>{ console.table(data.user, data.age) }, [data])
    return(
        <div className="inputs">
            <form action="" onSubmit={(e)=>{
                e.preventDefault()
                setdata({
                    user: "",
                    age: null   
                })
                console.log(data)
            }}>
                <input type="text" onChange={(e)=>{setdata({...data,
                    user:e.target.value
                    })}}/>
                <input type="number" name="" id=""   onChange={(ev)=>{setdata({ ...data, age:ev.target.value} )}} />
                <button type="submit">Submit</button>
            </form>
            <div className="user"> My name is {data.user}</div>    
            <div className="age"> I am {data.age}</div>
        </div>    
    )
}
export default Inputer