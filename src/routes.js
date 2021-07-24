import AddContact from "./pages/addContact/AddContact";
import Contacts from "./pages/contact/Contacts";
import Favorite from "./pages/favorite/Favorite";
import UserInfo from "./pages/userInfo/UserInfo";


const routes = [
    {path:"/favorite" , exact:true, component:Favorite},
    {path:"/add" , exact:true, component:AddContact},
    {path:"/:id" , exact:true, component:UserInfo},
    {path:"/" , exact:true, component:Contacts},
]
export default routes