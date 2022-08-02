import {
    ADD_FEEDBACK,
  RETRIEVE_FEEDBACKS,
  UPDATE_FEEDBACK,
  
  
} from "./types";
import  FeedbackService from "../services/FeedbackService";


export const addFeedback = ({bus,user,driverRating,serviceRating,overallRating,comments,}) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await FeedbackService.create({bus,user,driverRating,serviceRating,overallRating,comments,  });
    dispatch({
      type: ADD_FEEDBACK,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveFeedbacks = () => async (dispatch) => {
  try {
    const res = await FeedbackService.getAll();
    dispatch({
      type: RETRIEVE_FEEDBACKS,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateFeedback = (feedBackId, data) => async (dispatch) => {
  try {
    const res = await FeedbackService.update(feedBackId, data);
    dispatch({
      type: UPDATE_FEEDBACK,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
