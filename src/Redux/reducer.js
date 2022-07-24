import *as types from "./actionType"
const intial_state={
    information:[],
    isloading:false,
    iserror:false
}

const reducer=(state=intial_state,action)=>{
   const{type,payload}=action;
   switch(type){
    case types.GET_PROJECT_REQUEST:
        return{
            ...state,
            isLoading:true,
            iserror:false
        }
    case types.GET_PROJECT_SUCCESS:
       
        return{
            ...state,
            isLoading:true,
            information:payload,
            iserror:false
        }
    case types.GET_PROJECT_FAILURE:
        return{
            ...state,
            isLoading:true,
            iserror:false
        }

        





        case types.POST_PROJECT_REQUEST:
        return{
            ...state,
            isLoading:true,
            iserror:false
        }
    case types.POST_PROJECT_SUCCESS:
       
        return{
            ...state,
            isLoading:false,
         
            iserror:false
        }
    case types.POST_PROJECT_FAILURE:
        return{
            ...state,
            isLoading:true,
            iserror:false
        }
    default:
        return state
   }
}
export default reducer