import {useSelector} from "react-redux"
import { redirect } from "react-router-dom";


const RequireAuth = () => {
    const user = useSelector((state) => state.auth.user);
    
    if(!user) {
        throw redirect("/")
    }

    return null
}

export default RequireAuth