import {
    ADD_BUS,
  RETRIEVE_BUSES,
  UPDATE_BUS,
  DELETE_BUS,
  } from "../actions/types";
  const initialState = [];
  function busReducer(buses = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_BUS:
        return [...buses, payload];
      case RETRIEVE_BUSES:
        return payload;
      case UPDATE_BUS:
        return buses.map((bus) => {
          if (bus.busId === payload.busId) {
            return {
              ...bus,
              ...payload,
            };
          } else {
            return bus;
          }
        });
      case DELETE_BUS:
        return buses.filter(({ busId }) => busId !== payload.busId);
      
      default:
        return buses;
    }
  };
  export default busReducer;