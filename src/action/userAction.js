export const UserActionType = {
    SHOW_VALUE: 'SHOW_VALUE',
    SHOW_LIST: 'SHOW_LIST'
}


export function getUserValue(){
    return async (dispatch) =>{
        dispatch({
            type: UserActionType.SHOW_VALUE,
        });
    };
}

export function getUserList(){
    return async (dispatch) =>{
        dispatch({
            type: UserActionType.SHOW_LIST,
        });
    };
}