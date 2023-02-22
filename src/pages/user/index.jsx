import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import AddPost from "../../components/post/AddPost";
import Posts from "../../components/post/Posts";

const User = () => {
    const user = useSelector(state => state.userSlice.user.user || JSON.parse(localStorage.data).user) 

    return ( 
        <div className="container-user">
        <Navbar user={user}/>
            <div className="inner-user">
                <AddPost user={user}/>
                <Posts user={user}/>
            </div>
        </div>
     );
}
 
export default User;