import { createContext , useState } from "react";

const ReservationContext = createContext({});

export const AuthProvider = ({children})=>{
    const [userLoginId,setUserLoginId] = useState({});
    const [busId,setBusId]= useState({});



    return (<ReservationContext.Provider value={{userLoginId,setUserLoginId,busId,setBusId}}>
        {children}
    </ReservationContext.Provider>)
}
export default ReservationContext;