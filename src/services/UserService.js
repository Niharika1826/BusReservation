import http from "../api/http-common";
const getAll = () => {
  return http.get("/viewAllUsers");
};
const get = userLoginId => {
  return http.get(`/viewUser/${userLoginId}`);
};

const update = (userLoginId,userName, data) => {
  return http.put(`/updateUser/${userLoginId}/${userName}`, data);
};
const remove = userLoginId => {
  return http.delete(`/deleteUser/${userLoginId}`);
};

const UserService = {
  getAll,
  get,
  update,
  remove,

};
export default UserService;