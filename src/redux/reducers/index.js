import {SIGNIN_WITH_GOOGLE} from '../constants/constants'
const initState={
    userData:""
}

const rootReducer=(state=initState,action)=>{
switch(action.type){
    case SIGNIN_WITH_GOOGLE:{
        return Object.assign({},state,{
            userData:action.payload
          })
    }
    default:{
        return state
    }
}
}
export default rootReducer