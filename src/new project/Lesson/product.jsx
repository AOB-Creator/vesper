import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import {Reducer, Contexted, defaultValue} from './author';
import Form from '../components/core/form';

function Authens(){
    const [state, dispatch] = useReducer(Reducer, defaultValue)
    const {authentificated, user} =state;
    useEffect(()=>{
        console.log(authentificated)
    }, [state])
    const Login = ()=>{
        dispatch({
            type: "LOGOUT",
            
        })
    }
    return(
        <Router> 
        <Switch>
            <Route path="/" exact component={Form}/>

        
        
    
        </Switch>
    </Router>
    )
    
}
export default Authens