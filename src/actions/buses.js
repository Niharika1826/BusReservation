import {
    ADD_BUS,
  RETRIEVE_BUSES,
  UPDATE_BUS,
  DELETE_BUS,
  
} from "./types";
import  BusService from "../services/BusService";
//we are creating action objects so that they can be dispatched to the store
//addProduct --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addBus = ({busId,arrivalTime,availableSeats,busName,busType,departureTime,driverName,routeFrom,routeTo,seats}) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await BusService.create({ busId,arrivalTime,availableSeats,busName,busType,departureTime,driverName,routeFrom,routeTo,seats});
      
    dispatch({
      type: ADD_BUS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveBuses = () => async (dispatch) => {
  try {
    const res = await BusService.getAll();
    dispatch({
      type: RETRIEVE_BUSES,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateBus = (busId, data) => async (dispatch) => {
  try {
    const res = await BusService.update(busId, data);
    dispatch({
      type: UPDATE_BUS,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteBus = (busId) => async (dispatch) => {
  try {
    await BusService.remove(busId);
    dispatch({
      type: DELETE_BUS,
      payload: { busId },
    });
  } catch (err) {
    console.log(err);
  }
};
