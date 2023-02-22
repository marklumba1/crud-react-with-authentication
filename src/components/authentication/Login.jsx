import { useState } from "react";
import { useLoginMutation } from "../../app/features/authSlice";
import Toast from "../toast/Toast";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../app/features/userSlice";
import { useDispatch } from "react-redux";

const Login = ({onClickRegister}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loginUser, result] = useLoginMutation()
    const [formdata, setFormdata] = useState({
        email: ``,
        password: ``
    })

    const handleInputChange = (key, value) => {
        setFormdata({...formdata, [key] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(formdata).unwrap()
        .then(res => {
            dispatch(setUser(res))  
            localStorage.data = JSON.stringify(res)
            navigate(`/user/${res.user.id}`)
        })
        .catch(err => console.log(err))

        
    }

    return ( 
        <div className="inner">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formdata.email} onChange={e => handleInputChange(`email`, e.target.value)} placeholder="email"/>
                <input type="password" value={formdata.password} onChange={e => handleInputChange(`password`, e.target.value)} placeholder="password" />
            
                <button>login</button>
                {result.isError && <Toast data={result.error} type={`error`}/>}
                {result.isLoading && <Toast data={`loading`} type={`loader`}/>}
            </form>
            <span onClick={onClickRegister}>Register Here</span>
           
        </div>
     );
}
 
export default Login;