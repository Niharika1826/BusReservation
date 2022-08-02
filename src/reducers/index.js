import { combineReducers } from "redux";
import route from './route'
import feedbacks from'./feedbacks';
import reservations from "./reservations";
import buses from "./buses";
import user from './user';
export default combineReducers({
  route,feedbacks,reservations,buses,user
});