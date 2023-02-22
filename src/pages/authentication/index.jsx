
import { useNavigate } from "react-router-dom";
import Login from "../../components/authentication/Login";
import Register from "../../components/authentication/Register";
import { useEffect, useState } from "react";

const Authentication = () => {

    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.data) navigate(`/user/${JSON.parse(localStorage.data).user.id}`)
    },[])

    
    const handleSwitchAuthMode = () => {
        setIsLogin(!isLogin)
    }
    return ( 
      <div className="container">
            {isLogin ? 
            <Login onClickRegister={handleSwitchAuthMode}/> :
            <Register onClickLogin={handleSwitchAuthMode}/>}
        </div>
     );
}
 
export default Authentication;