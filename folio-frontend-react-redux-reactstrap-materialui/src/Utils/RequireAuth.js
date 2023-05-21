import {useSelector} from "react-redux"
import { redirect } from "react-router-dom";

const user = useSelector(state => state.auth.user)

 const requireAuth = () => {
    if(!user) {
        throw redirect("/")
    }
}

export default requireAuth