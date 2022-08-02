import {
    
  RETRIEVE_USER,
  UPDATE_USER,
  DELETE_USER,
  } from "../actions/types";
  const initialState = [];
  function userReducer(user = initialState, action) {
    const { type, payload } = action;
    switch (type) {
     
      case RETRIEVE_USER:
        return payload;
      case UPDATE_USER:
        return user.map((u) => {
          if (u.userLoginId === payload.userLoginId) {
            return {
              ...user,
              ...payload,
            };
          } else {
            return user;
          }
        });
      case DELETE_USER:
        return user.filter(({ userLoginId }) => userLoginId !== payload.userLoginId);
      
      default:
        return user;
    }
  };
  export default userReducer;