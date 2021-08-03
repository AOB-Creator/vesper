import { createContext } from "react";


const defaultValue={
    authentificated: true,
    user:null
}
const Contexted=createContext();

function Reducer( state=defaultValue , action ){
    switch(action.type){
        case "LOGIN": return{
            authentificated: true,
            user: action.payload
        };
        case "LOGOUT": return{
            authentificated: false,
            
        };
        default: return state
    }
}

export {
    Reducer,
    defaultValue,
    Contexted
}