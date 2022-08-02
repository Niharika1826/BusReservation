import http from "../api/http-common";

const getAll = () => {
    return http.get("/viewAllReservations");
  };
  const get = reservationId=> {
    return http.get(`/viewReservationById/${reservationId}`);
  };
  const create =(data) => {
    return http.post("/addReservation", data);
  };
  const update = (reservationId,data) => {
    return http.patch(`/updateReservation/${reservationId}`, data);
  };
  const remove = reservationId => {
    return http.delete(`/deleteReservation/${reservationId}`);
  };

  const findByDate=(date,data)=>{
    return http.get(`/viewReservationByDate/${date}`,data)
  }

  const ReservationService ={
    getAll,
    get,
    create,
    update,
    remove,
    findByDate,
  }
  export default ReservationService;