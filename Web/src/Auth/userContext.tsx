import { createContext } from "react";
interface Events{
    user:any;
    login:Function;
    logout:Function;

}
const UserContext = createContext({});
export default UserContext;