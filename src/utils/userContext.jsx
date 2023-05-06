import { createContext } from "react";


const currentUserLocalDetails = createContext(
    {
        localUser: {
            name: "Dummy Name",
            email: "Dummy@gmail.com"
        }
    }

)

export default currentUserLocalDetails;