import {
    ADD_ROUTE,
  RETRIEVE_ROUTE,
  UPDATE_ROUTE,
  DELETE_ROUTE,
  } from "../actions/types";
  const initialState = [];
  function routeReducer(routes = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_ROUTE:
        return [...routes, payload];
      case RETRIEVE_ROUTE:
        return payload;
      case UPDATE_ROUTE:
        return routes.map((route) => {
          if (route.routeId === payload.routeId) {
            return {
              ...routes,
              ...payload,
            };
          } else {
            return route;
          }
        });
      case DELETE_ROUTE:
        return routes.filter(({ routeId }) => routeId !== payload.routeId);
      
      default:
        return routes;
    }
  };
  export default routeReducer;