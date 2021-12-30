import {createSelector} from 'reselect';
export const getUserValue = createSelector(
    (state) =>state.user.userValue,
    (userValue) =>{
        return userValue;
    }
)

export const getUserList = createSelector(
    (state) =>state.user.userList,
    (userList) =>{
        return userList;
    }
)