import {
    ADD_ROUTE,
  RETRIEVE_ROUTE,
  UPDATE_ROUTE,
  DELETE_ROUTE,
  
} from "./types";
import  RouteService from "../services/RouteService";


export const addRoute = ({routeFrom,routeTo,distance}) => async (dispatch) => {
  try {
    
    const res = await RouteService.create({ routeFrom,routeTo,distance });
    dispatch({
      type: ADD_ROUTE,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveRoute = () => async (dispatch) => {
  try {
    const res = await RouteService.getAll();
    dispatch({
      type: RETRIEVE_ROUTE,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateRoute = (routeId, data) => async (dispatch) => {
  try {
    const res = await RouteService.update(routeId, data);
    dispatch({
      type: UPDATE_ROUTE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteRoute = (routeId) => async (dispatch) => {
  try {
    await RouteService.remove(routeId);
    dispatch({
      type: DELETE_ROUTE,
      payload: { routeId },
    });
  } catch (err) {
    console.log(err);
  }
};
