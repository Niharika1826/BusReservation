import http from "../api/http-common";
const getAll = () => {
  return http.get("/viewAllFeedBacks");
};
const get = feedBackId => {
  return http.get(`/viewFeedBack/${feedBackId}`);
};
const create = data => {
  return http.post("/addFeedBack", data);
};
const update = (feedBackId, data) => {
  return http.put(`/updateFeedBack/${feedBackId}`, data);
};

const FeedbackService = {
  getAll,
  get,
  create,
  update,
  
};
export default FeedbackService;