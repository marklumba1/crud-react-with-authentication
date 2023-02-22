import { useNavigate } from "react-router-dom"

const Navbar = ({user}) => {

    const navigate = useNavigate()
    const handleSignOut = () => {
        localStorage.clear()
        navigate("/login")
    }
    return ( 
        <div className="navbar">
            <span>Hi! {user.firstName}</span>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
     );
}
 
export default Navbar;