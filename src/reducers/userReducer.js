import { UserActionType } from "../action/userAction";
const initState = {
    userValue:'',
    userList:[],
};

export default function user(state = initState,action){
    switch(action.type){
        case UserActionType.SHOW_VALUE:
            return {...state,userValue :'through reducer'};
        case UserActionType.SHOW_LIST:
            return {...state,userList:[1,2,3]};
        default:
            return state;
    }
}