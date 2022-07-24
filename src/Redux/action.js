 import axios from "axios";
import *as types from "./actionType";
  
 const get_data=()=>(dispatch)=>{
    dispatch({type:types.GET_PROJECT_REQUEST});
    axios.get("http://localhost:8080/data")
    .then((r)=>dispatch({type:types.GET_PROJECT_SUCCESS,payload:r.data}))
    .catch((error)=>dispatch({type:types.GET_PROJECT_FAILURE}))
 }
 export default get_data;


    
 
