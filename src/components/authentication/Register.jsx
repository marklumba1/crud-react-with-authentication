import { useState } from "react"
import { useRegisterUserMutation } from "../../app/features/authSlice"
import Toast from "../toast/Toast"
import { useNavigate } from "react-router-dom"
import { setUser } from "../../app/features/userSlice"
import { useDispatch } from "react-redux"

const Register = ({onClickLogin}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [registerUser, result] = useRegisterUserMutation()
    const [formData, setFormData] = useState({
        email: ``,
        password:``,
        firstName: ``,
        lastName: ``
    })

    const handleFormChange = (key, form) => {
        setFormData({...formData, [key]: form})
    }

    const handleRegister = (e) => {
        e.preventDefault()
        registerUser(formData).unwrap()
            .then(res => {
                dispatch(setUser(res))  
                localStorage.data = JSON.stringify(res)
                navigate(`/user/${res.user.id}`)
            })
            .catch(err => console.log(err))
            
    }
    return ( 
        <div className="container">
            <div className="inner">
                <form onSubmit={handleRegister}>
                    <input type="text" value={formData.email} onChange={e => handleFormChange(`email`, e.target.value)} placeholder="email" />
                    <input type="password" value={formData.password} onChange={e => handleFormChange(`password`, e.target.value)}  placeholder="password" />
                    <input type="text" value={formData.firstName} onChange={e => handleFormChange(`firstName`, e.target.value)}  placeholder="First Name" />
                    <input type="text" value={formData.lastName} onChange={e => handleFormChange(`lastName`, e.target.value)}  placeholder="Last Name" />
                    <button disabled={result.isLoading}>Register</button>
                    {result.isError && <Toast data={result.error} type={`error`}/>}
                    {result.isLoading && <Toast data={`loading`} type={`loader`}/>}
                </form>
                <span onClick={onClickLogin}>Back to login</span>
            </div>
        </div>
     );
}
 
export default Register;